import { Layout } from "@Layout/index";
import Admin from "@Pages/Admin";
import { About } from "@Pages/About";
import { Contact } from "@Pages/Contact";
import Home from "@Pages/Home";
import { Project } from "@Pages/Project";
import { Skill } from "@Pages/Skill";
import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
    {
        path: '/admin',
        element: <Admin />
    },
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
            {
                path:'/skill',
                element:<Skill/>
            },
            {
                path:'/project',
                element:<Project/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
        ]
    }
])
