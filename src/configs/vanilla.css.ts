import { createThemeContract, createGlobalTheme } from "@vanilla-extract/css";

const SYSTEM_FONT_STACK = `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

export const colors = {
  black: `#000`,
  white: `#fff`,
  gray50: `#fbfbfb`,
  gray100: `#f6f6f6`,
  gray200: `#f1f1f1`,
  gray300: `#e6e6e6`,
  gray400: `#c4c4c4`,
  gray500: `#a6a6a6`,
  gray600: `#7c7c7c`,
  gray700: `#686868`,
  gray800: `#484848`,
  gray900: `#272727`,
  red50: `#fdeaee`,
  red100: `#fbcad2`,
  red200: `#ea959b`,
  red300: `#de6c74`,
  red400: `#e84853`,
  red500: `#ed323b`,
  red600: `#de2839`,
  red700: `#cc1d33`,
  red800: `#bf152c`,
  red900: `#b00020`,
  green50: `#e8f5e9`,
  green100: `#c8e6c9`,
  green200: `#a5d6a7`,
  green300: `#81c784`,
  green400: `#66bb6a`,
  green500: `#4caf4f`,
  green600: `#43a046`,
  green700: `#388e3b`,
  green800: `#388e3b`,
  green900: `#1b5e1f`,
  blue50: `#e2f1ff`,
  blue100: `#badcff`,
  blue200: `#8bc6ff`,
  blue300: `#57afff`,
  blue400: `#2d9dff`,
  blue500: `#008cff`,
  blue600: `#1c7dff`,
  blue700: `#276af0`,
  blue800: `#2c57dd`,
  blue900: `#3134bd`,
};

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1200,
};

export const size = {
  zero: `0`,
  xs: `0.25rem`,
  sm: `0.5rem`,
  md: `1rem`,
  lg: `1.5rem`,
  xl: `2.5rem`,
};

// Rest of the imports and design tokens...
export const vars = createThemeContract({
  colors: {
    primary: ``,
    body: ``,
    background: ``,
    link: ``,
    linkHover: ``,
    ...colors,
  },
  font: {
    body: ``,
  },
  fontSize: {
    xs: ``,
    sm: ``,
    md: ``,
    lg: ``,
    xl: ``,
  },
  fontWeight: {
    normal: "normal",
    reqular: "",
    bold: "",
  },
  space: size,
  size,
  boxShadow: {
    sm: ``,
    md: ``,
    lg: ``,
  },
  radii: {
    sm: ``,
    md: ``,
    full: ``,
  },
});

const commonVars = {
  font: {
    body: SYSTEM_FONT_STACK,
  },
  fontWeight: {
    normal: "normal",
    reqular: "400",
    bold: "700",
  },
  space: size,
  size,
  fontSize: {
    xs: `0.8rem`,
    sm: `0.875rem`,
    md: `1rem`,
    lg: `1.25rem`,
    xl: `1.5rem`,
  },
  border: {
    base: "1px solid",
    solid: "2px solid",
  },
  boxShadow: {
    sm: `0 1px 2px 0 rgb(0 0 0 / 0.05)`,
    md: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`,
    lg: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`,
  },
  radii: {
    sm: `0.2rem`,
    md: `0.4rem`,
    full: `100%`,
  },
};

// Rest of the imports, design tokens, and theme contract...

export const lightThemeVars = createGlobalTheme(":root", {
  colors: {
    primary: colors.blue500,
    body: colors.gray700,
    default: colors.gray200,
    background: colors.gray100,
    link: colors.blue800,
    linkHover: colors.blue600,
    ...colors,
  },
  ...commonVars,
});

export const darkThemeVars = createGlobalTheme(":root", {
  colors: {
    primary: colors.blue400,
    body: colors.gray300,
    default: colors.gray200,
    background: colors.gray800,
    link: colors.blue200,
    linkHover: colors.blue400,
    ...colors,
  },
  ...commonVars,
});

// TODO: will be Logically handle through App Context
const isLightTheme = true;
export const tokens = isLightTheme ? lightThemeVars : darkThemeVars;
