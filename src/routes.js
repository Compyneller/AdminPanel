import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const Fincritic = React.lazy(() => import("./Fincritic/Home"));
const DotComHome = React.lazy(() => import("./UniDotComPages/Home"));
const DotComAboutUs = React.lazy(() => import("./UniDotComPages/AboutUs"));
const DotComCareer = React.lazy(() => import("./UniDotComPages/Career"));
const DotComContact = React.lazy(() => import("./UniDotComPages/ContactUs"));
const DotComNews = React.lazy(() => import("./UniDotComPages/News"));
const DotOrgHome = React.lazy(() => import("./UniDotOrgPages/Home"));
const DotOrgService = React.lazy(() => import("./UniDotOrgPages/Services"));
const INRD = React.lazy(() => import("./InrdCoin/Home"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/fincritic", name: "Fincritic", element: Fincritic },
  { path: "/inrd", name: "INR(D)", element: INRD },
  { path: "/unidotcom/home", name: "UniDotCom", element: DotComHome },
  { path: "/unidotcom/aboutus", name: "About Us", element: DotComAboutUs },
  { path: "/unidotcom/career", name: "Career", element: DotComCareer },
  { path: "/unidotcom/contact", name: "Contact Us", element: DotComContact },
  { path: "/unidotcom/news", name: "News", element: DotComNews },
  { path: "/unidotorg/home", name: "Home", element: DotOrgHome },
  { path: "/unidotorg/serivces", name: "Services", element: DotOrgService },
];

export default routes;
