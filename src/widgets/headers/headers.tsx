import styles from "./headers.module.scss";

import { SwitcherTheme } from "@/widgets/headers/ui";
import { Outlet } from "react-router-dom";

export const Headers = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.content}>
          <h3 className={styles.title}>Ershov Alexandr</h3>

          <SwitcherTheme />
        </div>
      </header>

      <Outlet />
    </div>
  );
};
