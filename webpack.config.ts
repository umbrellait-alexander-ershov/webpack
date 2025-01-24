import type { Configuration } from "webpack";
import { builder } from "./config";
import type { BuilderOptions, BuilderPath } from "./config/builder.types";
import path from "path";

const config = (env: any): Configuration => {
  const builderPaths: BuilderPath = {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    public: path.resolve(__dirname, "public"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const options: BuilderOptions = {
    paths: builderPaths,
    port: env.port ?? 5050,
    mode: env.mode ?? "development",
    analyzer: env.analyzer ?? false,
  };

  return builder(options);
};

export default config;
