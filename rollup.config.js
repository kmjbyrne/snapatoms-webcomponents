import babel from "rollup-plugin-babel";
import nodeResolve from "rollup-plugin-node-resolve";
import path from "path";

const PACKAGE_ROOT_PATH = process.cwd();
const PKG_JSON = require(path.join(PACKAGE_ROOT_PATH, "package.json"));

export default {
    input: "src/element.ts",
    output: {
        file: "dist/webcomponents.js",
        format: "iife",
        name: "index",
        sourcemap: true
    },
    plugins: [
        nodeResolve({
            jsnext: true
        }),
        babel({
            exclude: "node_modules/**",
            extensions: [".ts", ".js"]
        })
    ]
};