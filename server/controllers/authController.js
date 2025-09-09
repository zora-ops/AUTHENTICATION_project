import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"
import User from '../models/userModel.js'
import cookieOptions from '../config/cookie.js'
import transporter from '../config/nodeMailer.js'

//###############################---------REGISTER CONTROLLER---------##############################

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) return res.status(400).json({ message: "Missing details" })

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: "Email already exists" });

        const hashedPass = await bcrypt.hash(password, 10);

        const user = new User({ name, email, password: hashedPass });
        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.cookie('token', token, cookieOptions)

        //=======-----------sending mail------------============
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "welcome to greatstack",
            text: `Your email account has been registered successfully to our database: ${email}`
        }

        await transporter.sendMail(mailOptions)

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

        return res.status(200).json({ message: "logout success" })
    } catch (error) {
        return res.status(400).json({ message: "logout failed" });
    }
}

//############################---------------verify otp---------------#################################
export const sendVerifyOtp = async (req, res) => {
    try {

        const  userId  = req.userId;

        const user = await User.findById(userId);
  
        if (user.isAccountVerified) return res.status(400).json({ message: "account already verified" });

        const otp = String(Math.floor(100000 + Math.random() * 900000))

        user.verifyOtp = otp;

        user.verifyOtpExpireAt = Date.now() + 24 * 60 * 60 * 1000;
 
        await user.save();
        
        console.log("passed")
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Account verification OTP",
            text: `your OTP is: ${otp}`
        }


        await transporter.sendMail(mailOptions)

        res.status(200).json({message: "verification has been sent on the email"})

    } catch (error) {
        res.status(400).json({ message: "got something here" ,})
    }
}

//############################--------------verify email---------------################################
export const verifyEmail = async (req, res) => {
    const {otp}  = req.body;
    const userId = req.userId
    console.log(userId, otp)
    if(!userId || !otp) return res.status(400).json({message: "missing details"});

    try {
        
        const user = await User.findById(userId);

        if(!user) return res.status(400).json({message: "user not found"});
        if(user.verifyOtp === '' || user.verifyOtp !== otp) return res.status(400).json({message: "invalid OTP"});
        if(user.verifyOtpExpireAt < Date.now) return res.status(400).json({message: "OTP expired"})
        
        user.isAccountVerified = true;
        user.verifyOtp = '';
        user.verifyOtpExpireAt = '';

        user.save();

        console.log(user.isAccountVerified)

        res.status(200).json({message: "Email verified successfully"});

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

//###########################------------isLoggedIn----------------#####################################
export const isAuthenticated = async (req,res) => {
    try {
        res.status(200).json({message: "user is logged in"})
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//##############################--------send password reset-------########################################

export const sendResetPassOtp = async (req,res) => {
    const {email} = req.body;

    if(!email) return res.status(400).json({message: "Email is required"});

    try {
        
        const user = await User.findOne({email});

        if(!user) return res.status(400).json({message: "user not found"});

        const otp = String(Math.floor(100000 + Math.random() * 900000));
        user.resetOtp = otp;
        user.resetOtpExpireAt = Date.now() + 15 * 60 * 1000;

        await user.save()

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Reset Password Otp",
            text: `Your Otp for resetting your password is : ${otp}. use this otp to reset your password `
        }

        await transporter.sendMail(mailOptions);

        res.status(200).json({message: "OTP sent Successfully"});

    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

//##############################---------verify otp and reset passowrd--################################

export const resetPassword = async (req,res) => {
    const {email, otp, newPassword} = req.body;
    
    if(!email || !otp || !newPassword) return res.status(400).json({message: "All the field are required"});

    try {
        const user = await User.findOne({email});

        if(user.password === newPassword) return res.status(400).json({message: "Current and previous Password are similar"})

        if(!user) return res.status(400).json({message: "user not found"});

        if(user.resetOtp === "" || user.resetOtp !== otp) return res.status(400).json({message: "Invalid Otp"});

        if(user.resetOtpExpireAt < Date.now()) return res.status(400).json({message: "otp has expired"});


        const hashedPass = await bcrypt.hash(newPassword, 10);

        user.password = hashedPass;
        user.resetOtp = '';
        user.resetOtpExpireAt = ''
        await user.save();

        res.status(200).json({message: "password reset successfully"});

    } catch (error) {
        res.status(400).json({message: error.message})
    }

}