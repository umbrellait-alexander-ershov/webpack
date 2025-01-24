import type { themeTypes } from "./theme.constants";

export type ThemeStore = {
  theme: (typeof themeTypes)[number];
  toggle: () => void;
};
