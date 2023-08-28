import { style } from "@vanilla-extract/css";
import { tokens } from "src/configs/vanilla.css";

export const signUpFormStyle = style({
    background: tokens.colors.white,
    borderRadius: tokens.radii.sm,
    boxShadow: tokens.boxShadow.sm,
    padding: tokens.space.md,
    margin: `${tokens.space.zero} auto`,
    width: '50%'   
});

export const titleStyle = style({
   textAlign:"center",
   fontSize: tokens.fontSize.lg
});

export const alreadyHaveAccountStyle = style({
    marginTop: tokens.space.lg,
    padding: tokens.space.md,
});
