"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// @ts-nocheck
var vue_1 = tslib_1.__importDefault(require("vue"));
var vue_tel_input_1 = tslib_1.__importDefault(require("vue-tel-input"));
var vue_phone_number_input_1 = tslib_1.__importDefault(require("vue-phone-number-input"));
require("vue-phone-number-input/dist/vue-phone-number-input.css");
var App_vue_1 = tslib_1.__importDefault(require("./App.vue"));
var router_1 = tslib_1.__importDefault(require("./router"));
var store_1 = tslib_1.__importDefault(require("./store"));
var bootstrap_vue_1 = require("bootstrap-vue");
require('dotenv').config();
require("bootstrap/dist/css/bootstrap.css");
require("bootstrap-vue/dist/bootstrap-vue.css");
require("mdb-vue-ui-kit/css/mdb.min.css");
vue_1.default.use(vue_tel_input_1.default);
vue_1.default.use(bootstrap_vue_1.BootstrapVue);
vue_1.default.use(bootstrap_vue_1.BootstrapVueIcons);
vue_1.default.config.productionTip = false;
vue_1.default.component('vue-phone-number-input', vue_phone_number_input_1.default);
vue_1.default.component('vue-tel-input', vue_tel_input_1.default.VueTelInput);
new vue_1.default({
    router: router_1.default,
    store: store_1.default,
    render: function (h) { return h(App_vue_1.default); }
}).$mount('#app');
//# sourceMappingURL=main.js.map