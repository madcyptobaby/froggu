import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./components/HomePage.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import MemeEditor from "./components/MemeEditor/MemeEditor.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/memeeditor", element: <MemeEditor /> },
    ],
    errorElement: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
