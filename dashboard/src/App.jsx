import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useEffect, useState } from "react";

function App() {
  const [admin,setAdmin]=useState(false)
  useEffect(()=>{
   const ad= localStorage.getItem("admin")
    if(ad){
      setAdmin(true)
    }
  },[])

  return (
    <Routes>
      {admin?(
<>
<Route path="/dashboard/*" element={<Dashboard />} />
      
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
</>
      ):(
        <>
        <Route path="/auth/*" element={<Auth setAdmin={setAdmin} />} />
        <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
       
        </>

      )}
     
    </Routes>
  );
}

export default App;
