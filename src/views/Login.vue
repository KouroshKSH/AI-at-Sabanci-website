<template>
  <div>
    <div v-if="!darkMode">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <b-container fluid align-y="center">
        <b-row style="padding-top:10%" align-self="center" class="log-in-two">
            <p class="your-account">Your Account</p>
            <p class="welcome-back">Welcome back!</p>
            <input class="group-16" v-model="email" placeholder="Sabanci Email" />
            <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" class="warning">Please make sure you entered your Sabanci email address.</h3>
            <h3 v-if="showMemberEmailAlert" class="warning">Please make sure you have made a first time login.</h3>  
            <input class="group-17" type="password" v-model="password" placeholder="Password" />
            <h3 v-if="showPasswordAlert" class="warning">Please enter a password.</h3>
            <div style="margin-top: 5%; margin-bottom: 3%;" @click="sendForm()" class="submit-button">
                <p style="text-align: center" class="click-here">Log In</p>
            </div>
            <router-link to="registration"><p class="dont-have-an-account-you-can-sign-up-f">For first time member login click here.</p></router-link>
            <div class="relative-wrapper-one">
            </div>
        </b-row>
      </b-container>
    </div>
    <div v-else style="background-color: #242424; min-height: 100vh">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <b-container fluid align-y="center">
        <b-row style="padding-top:10%" align-self="center" class="d-log-in-two">
            <p class="d-your-account">Your Account</p>
            <p class="d-welcome-back">Welcome back!</p>
            <input class="d-group-16" v-model="email" placeholder="Sabanci Email" />
            <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
            <h3 v-if="showSabanciEmailAlert" class="warning">Please make sure you entered your Sabanci email address.</h3>
            <h3 v-if="showMemberEmailAlert" class="warning">Please make sure you have made a first time login.</h3>  
            <input class="d-group-17" type="password" v-model="password" placeholder="Password" />
            <h3 v-if="showPasswordAlert" class="warning">Please enter a password.</h3>
            <div style="margin-top: 5%; margin-bottom: 3%;" @click="sendForm()" class="d-submit-button">
                <p style="text-align: center" class="d-click-here">Log In</p>
            </div>
            <router-link to="registration"><p class="d-dont-have-an-account-you-can-sign-up-f">For first time member login click here.</p></router-link>
            <div class="relative-wrapper-one">
            </div>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import store from '@/store/index';
import { Email } from "@/smtp.js"
import bcrypt from 'bcryptjs'
import memberApplications from '@/assets/memberApplications';
export default {
   data() {
     return {
      members: this.$store.getters.members,
      email: "",
      password: "",
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showMemberNotRegisteredAlert: false,
      showMemberEmailAlert: false,
      showPasswordAlert: false,
     }
     /* Name, Surname: 
        Sabanci email: 
        Program/Department: 
        Level/Year: 
        Level of education: (Undergraduate/Graduate/Master)
        GPA: (Kinda mixed on this one)
        Have you worked on/took interest in AI in the past?:
        How did you hear about our club?: 
        Why are you interested in joining our club?: 
        LinkedIn: (optional)
        Github: (optional)
        CV: (optional)
        */
   },
   computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
   methods: {
    //handleFileUpload(){
    //  this.CV = this.$refs.file.files[0];
    //},
    sendForm(){
        let valid = true;
        if(this.email==""){this.showEmailAlert=true; valid=false}
        else if(!this.email.includes("@sabanciuniv.edu")){this.showSabanciEmailAlert=true; this.showEmailAlert=false; valid=false}
        else{this.showEmailAlert=false; this.showSabanciEmailAlert=false}
        if(this.password==""){this.showPasswordAlert=true; valid=false}
        else{this.showPasswordAlert=false;}
        if(valid){
            /*let memberExists = false;
            for(let i=0; i < this.members.length; i++){
                if(this.members[i].email==this.email && this.members[i].password==null){
                    memberExists = true;
                    const bcrypt = require('bcrypt');
                    const saltRounds = 12;
                    bcrypt.hash(this.password, saltRounds, function(err, hash) {
                        store.dispatch('login', {email: this.members[i].email, password: hash})
                        console.log(hash)
                    });
                }
                else if(this.members[i].password!=null){
                    this.showMemberIsRegisteredAlert=true;
                }
            }
            if(!memberExists){this.showMemberEmailAlert=true}
            */
            const saltRounds = 12;
            //bcrypt.hash(this.password, saltRounds, function(err, hash) {
                store.dispatch('login', {email: this.email, password: this.password})
            //});
            this.email = "";
            this.password = "";
        }
    }
   } 
}
</script>

