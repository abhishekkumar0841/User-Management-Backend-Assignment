const {userModel} = require('../models/userSchema')

// functionality for user register
exports.userRegister = async (req, res) => {
    const {name, email, password, confirmPassword} = req.body;
    try {
       const registeredUser = await userModel.create({...req.body}) // creates a docs in db
        res.status(200).json({
            success: true,
            data: registeredUser,
            message: 'User registered success'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// functionality for user login

exports.userLogin = async (req, res) =>{
    const {email, password} = req.body;
    try {
        const userData = await userModel.findOne({email});
        if(userData){
            if(userData.password === password){
                res.status(200).json({
                    success: true,
                    data: userData,
                    message: 'You are logged in successfully'
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: 'Email or password does not matched!'
                })
            }
        }else{
            res.status(400).json({
                success: false,
                message: 'No account found with this email'
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}