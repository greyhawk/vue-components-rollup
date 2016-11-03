import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import config from "./common.config";
import {argv} from 'yargs';
import path from 'path'

if (argv.env === "iife") {
  config.moduleName = "rollupVue";
  config.format = "iife";
  config.dest = path.resolve(__dirname, "../dist/bower", "rollupVue.min.js"),
  config.plugins.push(uglify({}, minify))
}

export default config
