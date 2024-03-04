import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useUser } from "@/providers/userProvider";
import loginAgent from "@/modules/loginAgent";
import { EyeIcon,EyeSlashIcon } from "@heroicons/react/24/solid";


export function SignIn() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const { user, updateUser } = useUser();
  const [eye,setEye]=useState(false)

  const handleLogin=async(e)=>{
   try {
    e.preventDefault()
    const user=await loginAgent(email,password)
    Cookies.set('user', JSON.stringify(user.data), { expires: 1 });
    updateUser(user.data)
    //console.log(user.data);
    window.location.reload()
   } catch (error) {
    alert("Invalid login credentials")
    console.error(error)
   }
  }
  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form onSubmit={handleLogin} className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input value={email} onChange={e=>setEmail(e.target.value)}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input value={password} onChange={e=>setPassword(e.target.value)}
              type={eye?"text":"password"}
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              icon={eye?(<EyeIcon onClick={()=>setEye(v=>!v)}/>):(<EyeSlashIcon onClick={()=>setEye(v=>!v)}/>)}
            />
          </div>
          <Checkbox required
            label={
              <Typography 
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            
            containerProps={{ className: "-ml-2.5" }}
          />
          <br/>
          <Link className="w-full underline hover:text-blue-500"  to="/auth/sign-up">
            Register as Agent?
          </Link>
          <Button type={"submit"} className="mt-6" fullWidth>
            Sign In
          </Button>
         

         
        </form>
       
      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <div
          src="/img/pattern.png"  style={{
            backgroundImage:"url('/img/pattern.png')"
          }}
          className="h-[93vh] flex flex-wrap justify-center items-center w-full object-cover rounded-3xl"
        >
          <img className="h-20 bg-blue-gray-900" src="/img/logo.png"/>
          
          </div>
      </div>

    </section>
  );
}

export default SignIn;
