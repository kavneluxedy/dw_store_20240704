import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage";
import { NavBar } from "./components/templates/NavBar";
import { Footer } from "./components/templates/Footer";
import Products from "./features/products/Products";
import NotFound404 from "./components/templates/NotFound404";
import "./assets/css/App.css";
import { store } from "./features/products/productSlice";
import { Provider } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "",
          Component: Homepage,
        },
        {
          path: "/products",
          Component: Products,
        },
        {
          path: "*",
          Component: NotFound404,
        },
      ],
    },
  ]);

  function Root() {
    return (
      <Provider store={store}>
        <div className="root-container">
          <NavBar />
          <div className="outlet">
            <Outlet />
          </div>
          <Footer />
        </div>
      </Provider>
    );
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
