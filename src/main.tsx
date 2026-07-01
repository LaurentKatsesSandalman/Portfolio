import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider, Navigate } from "react-router";
import HomePage from "./pages/Home/Home.tsx";
import SectionPage from "./pages/Section/Section.tsx";
import ProjectPage from "./pages/Project/Project.tsx";
import DocSectionPage from "./pages/Section/DocSection.tsx";
import DocProjectPage from "./pages/Project/DocProject.tsx";
//import NotFoundPage from "./pages/NotFound/NotFound.tsx";



const router = createHashRouter([
  {
    path: "/:mode/:lang",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
     {
        path: "portfolio/:section",
        element: <SectionPage />,
      },
     {
        path: "portfolio/:section/:project",
        element: <ProjectPage/>,
      },
	  {
        path: "docs/:section",
        element: <DocSectionPage />,
      },
     {
        path: "docs/:section/:project",
        element: <DocProjectPage/>,
      },
      //{ path: "*", element: <NotFoundPage /> }, // Route 404
    ],
  },
  // Bare root or any unrecognized path falls back to the default mode/lang.
  { path: "*", element: <Navigate to="/dev/en" replace /> },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
