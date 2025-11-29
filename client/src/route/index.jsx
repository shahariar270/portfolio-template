import { Layout } from "@Layout/index";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[]
    }
])
