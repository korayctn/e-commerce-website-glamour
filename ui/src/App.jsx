import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Loading } from "./components/Loading/Loading";
import Register from "./pages/Register/Register.jsx";

import Login from "./pages/Login/Login";
import { Detail } from "./pages/Detail/Detail";

function App() {
  const [loading, setLoading] = useState(true);

  const Layout = () => {
    if (loading) {
      return (
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="app">
          <Loading />
        </div>
      );
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/products/:id",
          element: <Detail />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
