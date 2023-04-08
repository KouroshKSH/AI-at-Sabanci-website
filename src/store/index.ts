// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
//@ts-nocheck
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist';
import members from '@/assets/members';
import memberApplications from '@/assets/memberApplications';
import projectProposals from '@/assets/projectProposals';
import currentProjects from '@/assets/currentProjects';
import backupCurrentProjects from '@/assets/backupCurrentProjects';
import pastProjects from '@/assets/pastProjects';
import router from '../router'
import { auth } from '../firebase'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'
import { db } from '@/firebase'
import { doc, getDoc } from "firebase/firestore"; 
require('dotenv').config()
const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage, // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

type hist = {
  role: string;
  content: string;
};


Vue.use(Vuex)
export default new Vuex.Store({
  
  //plugins: [vuexLocalStorage.plugin],
  state: {
    loginInfo: null,
    user: null
    /*{
      firstName: "Sadiq",
      lastName: "Qara",
      email: "sadig.gara@sabanciuniv.edu",
      registered: true,
      admin: true,
      hasGPT4Access: true,
      program: "BSCS",
      year: "Sophomore (Year 2)",
      GPA: "2.96",
      LinkedIn: "https://www.linkedin.com/in/sadiq-qara-b9858a25a/",
      GitHub: "https://github.com/Sadiq04",
      clubKnowledge: "",
      clubInterest: "",
      aiInterest: "",
    }*/,
    isAdmin: false,
    hasGPT4Access: false,
    members,
    memberApplications,
    projectProposals,
    currentProjects,
    pastProjects,
    backupCurrentProjects,
    darkMode: false,
    currentHistory: -1,
    history: [],
    historyTitles: [],
    chatHornyMode: false,
    isGPT4: false,
  },
  getters: {
    members(state){return state.members;},
    memberApplications(state){return state.memberApplications;},
    projectProposals(state){return state.projectProposals;},
    currentProjects(state){return state.currentProjects;},
    pastProjects(state){return state.pastProjects;},
    isAdmin(state){return state.isAdmin;},
    user(state){return state.user;},
    darkMode(state){return state.darkMode;},
    currentHistory(state){return state.currentHistory;},
    history(state){return state.history},
    historyTitles(state){return state.historyTitles}
  },
  mutations: {
    addProject(state, newProject) {
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
      })
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
      })
    },
    addProjectProposal(state, newProject){
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
      })
    },
    addMemberApplication(state, newApplication){
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
      })
    },
    approveMemberApplication(state, applicantIndex){
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
      })
      state.memberApplications.splice(applicantIndex, 1)
    },
    markProjectAsComplete(state, project){
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
      })
      state.currentProjects.splice(project[0], 1)
    },

    addHistory(state){
      if(state.chatHornyMode){
        state.history.unshift([{"role": "system", "content": "You are a seductive assistant that occasionally flirts with the user, your name is ChatSU. Make sure to act comically seductive and flirty. Do not explicitly say you are seductive or flirty just act like it."}])
      }
      else{
        state.history.unshift([{"role": "system", "content": "You are a helpful assistant called ChatSU."}])
      }
    },
    addPrompt(state, prompt){state.history[state.currentHistory].push({role: 'user', content: prompt})},
    addMessage(state, message){state.history[state.currentHistory].push(message)},
    initResponse(state){state.history[state.currentHistory].push({role: 'assistant', content: ''})},
    appendResponse(state, contents){state.history[contents[1]][state.history[contents[1]].length-1].content+=contents[0];},
    addHistoryTitle(state, title){state.historyTitles.unshift(title)},
    changeHistoryTitle(state, title){state.historyTitles[state.currentHistory]=title},
    setCurrentHistory(state, currHist){
      state.currentHistory=currHist;
      if(state.chatHornyMode){state.history[state.currentHistory][0]={"role": "system", "content": "You are a seductive assistant that occasionally flirts with the user, your name is ChatSU. Make sure to act comically seductive and flirty. Do not explicitly say you are seductive or flirty just act like it."}}
      else{state.history[state.currentHistory][0]={"role": "system", "content": "You are a helpful assistant called ChatSU."}}
    },
    toggleGPT4(state){state.isGPT4=!state.isGPT4},
    toggleHornyMode(state){
      state.chatHornyMode=!state.chatHornyMode
      if(state.currentHistory!=-1){
        if(state.chatHornyMode){state.history[state.currentHistory][0]={"role": "system", "content": "You are a seductive assistant that occasionally flirts with the user, your name is ChatSU. Make sure to act comically seductive and flirty. Do not explicitly say you are seductive or flirty just act like it."}}
        else{state.history[state.currentHistory][0]={"role": "system", "content": "You are a helpful assistant called ChatSU."}}
      }
    },
    clearChats(state){
      state.history=[],
      state.historyTitles=[],
      state.currentHistory=-1
    },
    
    toggleDarkMode(state){state.darkMode=!state.darkMode},
    makeAdmin(state){state.isAdmin=true;},
    setRegistered(state, i){state.members[i].registered=true},
    SET_USER (state, user) {
      state.loginInfo = user;
      let email = user.email;
      const docRef = doc(db, "members", email);
      getDoc(docRef).then(docSnap => {
        state.user = docSnap.data(),
        state.admin = state.user.admin;
        state.hasGPT4Access = state.user.hasGPT4Access;
      })
    },
    CLEAR_USER (state) {state.user = null; state.loginInfo = null},
    
  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
      } catch (error: any) {
        switch(error.code) {
          case 'auth/user-not-found':
            //alert("User not found")
            break
          case 'auth/wrong-password':
            //alert("Wrong password")
            break
          default:
            //alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async register ({ commit}, details) {
      const { email, password } = details
      console.log({email, password})
     try {
       await createUserWithEmailAndPassword(auth, email, password)
     } catch (error: any) {
       switch(error.code) {
         case 'auth/email-already-in-use':
           alert("Email already in use")
           break
         case 'auth/invalid-email':
           alert("Invalid email")
           break
         case 'auth/operation-not-allowed':
           alert("Operation not allowed")
           break
         case 'auth/weak-password':
           alert("Weak password")
           break
         default:
           alert(error)
       }

       return
     }

     commit('SET_USER', auth.currentUser)

     router.push('/')
   },
   async logout ({ commit }) {
    await signOut(auth)

    commit('CLEAR_USER')

    router.push('/')
  },

  fetchUser ({ commit }) {
    auth.onAuthStateChanged(async user => {
      if (user === null) {
        commit('CLEAR_USER')
      } else {
        commit('SET_USER', user)
        router.push('/')
      }
    })
  }
  },
  modules: {
  }
})
