import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';


export default function ProtectedRoute({ children }) {
    const isLoggedIn = localStorage.getItem('auth') === 'true';
    const location = useLocation();


    if (!isLoggedIn) {
        return <Navigate to="/login" state={{ from: location, message: 'Please login first' }} replace />;
    }

    return children;

}
