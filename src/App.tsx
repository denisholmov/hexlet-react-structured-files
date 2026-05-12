import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router"

import { ROUTES } from './routes/routes'



const container = document.getElementById("app");

if (!container) {
  throw new Error('Root container #app was not found');
}

createRoot(container).render(
  <StrictMode>
        <RouterProvider router={ROUTES} />
  </StrictMode>,
);