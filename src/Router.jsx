import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

  import Home from "./pages/Home";
  import Contact from "./pages/Contact";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/page2",
      element: <p>page2</p>
    },

    {
      path : "/contact",
      element : <Contact />

    }
  ])
  
  export default function Router() {
    return (
      <RouterProvider router={router} />
    )
  }
  
