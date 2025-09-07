import User from '../models/userModel.js'

export const userData = async (req,res) => {
    
    try {
        const userId = req.userId;

        const user = await User.findById(userId);
        console.log(user)

        if(!user) return res.status(400).json({message: "user not found"});

        res.status(200).json({
                name: user.name,
                isAccountVerified: user.isAccountVerified,
    })

    } catch (error) {
        res.status(400).json({message: "error getting useData from database"})
    }

}