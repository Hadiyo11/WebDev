const jwt = require("jsonwebtoken")

//auth middle
exports.requireLogin = (req, res, next)=>{
    try {
        if(req.headers.autherization){
            const token = req.headers.autherization.split(" ")[1]
            //verify token
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            //attatch token to request
            req.user= decode;
            next();
        } else{
            return res.status(400).json({message: "Unauthorized"})
        }
    } catch (err) {
        console.log("something went wrong")
    }
}