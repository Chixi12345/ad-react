import { HomePage, AboutPage, ServicesPage, LoginPage } from "./pages";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

const RoutesE = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/services",
      element: <ServicesPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <RoutesE />
    </Router>
  );
};

export default AppWrapper;
