"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var vue_1 = tslib_1.__importDefault(require("vue"));
var vue_router_1 = tslib_1.__importDefault(require("vue-router"));
//import createWebHistory from 'vue-router'
var Home_vue_1 = tslib_1.__importDefault(require("../views/Home.vue"));
var ProjectAddingForm_vue_1 = tslib_1.__importDefault(require("../views/ProjectAddingForm.vue"));
var ApplicationForm_vue_1 = tslib_1.__importDefault(require("../views/ApplicationForm.vue"));
var Project_vue_1 = tslib_1.__importDefault(require("../views/Project.vue"));
var Projects_vue_1 = tslib_1.__importDefault(require("../views/Projects.vue"));
var Applicant_vue_1 = tslib_1.__importDefault(require("../views/Applicant.vue"));
var ViewApplications_vue_1 = tslib_1.__importDefault(require("../views/ViewApplications.vue"));
var aiChatbox_vue_1 = tslib_1.__importDefault(require("../views/aiChatbox.vue"));
var Registration_vue_1 = tslib_1.__importDefault(require("../views/Registration.vue"));
var Login_vue_1 = tslib_1.__importDefault(require("../views/Login.vue"));
var Account_vue_1 = tslib_1.__importDefault(require("../views/Account.vue"));
var Workshops_vue_1 = tslib_1.__importDefault(require("../views/Workshops.vue"));
var AboutUs_vue_1 = tslib_1.__importDefault(require("../views/AboutUs.vue"));
var Events_vue_1 = tslib_1.__importDefault(require("../views/Events.vue"));
var Event_vue_1 = tslib_1.__importDefault(require("../views/Event.vue"));
var ContactUs_vue_1 = tslib_1.__importDefault(require("../views/ContactUs.vue"));
var firebase_1 = require("../firebase");
require('dotenv').config();
vue_1.default.use(vue_router_1.default);
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
var routes = [
    {
        path: '/',
        name: 'Home',
        component: Home_vue_1.default
    },
    {
        path: '/contactUs',
        name: 'ContactUs',
        component: ContactUs_vue_1.default
    },
    {
        path: '/projectAddingForm',
        name: 'ProjectAddingForm',
        component: ProjectAddingForm_vue_1.default
    },
    {
        path: '/applicationForm',
        name: 'ApplicationForm',
        component: ApplicationForm_vue_1.default
    },
    {
        path: '/project/:id',
        name: 'Project',
        component: Project_vue_1.default
    },
    {
        path: '/projects',
        name: 'Projects',
        component: Projects_vue_1.default
    },
    {
        path: '/applicant/:id',
        name: 'Applicant',
        component: Applicant_vue_1.default
    },
    {
        path: '/viewApplications',
        name: 'ViewApplications',
        component: ViewApplications_vue_1.default
    },
    {
        path: '/aiChatbox',
        name: 'AIChatbox',
        component: aiChatbox_vue_1.default
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration_vue_1.default
    },
    {
        path: '/login',
        name: 'Login',
        component: Login_vue_1.default
    },
    {
        path: '/account',
        name: 'Account',
        component: Account_vue_1.default
    },
    {
        path: '/workshops',
        name: 'Workshops',
        component: Workshops_vue_1.default
    },
    {
        path: '/aboutUs',
        name: 'AboutUs',
        component: AboutUs_vue_1.default
    },
    {
        path: '/events',
        name: 'Events',
        component: Events_vue_1.default
    },
    {
        path: '/event/:id',
        name: 'Event',
        component: Event_vue_1.default
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName: "about" */ '../views/About.vue')); }); }
    }
];
var router = new vue_router_1.default({
    //history: new createWebHistory(process.env.BASE_URL),
    routes: routes,
    scrollBehavior: function (to, from, savedPosition) {
        if (to.hash) {
            return { selector: to.hash };
        }
        else {
            return { x: 0, y: 0 };
        }
    },
});
router.beforeEach(function (to, from, next) {
    /*if (to.path === '/login' && auth.currentUser) {
      next('/')
      return;
    }*/
    if (to.matched.some(function (record) { return record.meta.requiresAuth; }) && !firebase_1.auth.currentUser) {
        next('/login');
        return;
    }
    next();
});
exports.default = router;
//# sourceMappingURL=index.js.map