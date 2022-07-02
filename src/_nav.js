import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Fincritic",
  },
  {
    component: CNavItem,
    name: "Fincritic",
    to: "/fincritic",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "INR(D)",
    to: "/inrd",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: "Univers.com",
    to: "/unidotcom",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Home",
        to: "/unidotcom/home",
      },
      {
        component: CNavItem,
        name: "About Us",
        to: "/unidotcom/aboutus",
      },
      {
        component: CNavItem,
        name: "Contact Us",
        to: "/unidotcom/contact",
      },
      {
        component: CNavItem,
        name: "Career",
        to: "/unidotcom/career",
      },
      {
        component: CNavItem,
        name: "News",
        to: "/unidotcom/news",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Univers.org",
    to: "/unidotorg",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Home",
        to: "/unidotorg/home",
      },
      {
        component: CNavItem,
        name: "Services",
        to: "/unidotorg/serivces",
      },
    ],
  },
];

export default _nav;
