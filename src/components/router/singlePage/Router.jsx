import React from "react";
import {
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom";

import Layout from "../../layout/Layout";
import Main from "../../main/Main";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout  />} >
            <Route index element={<Main />} />
        </Route>
    )
);

const Router = ({data}) => {
    return (
        <RouterProvider router={router} data={data}/>
    )
};

export default Router;