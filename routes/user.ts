import express,{Express} from 'express';
import { login, signUp, updateUser } from '../controllers/userControler';

const user=express.Router()
user.post("/signup",signUp)
user.post("/login",login)
user.put("/updateUser",updateUser)
export default user