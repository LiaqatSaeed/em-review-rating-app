import { style } from "@vanilla-extract/css";
import { tokens } from "src/configs/vanilla.css";
import { recipe } from "@vanilla-extract/recipes";
import { STATE } from "@helpers";

export const buttonRecipe = recipe({
  base: {
    color: tokens.colors.white,
    fontWeight: tokens.fontWeight.normal,
    border: tokens.border.base,
    fontSize: tokens.fontSize.sm
  },
  variants: {
    type: {
      default: {
        backgroundColor: tokens.colors.gray200,
        borderColor: tokens.colors.gray400,
        color: tokens.colors.gray800,
      },
      success: {
        borderColor: tokens.colors.green800,
        backgroundColor: tokens.colors.green500,
      },
      primary: {
        backgroundColor: tokens.colors.primary,
      },
    },
    state: {
      [STATE.IDEL]: {
      },
      [STATE.LOADING]: {
        background: tokens.colors.blue700
      },
      [STATE.SUCCESSED]: {
        background: tokens.colors.green900
      },
      [STATE.FAILED]: {
        background: tokens.colors.red500
      },
    },
    size: {
      medium: {
        padding: `${tokens.space.sm} ${tokens.space.lg}`,
      },
    },
  },

  defaultVariants: {
    type: "primary",
    size: "medium",
  },
});

export const buttonGroupStyle = style({
  display: "flex",
  gap: tokens.space.sm,
  justifyContent:"flex-end"
});
