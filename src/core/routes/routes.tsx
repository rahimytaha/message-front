import { createBrowserRouter } from "react-router";
import LandingPage from "../../page/landing/LandingPage";
import SignPage from "../../page/sign/SignPage";
import HomePage from "../../page/home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/sign"
    , element: <SignPage />
  },
  {
    path: "/home", element: <HomePage />
  }
])

export default router