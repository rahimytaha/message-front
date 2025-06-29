import { createBrowserRouter } from "react-router";
import LandingPage from "../../page/landing/LandingPage";
import SignPage from "../../page/sign/SignPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path:"/sign"
    ,element:<SignPage/>
  }
])

export default router