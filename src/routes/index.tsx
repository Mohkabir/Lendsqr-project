import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "../layouts";

import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";
import OtherPages from "../pages/OtherPages";
import Userdetails from "../pages/Userdetails";
import Users from "../pages/Users";

const AllRoutes = () => {
  const location = useLocation();
  const otherRoutes: string[] = [
    "/dashboard",
    "/watchlist",
    "/guarantors",
    "/loans",
    "/decision-models",
    "/guarantors",
    "/savings",
    "/whitelist",
    "/karma",
    "/organization",
    "/loan-products",
    "/loan-requests",
    "/savings-products",
    "/fees-charges",
    "/Products",
    "/transactions",
    "/services",
    "/service-account",
    "/settlements",
    "/reports",
    "/preferences",
    "/fees-pricing",
    "/audit-logs",
    "/systems-messages",
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
      <Routes>
        <Route
          path="/users"
          element={
            <MainLayout>
              <Users />
            </MainLayout>
          }
        />
      </Routes>
      <Routes>
        <Route
          path="/users/:id"
          element={
            <MainLayout>
              <Userdetails />
            </MainLayout>
          }
        />
      </Routes>
      {/* other unavailable routes */}
      {otherRoutes.includes(location.pathname) && (
        <Routes>
          <Route
            path={`/${location.pathname}`}
            element={
              <MainLayout>
                {otherRoutes.includes(location.pathname) && <OtherPages />}
              </MainLayout>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default AllRoutes;
