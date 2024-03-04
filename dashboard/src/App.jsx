import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { useUser } from "./providers/userProvider";

function App() {
  const { user, updateUser } = useUser();
 
  useEffect(()=>{
    const user = Cookies.get('user');
    if(user){
      updateUser(JSON.parse(user))
    }
  },[])

  return (
    <Routes>
      {user?(
<>
<Route path="/dashboard/*" element={<Dashboard />} />
      
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
</>
      ):(
        <>
        <Route path="/auth/*" element={<Auth  />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
       
        </>

      )}
     
    </Routes>
  );
}

export default App;
