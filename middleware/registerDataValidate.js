exports.registerDataValidate = (req, res, next)=>{
    const {name, email, password, confirmPassword} = req.body;

    if(req.body && name && email && password && confirmPassword){
        next();
    }else{
        res.status(400).json({
            success: false,
            message: "All fields are required!"
        })
    }
}