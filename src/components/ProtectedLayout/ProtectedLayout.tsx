import React from 'react'
import { useAuth } from '../../context/AuthProvider/useAuth'

const ProtectedLayout = ({ children }: { children: JSX.Element }) => {

    const auth = useAuth();

    if (!auth.email) {
        return (
            <>
                <h1>You dont have the access</h1>
            </>
        )
    }

    return children
    
}

export default ProtectedLayout;
