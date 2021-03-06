const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({
                message: "Please Longin First.."
            })
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);

        req.user = await User.findById(decoded._id)

        next()
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
}