import { Navigate } from 'react-router-dom';

interface WithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (WrappedComponent: React.ComponentType, { allowedRoles = [] }: WithAuthProps = {}) => {
  return (props: any) => {
    const token = localStorage.getItem('auth_token');
    const userRole = localStorage.getItem('user_role');

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(userRole || '')) {
      
      if (userRole === 'admin') {
        return <Navigate to="/settings" replace />;
      }
      return <Navigate to="/videos" replace />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;