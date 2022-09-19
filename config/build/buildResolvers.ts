import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    preferAbsolute: true,
    mainFiles: ["index"],
    alias: {},
    modules: [options.paths.src, "node_modules"],
  };
}
