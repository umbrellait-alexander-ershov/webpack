import { create } from "zustand";
import type { ThemeStore } from "@/app/store/theme/theme.types";
import { themeTypesDefault } from "@/app/store/theme/theme.constants";

export const useTheme = create<ThemeStore>()((set) => ({
  theme: themeTypesDefault,
  toggle: () =>
    set((theme) => ({ theme: theme.theme === "dark" ? "light" : "dark" })),
}));
