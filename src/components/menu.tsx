import React from "react";
import { IRoutesProps } from "../helpers/routes";
import { menuItemBorderStyle, menuItemLinkStyle, menuItemStyle, menuListStyle, menuStyle } from "../styles";

interface IMenuProps {
  routes: IRoutesProps[];
}

export const Menu = ({ routes }: IMenuProps) => {
  return (
    <div id="menu" className={menuStyle}>
      <ul className={menuListStyle}>
        {routes.map(({ url, label }: IRoutesProps) => (
          <li className={menuItemStyle}>
            <a className={menuItemLinkStyle} href={url}>{label}</a>
            <span className={menuItemBorderStyle}></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
