import React from "react";
import { IRoutesProps } from "../helpers/routes";
import { menuItemBorderStyle, menuItemLinkStyle, menuItemStyle, menuListStyle, menuStyle } from "../styles";
import { Link } from "@components";
import { useAuth } from "../context/authProvider";

interface IMenuProps {
  routes: IRoutesProps[];
}

export const Menu: React.FC<IMenuProps> = ({ routes }: IMenuProps) => {

  return (
    <div id="menu" className={menuStyle}>
      <ul className={menuListStyle}>
        {routes.map(({ url, label, isMenuItem }: IRoutesProps) => isMenuItem && (
          <li key={label} className={menuItemStyle}>
            <Link className={menuItemLinkStyle} to={url}>{label}</Link>
            <span className={menuItemBorderStyle}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
