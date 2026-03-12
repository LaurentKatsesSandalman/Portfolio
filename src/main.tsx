import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";
import HomePage from "./pages/Home/Home.tsx";
import SectionPage from "./pages/Section/Section.tsx";
import ProjectPage from "./pages/Project/Project.tsx";
import DocSectionPage from "./pages/Section/DocSection.tsx";
import DocProjectPage from "./pages/Project/DocProject.tsx";
//import NotFoundPage from "./pages/NotFound/NotFound.tsx";



const router = createHashRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
     {
        path: "/portfolio/:section",
        element: <SectionPage />,
      },
     {
        path: "/portfolio/:section/:project",
        element: <ProjectPage/>,
      },
	  {
        path: "/docs/:section",
        element: <DocSectionPage />,
      },
     {
        path: "/docs/:section/:project",
        element: <DocProjectPage/>,
      },
      //{ path: "*", element: <NotFoundPage /> }, // Route 404
    ],
  },
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
