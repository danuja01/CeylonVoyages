import { Routes, Route } from "react-router-dom";
import { Sidenav, DashboardNavbar } from "@/components/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";
import { Loader } from "../common";

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen overflow-x-hidden bg-blue-gray-50/50">
      <Sidenav routes={routes} />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
        <div className="text-blue-gray-6 "></div>
      </div>
      <Loader />
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;