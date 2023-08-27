import React from "react";
import { Home, Login } from "../pages";

export interface IRoutesProps {
  label: string
  url: string
  FunComponent: React.FC
}


export const ROUTES: IRoutesProps[] = [
  {
    label: "Home",
    url: "/",
    FunComponent:Home
  },
  {
    label: "Login",
    url: "/login",
    FunComponent: Login
  }
];
