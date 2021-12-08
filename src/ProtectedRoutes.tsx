import React from 'react';
import {
    Routes,
    Route,
} from 'react-router-dom';
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const ProtectedRoutes = () => (
    <Routes >
        <Route path="/" element={<div>home</div>}/>
        <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
)

export default ProtectedRoutes;