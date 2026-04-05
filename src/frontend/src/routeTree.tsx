import { Outlet, createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FreeLegalAidPage from "./pages/FreeLegalAidPage";
import HomePage from "./pages/HomePage";
import PracticeAreasPage from "./pages/PracticeAreasPage";
import VeteransAssistancePage from "./pages/VeteransAssistancePage";

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const practiceAreasRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/practice-areas",
  component: PracticeAreasPage,
});

const freeLegalAidRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/free-legal-aid",
  component: FreeLegalAidPage,
});

const veteransRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/veterans-assistance",
  component: VeteransAssistancePage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

export const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  practiceAreasRoute,
  freeLegalAidRoute,
  veteransRoute,
  contactRoute,
]);
