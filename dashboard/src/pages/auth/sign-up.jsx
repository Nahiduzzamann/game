import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";


export function SignUp() {
  const [fromData,setFormData]=useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(e)=>{
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const handleSubmit=async()=>{
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <section className="m-8 flex">
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
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
        <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your Name
            </Typography>
            <Input name="name" minLength={5} maxLength={11} value={fromData.name} onChange={handleChange}
              size="lg" required
              placeholder="Samsul Azam"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6 mt-2">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input value={fromData.email} onChange={handleChange} name="email" type="email" required
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6 mt-2">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your Password
            </Typography>
            <Input  value={fromData.password} onChange={handleChange} name="password" required 
            minLength={6}
            maxLength={12}
              size="lg"
              placeholder="******"
              type="password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
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
                <a target="_blank" 
                  href="https://40xbet.net/info/Terms&Conditions"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register Now
          </Button>

      
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/auth/sign-in" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default SignUp;
