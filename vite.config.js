import vituum from "vituum";
import pug from "@vituum/vite-plugin-pug";
import postcss from "@vituum/vite-plugin-postcss";
// eslint-disable-next-line import/no-extraneous-dependencies
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

export default {
  publicDir: "public",
  root: "./",
  build: {
    outDir: "dist",
    cssCodeSplit: false,
  },
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          "+.css": [],
          "+.scss": "src/styles",
        },
      },
    }),
    pug({
      root: "./src",
    }),
    postcss(),
    ViteSvgSpriteWrapper({
      icons: "public/icons/*.svg",
      outputDir: "./public",
    }),
  ],
};
