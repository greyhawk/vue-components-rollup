var rollupVue=function(){var t={boolean:function(t){return"string"==typeof t?"false"!==t&&"null"!==t&&"undefined"!==t&&("true"===t||t):t},number:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return"number"==typeof t?t:void 0===t||null===t||isNaN(Number(t))?e:Number(t)},string:function(t){return void 0===t||null===t?"":t+""},pattern:function(t){return t instanceof Function||t instanceof RegExp?t:"string"==typeof t?new RegExp(t):null}},e={render:function(){with(this)return _h("div",{directives:[{name:"show",rawName:"v-show",value:show,expression:"show"}],class:{alert:!0,"alert-success":"success"==type,"alert-warning":"warning"==type,"alert-info":"info"==type,"alert-danger":"danger"==type,top:"top"===placement,"top-right":"top-right"===placement},style:{width:width},attrs:{transition:"fade",role:"alert"}},[_h("button",{directives:[{name:"show",rawName:"v-show",value:dismissable,expression:"dismissable"}],staticClass:"close",attrs:{type:"button"},on:{click:function(t){show=!1}}},[_m(0)])," ",_t("default")])},staticRenderFns:[function(){with(this)return _h("span",["×"])}],props:{type:{type:String},dismissable:{type:Boolean,coerce:t.boolean,default:!1},show:{type:Boolean,coerce:t.boolean,default:!0,twoWay:!0},duration:{type:Number,coerce:t.number,default:0},width:{type:String},placement:{type:String}},watch:{show:function(t){var e=this;this._timeout&&clearTimeout(this._timeout),t&&Boolean(this.duration)&&(this._timeout=setTimeout(function(){e.show=!1},this.duration))}}},n=[e];return n}();
