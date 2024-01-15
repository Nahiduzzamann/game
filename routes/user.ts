import express,{Express} from 'express';
import { getUser, login, signUp, updateUser } from '../controllers/userControler';
import { authenticateToken } from '../middlewares/checkLogin';

const user=express.Router()
user.post("/signup",signUp)
user.post("/login",login)
user.put("/updateUser",updateUser)
user.get("/getUser",authenticateToken,getUser)
export default user