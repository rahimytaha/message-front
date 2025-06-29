import { createBrowserRouter } from "react-router";
import LandingPage from "../../page/landing/LandingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  }
])

export default router