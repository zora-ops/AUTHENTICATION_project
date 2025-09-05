import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(400).json({ message: "Not authorized Login again" });

    try {

        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

        if (tokenDecode?.id) {
            req.body.userId = tokenDecode.id;
            return next();
        } else {
            return res.status(400).json({ message: "Not Authorized. Login again" });
        }


    } catch (error) {
        res.status(400).json({ message: error.message});
    }
}

export default userAuth