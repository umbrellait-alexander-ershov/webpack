import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

import type { BuilderDevServerProps } from "./shared";

export const buildDevServer = ({
  port,
}: BuilderDevServerProps): DevServerConfiguration => {
  return {
    port,
    open: true,
    // Включение HMR + добавить плагин для react
    // react-fast-refresh
    hot: true,
    compress: true,
    // если раздавать статику через nginx То надо делать проксирование на Index.html
    historyApiFallback: true,
  };
};
