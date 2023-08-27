import { style } from "@vanilla-extract/css";
import { tokens } from "../configs/vanilla.css";

export const containerStyle = style({
  width: '80%',
  maxWidth: '1200px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  margin: `${tokens.size.lg} auto`
});