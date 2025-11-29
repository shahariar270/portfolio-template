import { Layout } from "@Layout/index";
import Home from "@Pages/Home";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                path:<Home/>
            }
        ]
    }
])
