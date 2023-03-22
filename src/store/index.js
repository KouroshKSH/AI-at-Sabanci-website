"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
//@ts-nocheck
//import Vue from 'vue'
var vuex_1 = tslib_1.__importDefault(require("vuex"));
var vuex_persist_1 = tslib_1.__importDefault(require("vuex-persist"));
//var members_1 = tslib_1.__importDefault(require("@/assets/members"));
//var memberApplications_1 = tslib_1.__importDefault(require("@/assets/memberApplications"));
//var projectProposals_1 = tslib_1.__importDefault(require("@/assets/projectProposals"));
//var currentProjects_1 = tslib_1.__importDefault(require("@/assets/currentProjects"));
//var backupCurrentProjects_1 = tslib_1.__importDefault(require("@/assets/backupCurrentProjects"));
//var pastProjects_1 = tslib_1.__importDefault(require("@/assets/pastProjects"));
var router_1 = tslib_1.__importDefault(require("../router"));
var firebase_1 = require("../firebase");
var auth_1 = require("firebase/auth");
require('dotenv').config();
var vuexLocalStorage = new vuex_persist_1.default({
    key: 'vuex',
    storage: window.localStorage, // or window.sessionStorage or localForage
    // Function that passes the state and returns the state with only the objects you want to store.
    // reducer: state => state,
    // Function that passes a mutation and lets you decide if it should update the state in localStorage.
    // filter: mutation => (true)
});
Vue.use(vuex_1.default);
exports.default = new vuex_1.default.Store({
    //plugins: [vuexLocalStorage.plugin],
    state: {
        user: null,
        isAdmin: true,
        members: members_1.default,
        memberApplications: memberApplications_1.default,
        projectProposals: projectProposals_1.default,
        currentProjects: currentProjects_1.default,
        pastProjects: pastProjects_1.default,
        backupCurrentProjects: backupCurrentProjects_1.default,
        darkMode: false,
        currentHistory: -1,
        history: [],
        historyTitles: [],
    },
    getters: {
        members: function (state) { return state.members; },
        memberApplications: function (state) { return state.memberApplications; },
        projectProposals: function (state) { return state.projectProposals; },
        currentProjects: function (state) { return state.currentProjects; },
        pastProjects: function (state) { return state.pastProjects; },
        isAdmin: function (state) { return state.isAdmin; },
        user: function (state) { return state.user; },
        darkMode: function (state) { return state.darkMode; },
        currentHistory: function (state) { return state.currentHistory; },
        history: function (state) { return state.history; },
        historyTitles: function (state) { return state.historyTitles; }
    },
    mutations: {
        addProject: function (state, newProject) {
            state.currentProjects.push({
                name: newProject.name,
                field: newProject.field,
                abstract: newProject.abstract,
                description: newProject.description,
                projectLeader: newProject.projectLeader,
                projectLeaderMail: newProject.projectLeaderMail,
                projectLeaderPhone: newProject.projectLeaderPhone,
                projectMembers: newProject.projectMembers,
                goals: newProject.goals,
                goalCompletion: newProject.goalCompletion,
                githubLink: newProject.githubLink,
                img: newProject.img,
            });
            state.backupCurrentProjects.push({
                name: newProject.name,
                field: newProject.field,
                abstract: newProject.abstract,
                description: newProject.description,
                projectLeader: newProject.projectLeader,
                projectLeaderMail: newProject.projectLeaderMail,
                projectLeaderPhone: newProject.projectLeaderPhone,
                projectMembers: newProject.projectMembers,
                goals: newProject.goals,
                goalCompletion: newProject.goalCompletion,
                githubLink: newProject.githubLink,
                img: newProject.img,
            });
        },
        addProjectProposal: function (state, newProject) {
            state.projectProposals.push({
                name: newProject.name,
                field: newProject.field,
                abstract: newProject.abstract,
                description: newProject.description,
                projectLeader: newProject.projectLeader,
                projectLeaderMail: newProject.projectLeaderMail,
                projectLeaderPhone: newProject.projectLeaderPhone,
                projectMembers: newProject.projectMembers,
                goals: newProject.goals,
                goalCompletion: newProject.goalCompletion,
                githubLink: newProject.githubLink,
                img: newProject.img,
            });
        },
        addMemberApplication: function (state, newApplication) {
            state.memberApplications.push({
                fullName: newApplication.fullName,
                email: newApplication.email,
                program: newApplication.program,
                year: newApplication.year,
                GPA: newApplication.GPA,
                aiInterest: newApplication.aiInterest,
                clubKnowledge: newApplication.clubKnowledge,
                clubInterest: newApplication.clubInterest,
                LinkedIn: newApplication.LinkedIn,
                GitHub: newApplication.GitHub,
            });
        },
        approveMemberApplication: function (state, applicantIndex) {
            state.members.push({
                fullName: state.memberApplications[applicantIndex].fullName,
                email: state.memberApplications[applicantIndex].email,
                registered: false,
                admin: false,
                program: state.memberApplications[applicantIndex].program,
                year: state.memberApplications[applicantIndex].year,
                GPA: state.memberApplications[applicantIndex].GPA,
                LinkedIn: state.memberApplications[applicantIndex].LinkedIn,
                GitHub: state.memberApplications[applicantIndex].GitHub,
            });
            state.memberApplications.splice(applicantIndex, 1);
        },
        markProjectAsComplete: function (state, project) {
            state.pastProjects.push({
                name: state.currentProjects[project[0]].name,
                field: state.currentProjects[project[0]].field,
                abstract: state.currentProjects[project[0]].abstract,
                description: state.currentProjects[project[0]].description,
                projectLeader: state.currentProjects[project[0]].projectLeader,
                projectLeaderMail: state.currentProjects[project[0]].projectLeaderMail,
                projectLeaderPhone: state.currentProjects[project[0]].projectLeaderPhone,
                projectMembers: state.currentProjects[project[0]].projectMembers,
                goals: state.currentProjects[project[0]].goals,
                githubLink: state.currentProjects[project[0]].githubLink,
                img: state.currentProjects[project[0]].img,
                result: project[1],
            });
            state.currentProjects.splice(project[0], 1);
        },
        addHistory: function (state) { state.history.unshift([]); },
        addPrompt: function (state, prompt) { state.history[state.currentHistory].unshift({ role: 'user', content: prompt }); },
        initResponse: function (state) { state.history[state.currentHistory].unshift({ role: 'assistant', content: '' }); },
        appendResponse: function (state, content) { state.history[state.currentHistory][state.history[state.currentHistory].length - 1].content += content; },
        addHistoryTitle: function (state, title) { state.historyTitles.unshift(title); },
        changeHistoryTitle: function (state, title) { state.historyTitles[state.currentHistory] = title; },
        setCurrentHistory: function (state, currHist) { state.currentHistory = currHist; },
        clearChats: function (state) {
            state.history = [],
                state.historyTitles = [],
                state.currentHistory = -1;
        },
        toggleDarkMode: function (state) { state.darkMode = !state.darkMode; },
        makeAdmin: function (state) { state.isAdmin = true; },
        setRegistered: function (state, i) { state.members[i].registered = true; },
        SET_USER: function (state, user) { state.user = user; },
        CLEAR_USER: function (state) { state.user = null; },
    },
    actions: {
        login: function (_a, details) {
            var commit = _a.commit;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var email, password, error_1;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = details.email, password = details.password;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, (0, auth_1.signInWithEmailAndPassword)(firebase_1.auth, email, password)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _b.sent();
                            switch (error_1.code) {
                                case 'auth/user-not-found':
                                    alert("User not found");
                                    break;
                                case 'auth/wrong-password':
                                    alert("Wrong password");
                                    break;
                                default:
                                    alert("Something went wrong");
                            }
                            return [2 /*return*/];
                        case 4:
                            commit('SET_USER', firebase_1.auth.currentUser);
                            router_1.default.push('/');
                            return [2 /*return*/];
                    }
                });
            });
        },
        register: function (_a, details) {
            var commit = _a.commit;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var email, password, error_2;
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            email = details.email, password = details.password;
                            console.log({ email: email, password: password });
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, (0, auth_1.createUserWithEmailAndPassword)(firebase_1.auth, email, password)];
                        case 2:
                            _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            error_2 = _b.sent();
                            switch (error_2.code) {
                                case 'auth/email-already-in-use':
                                    alert("Email already in use");
                                    break;
                                case 'auth/invalid-email':
                                    alert("Invalid email");
                                    break;
                                case 'auth/operation-not-allowed':
                                    alert("Operation not allowed");
                                    break;
                                case 'auth/weak-password':
                                    alert("Weak password");
                                    break;
                                default:
                                    alert(error_2);
                            }
                            return [2 /*return*/];
                        case 4:
                            commit('SET_USER', firebase_1.auth.currentUser);
                            router_1.default.push('/');
                            return [2 /*return*/];
                    }
                });
            });
        },
        logout: function (_a) {
            var commit = _a.commit;
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, (0, auth_1.signOut)(firebase_1.auth)];
                        case 1:
                            _b.sent();
                            commit('CLEAR_USER');
                            router_1.default.push('/login');
                            return [2 /*return*/];
                    }
                });
            });
        },
        fetchUser: function (_a) {
            var _this = this;
            var commit = _a.commit;
            firebase_1.auth.onAuthStateChanged(function (user) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                return tslib_1.__generator(this, function (_a) {
                    if (user === null) {
                        commit('CLEAR_USER');
                    }
                    else {
                        commit('SET_USER', user);
                        router_1.default.push('/');
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    },
    modules: {}
});
//# sourceMappingURL=index.js.map