import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    loader: "ts-loader",
    exclude: /node_modules/,
  };

  const fontLoader = {
    test: /\.(woff|woff2|ttf)$/,
    type: "asset/resource",
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i, // or something else /\.(s*)css$/
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-modules-typescript-loader?modules",
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")), // OR use RegExp /\.modules\.\w+$/i
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const imageLoader = {
    test: /\.(png|gif|jpg|jpeg)$/,
    type: "asset/resource",
  };

  // const imageLoader = {
  //   test: /\.(png|gif|jpg|jpeg)$/,
  //   use: ['url-loader'],
  // };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  };

  return [typescriptLoader, fontLoader, styleLoader, imageLoader, svgLoader];
}
