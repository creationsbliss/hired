import { createBrowserRouter } from "react-router";

import RootLayout from "@/layouts/RootLayout";
import LandingPage from "@/pages/LandingPage";

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LandingPage,
      },
    ],
  },
]);

export default router;
