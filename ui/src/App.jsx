import { useEffect, useState } from "react";
import "./App.scss";
import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Loading } from "./components/Loading/Loading";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
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
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
