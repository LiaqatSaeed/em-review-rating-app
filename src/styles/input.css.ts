import { style } from "@vanilla-extract/css";
import { tokens } from "src/configs/vanilla.css";
import { recipe } from "@vanilla-extract/recipes";

export const formGroupStyle = style({
  marginBottom: tokens.space.sm,

});

export const labelRecipe = recipe({
  base: {
    display: "block",
    marginBottom: tokens.space.xs,
    fontSize: tokens.fontSize.md,
  },
  variants: {
    required: {
      true: {
        selectors: {
          '&:after' : {
            content: ' *',
            color: tokens.colors.red500
          }
        }
      }
    }
  }
});

export const inputStyle = style({
  padding: tokens.space.sm,
  border: tokens.border.base,
  borderColor: tokens.colors.default,
  borderRadius: tokens.radii.sm,
  transition: "border-color 0.3s",
  width: "100%",
  boxSizing: "border-box",
  selectors: {
    "&:focus": {
      borderColor: tokens.colors.primary, // Slightly darker shade on focus
      outline: "none",
    },
  },
});

export const errorStyle = style({
  display: "flex",
  height: tokens.size.md,
  color: tokens.colors.red500,
  fontSize: tokens.fontSize.xs,
  marginTop: tokens.space.xs
});
