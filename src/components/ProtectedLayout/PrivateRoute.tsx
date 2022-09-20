import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider/useAuth';
import SignIn from '../SignIn/SignIn';


const PrivateRoutes = () => {

    let auth = useAuth();
    return auth.token ? <Outlet/> : <SignIn/>

}


export default PrivateRoutes;