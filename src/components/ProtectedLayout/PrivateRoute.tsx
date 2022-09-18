import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';



const PrivateRoutes = () => {

    let auth = useAuth();
    return auth.token ? <Outlet/> : <h1>Sorry you dont have access!</h1>

}


export default PrivateRoutes;