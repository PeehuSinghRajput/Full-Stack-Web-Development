import { User } from "../Models/User.js";
export const UserRegister = async(req,res)=>{
    try{
        let user = await User.create(req.body);
        res.json({
            message:"User Created successfully...!",
            NewUser: user,
            success:true
        });
    }catch(error){
        res.json({message:error.message})
    }
}