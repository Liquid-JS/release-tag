//import compiler from "@liquid-js/rollup-plugin-closure-compiler";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "./lib",
    format: "esm"
  },
  plugins: [
    typescript({
      declaration: true,
      declarationDir: "./lib/",
      inlineSources: true
    }),
    nodeResolve(),
    commonjs(),
    json(),
    /*compiler({
      language_in: "ECMASCRIPT_NEXT",
      language_out: "ECMASCRIPT_NEXT"
    }),*/
    terser()
  ]
};
