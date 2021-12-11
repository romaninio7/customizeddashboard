import React from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import {AsyncDashboard} from "./async.routes";
import {ERoutePath as path} from "./path";

export const useRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={path.DASHBOARD_ALL}
                    element={<AsyncDashboard/>}
                />
                <Route
                    path="*"
                    element={<Navigate to={path.DASHBOARD} />}
                />
            </Routes>
        </BrowserRouter>
    )
};

