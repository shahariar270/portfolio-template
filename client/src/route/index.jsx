import { Layout } from "@Layout/index";
import { RightContentBox } from "@Layout/Sections/RightContentBox";
import { About } from "@Pages/About";
import Home from "@Pages/Home";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
        ]
    }
])