<style scoped>
@media (min-aspect-ratio: 8/5){
  .d-submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 6%;
    margin-left: 47%;
    margin-right: 47%;
  }
  .d-submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 2px solid black;
    width: 6%;
    margin-left: 47%;
    margin-right: 47%;
    
  }
  .d-click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 8/5) and (min-aspect-ratio: 6/5){
  .d-submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 8%;
    margin-left: 46%;
    margin-right: 46%;
  }
  .d-submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 2px solid black;
    width: 8%;
    margin-left: 46%;
    margin-right: 46%;
    
  }
  .d-click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 6/5) and (min-aspect-ratio: 1/1){
  .d-submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
  }
  .d-submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 2px solid black;
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
    
  }
  .d-click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 1/1) and (min-aspect-ratio: 3/5){
    .d-submit-button {
      border-radius: 5px;
      padding: 1% 0.5% 1% 0.5%;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      color: white;
      align-items: center;
      position: relative;
      border: 2px solid rgba(255, 255, 255, 1);
      width: 12%;
      margin-left: 44%;
      margin-right: 44%;
    }
    .d-submit-button:hover {
      border-radius: 5px;
      padding: 1% 0.5% 1% 0.5%;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      align-items: center;
      position: relative;
      border: 2px solid rgba(255, 255, 255, 1);
      transition: background-color 0.5s, color 0.5s;
      color: black;
      background-color: white;
      border: 2px solid black;
      width: 12%;
      margin-left: 44%;
      margin-right: 44%;
      
    }
    .d-click-here {
      font-family: "Inter";
      font-size: 1.5vw;
      font-weight: 400;
      line-height: normal;
      text-align: center;
      margin: auto;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
}
@media (max-aspect-ratio: 3/5) and (min-aspect-ratio: 2/5){
  .d-submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
  }
  .d-submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 2px solid black;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
    
  }
  .d-click-here {
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 2/5){
  .d-submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
  }
  .d-submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 2px solid black;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
    
  }
  .d-click-here {
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}

@media (min-aspect-ratio: 8/5){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: black;
    align-items: center;
    position: relative;
    border: 2px solid black;
    width: 6%;
    margin-left: 47%;
    margin-right: 47%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 6%;
    margin-left: 47%;
    margin-right: 47%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 8/5) and (min-aspect-ratio: 6/5){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: black;
    align-items: center;
    position: relative;
    border: 2px solid black;
    width: 8%;
    margin-left: 46%;
    margin-right: 46%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 8%;
    margin-left: 46%;
    margin-right: 46%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 6/5) and (min-aspect-ratio: 1/1){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid black;
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 1/1) and (min-aspect-ratio: 3/5){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: black;
    align-items: center;
    position: relative;
    border: 2px solid black;
    width: 12%;
    margin-left: 44%;
    margin-right: 44%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 12%;
    margin-left: 44%;
    margin-right: 44%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 3/5) and (min-aspect-ratio: 2/5){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: black;
    border: 2px solid black;
    align-items: center;
    position: relative;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}
@media (max-aspect-ratio: 2/5){
  .submit-button {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    color: black;
    align-items: center;
    position: relative;
    border: 2px solid black;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
  }
  .submit-button:hover {
    border-radius: 5px;
    padding: 1% 0.5% 1% 0.5%;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    align-items: center;
    position: relative;
    transition: background-color 0.5s, color 0.5s;
    color: white;
    background-color: black;
    border: 2px solid black;
    width: 15%;
    margin-left: 42.5%;
    margin-right: 42.5%;
    
  }
  .click-here {
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin: auto;
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  }
}

