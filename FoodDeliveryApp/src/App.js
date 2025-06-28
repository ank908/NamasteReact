import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
// import Grocery from "./components/Grocery.js";
import Error from "./components/Error.js";
import Loader from "./components/Loader.js";
import ChipsInput from "./components/ChipsInput.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

// import foodLogo from "/foodie.png"; // Corrected import statement

// Chunking, Code Splitting, Dynamic Bundling, Lazy Loading, On Demand Loading

const Grocery = lazy(() => import("./components/Grocery.js"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <ChipsInput /> */}
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Loader />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
