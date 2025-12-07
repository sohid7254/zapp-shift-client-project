import React from 'react';
import useAuth from '../Hooks/useAuth';
import Loading from '../Component/Loading';
import useRole from '../Hooks/useRole';
import Forbidden from '../Component/Forbidden';



const AdminRoute = ({children}) => {
    const { loading} = useAuth();
    const {role, roleLoading} = useRole()

    if(loading || roleLoading) {
        return <Loading></Loading>
    }

    if(role !== 'admin'){
        return <Forbidden></Forbidden>
    }



    return children;
};

export default AdminRoute;