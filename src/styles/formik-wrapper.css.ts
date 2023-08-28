import { style } from "@vanilla-extract/css";
import { tokens } from "../configs/vanilla.css";

export const formStyle = style({
  display: "flex",
  flexDirection: "column",
  marginTop: tokens.space.lg,
  padding: tokens.space.md,
});

