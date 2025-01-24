import type { Configuration } from "webpack";
import type { BuilderOptions } from "./builder.types";
import {
  buildDevServer,
  builderOutput,
  builderRules,
  builderPlugins,
  builderResolver,
} from "./builders";

export const builder = (options: BuilderOptions): Configuration => {
  const { mode, port } = options;
  const isDev = options.mode === "development";

  return {
    mode,
    entry: options.paths.entry,
    output: builderOutput(options.paths),
    module: { rules: builderRules({ mode }) },
    plugins: builderPlugins(options),
    resolve: builderResolver({ src: options.paths.src }),
    devServer: buildDevServer({ port }),
    devtool: isDev ? "eval" : "inline-source-map",
  };
};
