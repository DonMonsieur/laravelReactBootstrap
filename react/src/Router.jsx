import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Users />,
    },
    {
        path: "/users/create",
        element: <CreateUser />,
    },
    {
        path: "/users/update/:id",
        element: <UpdateUser />,
    },
]);

export default router;
