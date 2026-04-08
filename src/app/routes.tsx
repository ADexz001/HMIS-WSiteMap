import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Systems } from "./pages/Systems";
import { SystemDetail } from "./pages/SystemDetail";
import { Updates } from "./pages/Updates";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "systems", Component: Systems },
      { path: "systems/:id", Component: SystemDetail },
      { path: "updates", Component: Updates },
      { path: "contact", Component: Contact },
    ],
  },
]);
