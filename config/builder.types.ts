import { modeTypes } from "./builder.constants";

export type ModeType = (typeof modeTypes)[number];

export interface BuilderPath {
  path: string;
  public: string;
  filename?: string;
  entry: string;
  html: string;
  src: string;
}

export interface BuilderOptions {
  port: number;
  mode: ModeType;
  paths: BuilderPath;
  analyzer: boolean;
}
