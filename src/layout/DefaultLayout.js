import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { Data } from "../Context/DataContext";

const DefaultLayout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    !localStorage.getItem("user")
      ? navigate("/login")
      : localStorage.getItem("user")
      ? navigate("/dashboard")
      : navigate("/login");
  }, [localStorage.getItem("user")]);

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
