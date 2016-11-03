import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import config from "./common.config";
import {argv} from 'yargs';

if (argv.env === "iife") {
  config.moduleName = "rollupVue";
  config.format = "iife";
  config.plugins.push(uglify({}, minify))
}

export default config
