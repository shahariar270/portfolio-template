import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './assets/styles/main.scss'
import { router } from './route';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />;
  </StrictMode>,
)
