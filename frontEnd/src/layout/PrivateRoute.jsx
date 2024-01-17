import React,{ useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { Progress } from "@chakra-ui/react";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Progress size='xs' isIndeterminate />
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;