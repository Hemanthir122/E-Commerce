import validator from "validator";
import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SCREAT);
}

// Route for user login
const loginUser = async (req, res) => {
    try{
        const{email,password}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"user doen't exists"})
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(isMatch){
            const token=createToken(user._id);
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:'Invalid Credientals'})
        }

    }catch(error){
        console.log(error);
        res.json({success:false,message:error.message})
    }
};

// Route for user registration
const registerUser = async (req, res) => {
    try{
        const {name,email,password}=req.body;

        //check user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {  // Correct usage
            return res.json({ success: false, message: "User already exists" });
        }
        
        //validate email and password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"please enter valid email"})

        }
        if(password.length<8){
            return res.json({success:false,message:"please enter strong password"})
        }
        
            //yhashing user password
            const salt=await bcrypt.genSalt(10)
            const hasedPassword=await bcrypt.hash(password,salt)
            const newUser=new userModel({
                name,email,password:hasedPassword
            })
            const user= await newUser.save()

            const token = createToken(user._id)
            res.json({success:true,token})
    }catch(error){
            console.log(error);
            res.json({success:false,message:error.message})
    }
};

// Route for admin login   
const adminLogin = async (req, res) => {
    try {
        const {email,password}=req.body
        if (email===process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
                const token=jwt.sign(email+password,process.env.JWT_SCREAT)
                res.json({success:true,token})
        }
        else{
            res.json({success:false,message:"Invaild crediantls"})
        }
    } catch (error) {
        
    }
   
};

export { loginUser, registerUser, adminLogin };