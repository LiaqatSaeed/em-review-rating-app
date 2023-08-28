import React from "react";
import { Home, SignIn, SignUp, Dashboard } from "../pages";

export interface IRoutesProps {
  label: string
  url: string
  FunComponent: React.FC,
  isMenuItem: boolean,
}

export const PUBLIC_ROUTES: IRoutesProps[] = [
  {
    label: "Home",
    url: "/",
    isMenuItem: true,
    FunComponent:Home
  },
  {
    label: "SignIn",
    url: "/sign-in",
    isMenuItem: true,
    FunComponent: SignIn
  },
  {
    label: "SignUp",
    isMenuItem: false,
    url: "/sign-up",
    FunComponent: SignUp
  }
];

export const PROTECTED_ROUTES: IRoutesProps[] = [
  {
    label: "Home",
    url: "/",
    isMenuItem: true,
    FunComponent:Home
  },
  {
    label: "Dashboard",
    url: "/dashboard",
    isMenuItem: true,
    FunComponent: Dashboard
  }
];
