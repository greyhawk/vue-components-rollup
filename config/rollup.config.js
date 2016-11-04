import uglify from 'rollup-plugin-uglify';
import { minify } from 'uglify-js';
import config from "./common.config";
import {argv} from 'yargs';
import path from 'path'

var combinConfig =  {
  iife: function(config){
    config.moduleName = "rollupVue";
    config.format = "iife";
    config.dest = path.resolve(__dirname, "../dist/iife", "rollupVue.min.js");
    config.plugins.push(uglify({}, minify));
  },
  es: function(config) {
    config.format = "es";
    config.dest = path.resolve(__dirname, "../dist/es", "rollupVue.js");
  },
  cjs: function(config) {
    config.format = "cjs";
    config.dest = path.resolve(__dirname, "../dist/cjs", "index.js");
  }
}
combinConfig[argv.env](config);
export default config
