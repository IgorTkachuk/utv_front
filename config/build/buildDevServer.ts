import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer({
  paths,
  port,
}: BuildOptions): DevServerConfiguration {
  return {
    port,
    static: paths.build,
    hot: true,
    open: true,
    historyApiFallback: true,
  };
}
