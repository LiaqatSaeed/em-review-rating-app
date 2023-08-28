import { style } from "@vanilla-extract/css";
import { tokens } from "src/configs/vanilla.css";

export const linkStyle = style({
    textDecoration: "none",
    color: tokens.colors.primary,
    transition: "color 0.3s",
    fontSize: tokens.fontSize.sm
});
