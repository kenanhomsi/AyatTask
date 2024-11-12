import { Navigate } from 'react-router-dom';
// import { useAppSelector } from '../redux/store';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
    // const isAuthenticated = useAppSelector((state)=>state.user.isAuthenticated);
    const isAuthenticated = true;

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;