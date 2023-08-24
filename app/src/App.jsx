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
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";
import { CategoryItemsPage } from "./pages/CategoryItemPage/CategoryItemsPage";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { CheckoutPage } from "./pages/Checkout/CheckoutPage.jsx";
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
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/category",
          element: <CategoryItemsPage />,
        },
        {
          path: "/products/:id",
          element: <Detail />,
        },
        {
          path: "/cart",
          element: <ShoppingCart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/search",
          element: <CategoryItemsPage />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
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