@media (min-aspect-ratio: 1/1){
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vh;
    margin-left: 15%;
    width: 70%;
  }
  .d-log-in-two {
    background-color: #242424;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-your-account {
    font-family: "Cinzel";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
  }
  .d-welcome-back {
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 3%;
  }
  .d-group-16 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid gray;
    margin-top: 3%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    background-color: #242424;
    color: white;
  }
  .d-username-or-email {
    font-family: "Inter";
    font-size: 2vh; 
    font-weight: 200;
    line-height: normal;
    color: white;
  }
  .d-group-17 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid gray;
    margin-top: 2%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    background-color: #242424;
    color: white
  }
  .d-dont-have-an-account-you-can-sign-up-f {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-top: 3%;
  }
}
@media (max-aspect-ratio: 1/1){
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vw;
    margin-left: 15%;
    width: 70%;
  }
  .d-log-in-two {
    background-color: #242424;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-your-account {
    font-family: "Cinzel";
    font-size: 6vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 15%;
  }
  .d-welcome-back {
    width: 100%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 3%;
  }
  .d-group-16 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid gray;
    margin-top: 3%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    background-color: #242424;
    color: white;
  }
  .d-username-or-email {
    font-family: "Inter";
    font-size: 2vw; 
    font-weight: 200;
    line-height: normal;
    color: white;
  }
  .d-group-17 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid gray;
    margin-top: 2%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    background-color: #242424;
    color: white
  }
  .d-dont-have-an-account-you-can-sign-up-f {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-top: 3%;
  }
}

@media (min-aspect-ratio: 1/1){
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vh;
    margin-left: 15%;
    width: 70%;
  }
  .log-in-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .your-account {
    font-family: "Cinzel";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
  }
  .welcome-back {
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 3%;
  }
  .group-16 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid rgba(225, 225, 225, 1);
    margin-top: 3%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .username-or-email {
    font-family: "Inter";
    font-size: 2vh; 
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 0.3);
  }
  .group-17 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid rgba(225, 225, 225, 1);
    margin-top: 2%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  .dont-have-an-account-you-can-sign-up-f {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    margin-top: 3%;
  }
}
@media (max-aspect-ratio: 1/1){
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vw;
    margin-left: 15%;
    width: 70%;
  }
  .log-in-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .your-account {
    font-family: "Cinzel";
    font-size: 6vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 15%;
  }
  .welcome-back {
    width: 100%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 3%;
  }
  .group-16 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid rgba(225, 225, 225, 1);
    margin-top: 3%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    color: white;
  }
  .username-or-email {
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 0.3);
  }
  .group-17 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid rgba(225, 225, 225, 1);
    margin-top: 2%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    color: white;
  }
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  @media (min-aspect-ratio: 8/5){
      .submit-button {
        border-radius: 5px;
        padding: 0.5% 0.5% 0.3% 0.5%;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        color: white;
        align-items: center;
        position: relative;
        border: 2px solid black;
        width: 6%;
        margin-left: 47%;
        margin-right: 47%;
      }
      .submit-button:hover {
        border-radius: 5px;
        padding: 0.5% 0.5% 0.3% 0.5%;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        align-items: center;
        position: relative;
        transition: background-color 0.5s, color 0.5s;
        color: black;
        background-color: black;
        border: 3px solid black;
        width: 6%;
        margin-left: 47%;
        margin-right: 47%;
        
      }
      .click-here {
        font-family: "Inter";
        font-size: 1.5vw;
        font-weight: 400;
        line-height: normal;
        color: black;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      }
      .click-here:hover{
        font-family: "Inter";
        font-size: 1.5vw;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        transition: background-color 0.5s, color 0.5s;
        color: white;
      }
    }

  .dont-have-an-account-you-can-sign-up-f {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    margin-top: 3%;
  }
}
</style>

<!--
if sadig makes all the shit by code:
print("ypou are stupid")
elif sadiq makes all the shit to some3aone else:
print(half stubid)
else:
print"e also stupid)
overall print(sadiq is stup) - Rasim Qara
-->
