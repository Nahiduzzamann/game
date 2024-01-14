import express,{Express} from 'express';
import { login, signUp } from '../controllers/userControler';

const user=express.Router()
user.post("/signup",signUp)
user.post("/login",login)
export default user