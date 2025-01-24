import type { BuilderPath, ModeType } from "../../../builder.types";

export type BuilderOutputProps = BuilderPath;

export interface BuilderDevServerProps {
  port: number;
}

export interface BuilderPlugins {
  mode: ModeType;
  paths: BuilderPath;
  analyzer: boolean;
}

export interface BuilderRules {
  mode: ModeType;
}

export interface BuilderResolver {
  src: string;
}
