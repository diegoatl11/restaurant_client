import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const RoleProtectedRoute = ({ children, allowedRoles }) => {

    const { roles, loading } = useSelector((state) => state.auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    const userRoles = roles || [];

    const hasAccess = userRoles.some(role => allowedRoles.includes(role));

    if (!hasAccess) {
        return <Navigate to="/unauthorized" />;
    }

    return children;
};

export default RoleProtectedRoute;
