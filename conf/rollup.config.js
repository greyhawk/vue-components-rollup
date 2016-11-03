import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import config from "./common.config";
import {argv} from 'yargs';

config.format = argv.env;

if (argv.env === "iife") {
  config.plugins.push(uglify({}, minify))
}
export default config
