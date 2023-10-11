import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Users />,
    },
    {
        path: "/users/create",
        element: <CreateUser />,
    },
]);

export default router;
