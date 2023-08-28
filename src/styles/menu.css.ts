import { style, globalStyle } from "@vanilla-extract/css";
import { tokens } from "../configs/vanilla.css";

export const menuStyle = style({
    height: tokens.size.xl,
    display: 'flex',
    alignItems: 'center',
    width: '60%',
    alignSelf: 'center',
    margin: `${tokens.space.md} auto`
});

export const menuListStyle = style({
  listStyle: "none",
  padding: tokens.space.zero,
  margin: tokens.space.zero,
  display: "flex",
});

export const menuItemStyle = style({
    position: "relative",
    cursor: "pointer",
  });

export const menuItemLinkStyle = style({
  padding: `${tokens.space.sm} ${tokens.space.lg}`,
  fontSize: `${tokens.fontSize.lg} !important`
});

export const menuItemBorderStyle = style({
  content: "''",
  position: "absolute",
  width: "100%",
  height: "2px",
  backgroundColor: "transparent",
  bottom: "-5px",
  left: 0,
  transition: "backgroundColor 0.3s",
});

globalStyle(`${menuItemStyle}:hover ${menuItemLinkStyle}`, {
    color: tokens.colors.white,
    background: tokens.colors.primary,
    transition: "backgroundColor 0.3s"
})