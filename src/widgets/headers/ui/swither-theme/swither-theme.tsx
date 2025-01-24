import styles from "./switcher-theme.module.scss";

import { useEffect } from "react";
import { useTheme } from "@/app/store";

export const SwitcherTheme = () => {
  const { theme, toggle } = useTheme();

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  return <input type="checkbox" onClick={toggle} className={styles.root} />;
};
