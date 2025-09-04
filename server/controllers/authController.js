import bcrypt from 'bcryptjs'
import  jwt  from "jsonwebtoken"
import User from '../models/userModel.js'
import cookieOptions from '../config/cookie.js'


//###############################---------REGISTER CONTROLLER---------##############################
export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({message: "Missing details" })

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const hashedPass = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPass });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie('token', token, cookieOptions)

        return res.status(200).json({ message: "user created successfully" });


    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//##########################-------------LOGIN CONTROLLER----------------###########################

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: "Email and password are required" });

    try {
        const user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid email" });

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) return res.status(400).json({ message: "Invlid Password" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie('token', token, cookieOptions)

        return res.status(200).json({ message: "user login successfully" });

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

//############################-----------------LOG OUT----------------##################################

export const logout = async (req, res) => {
    try {
        res.clearCookie('token', cookieOptions)

        return res.status(200).json({message: "logout success"})
    } catch (error) {
        return res.status(400).json({ message: "logout failed" });
    }
}