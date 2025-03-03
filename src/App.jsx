import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages_temp/LoginPage/LoginPage";
import GuestRoute from "./Components/GuestRoute/GuestRoute";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import RegisterPage from "./Pages_temp/RegisterPage/RegisterPage";
import ProductsPage from "./Pages_temp/ProductsPage";
import Cart from "./Components/Cart/Cart";
import FilteredProducts from "./Pages_temp/FilteredProducts";
import ProductDetails from "./Pages_temp/ProductDetails";
import ErrorPage from "./Pages_temp/ErrorPage";
import Orders from "./Pages_temp/Orders/Orders";
import UserProvider from "./context/User.context";
import HomeContextProvider from "./context/HomeContext";
import CartContextProvider from "./context/CartContext";
import ProductsContextProvider from "./context/ProductsContext";
import OrderMethodPage from "./Pages_temp/Orders/OrderMethodPage";
import { Toaster } from "react-hot-toast";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />
        </GuestRoute>
      ),
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/signup", element: <RegisterPage /> },
        { path: "/products", element: <ProductsPage /> },
        {
          path: "/products/:type/:value",
          element: <FilteredProducts />,
        },
        { path: "/cart", element: <Cart /> },
        {
          path: "/product/:productId",
          element: <ProductDetails />,
        },
        { path: "/orders", element: <Orders /> },
        { path: "/order-method", element: <OrderMethodPage /> },
      ],
    },
  ]);

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <UserProvider>
        <HomeContextProvider>
          <CartContextProvider>
            <ProductsContextProvider>
              <RouterProvider router={routes}></RouterProvider>
            </ProductsContextProvider>
          </CartContextProvider>
        </HomeContextProvider>
      </UserProvider>
    </>
  );
}

export default App;
