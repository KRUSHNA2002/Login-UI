import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const user = localStorage.getItem('user');
    if (user) {
        return <Outlet />;
    }
    else {
        return <Navigate to='/' />
    }
}
export default ProtectedRoute;