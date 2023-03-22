<template>
  <div>
    <div v-if="!darkMode">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <b-container fluid align-y="center">
          <b-row style="padding-top:10%" align-h="center" class="sign-up-two">
              <p class="your-account">Your Account</p>
              <p class="is-it-your-first-time-here-you-can-crea">
                  Has you membership application been approved? Login from below to access your profile.
              </p>
              <input class="group-16" placeholder="Email" />
              <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
              <h3 v-if="showSabanciEmailAlert" class="warning">Please make sure you entered your Sabanci email address.</h3>
              <h3 v-if="showMemberEmailAlert" class="warning">This email does not belong to an approved club member.</h3>       
              <h3 v-if="showMemberIsRegisteredAlert" class="warning">There is already a password associated to this email address, please consider using the normal login instead.</h3>
              <input class="group-17" type="password" placeholder="Password" />
              <h3 v-if="showPasswordDescription" class="warning" style="color: black">A password must be at least 8 characters long and contain both lower and uppercase letters and digits</h3>            
              <h3 v-if="showPasswordAlert" class="warning">Please enter a password.</h3>
              <h3 v-if="showPasswordLengthAlert" class="warning">Please make sure your password is at least 8 characters long.</h3>
              <h3 v-if="showPasswordNoUpperAlert" class="warning">Please make sure the password has uppercase letters.</h3>
              <h3 v-if="showPasswordNoLowerAlert" class="warning">Please make sure the password has lowercase letters.</h3>
              <h3 v-if="showPasswordNoDigitsAlert" class="warning">Please make sure the password you entered has digits.</h3>
              <h3 v-if="showPasswordNoSymbolsAlert" class="warning">Please make sure the password you entered has special symbols</h3>
              <input class="group-17" type="password" placeholder="Password again">
              <h3 v-if="showPasswordRepeatAlert" class="warning">Please enter your password again.</h3>
              <h3 v-if="showPasswordRepeatMatchAlert" class="warning">The password confirmation must match the password.</h3>
              <div style="margin-top: 5%; margin-bottom: 3%" @click="sendForm()" class="submit-button">
                  <p class="click-here">Sign Up</p>
              </div>
              <router-link to="/login"><p class="already-have-an-account-you-can-log-in">Have you logged in before? Log in normally from here.</p></router-link>
              <div class="relative-wrapper-one">
              </div>
            </b-row>
        </b-container>
    </div>
    <div v-else style="min-height: 100vh; background-color: #242424;">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <b-container fluid align-y="center">
          <b-row style="padding-top:10%" align-h="center" class="d-sign-up-two">
              <p class="d-your-account">Your Account</p>
              <p class="d-is-it-your-first-time-here-you-can-crea">
                  Has you membership application been approved? Login from below to access your profile.
              </p>
              <input class="d-group-16" placeholder="Email" />
              <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
              <h3 v-if="showSabanciEmailAlert" class="warning">Please make sure you entered your Sabanci email address.</h3>
              <h3 v-if="showMemberEmailAlert" class="warning">This email does not belong to an approved club member.</h3>       
              <h3 v-if="showMemberIsRegisteredAlert" class="warning">There is already a password associated to this email address, please consider using the normal login instead.</h3>
              <input class="d-group-17" type="password" placeholder="Password" />
              <h3 v-if="showPasswordDescription" class="warning" style="color: white">A password must be at least 8 characters long and contain both lower and uppercase letters and digits</h3>            
              <h3 v-if="showPasswordAlert" class="warning">Please enter a password.</h3>
              <h3 v-if="showPasswordLengthAlert" class="warning">Please make sure your password is at least 8 characters long.</h3>
              <h3 v-if="showPasswordNoUpperAlert" class="warning">Please make sure the password has uppercase letters.</h3>
              <h3 v-if="showPasswordNoLowerAlert" class="warning">Please make sure the password has lowercase letters.</h3>
              <h3 v-if="showPasswordNoDigitsAlert" class="warning">Please make sure the password you entered has digits.</h3>
              <h3 v-if="showPasswordNoSymbolsAlert" class="warning">Please make sure the password you entered has special symbols</h3>
              <input class="d-group-17" type="password" placeholder="Password again">
              <h3 v-if="showPasswordRepeatAlert" class="warning">Please enter your password again.</h3>
              <h3 v-if="showPasswordRepeatMatchAlert" class="warning">The password confirmation must match the password.</h3>
              <div style="margin-top: 5%; margin-bottom: 3%" @click="sendForm()" class="d-submit-button">
                  <p class="d-click-here">Sign Up</p>
              </div>
              <router-link to="/login"><p class="d-already-have-an-account-you-can-log-in">Have you logged in before? Log in normally from here.</p></router-link>
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
import members from '@/assets/members'
export default {
   data() {
     return {
      members,  
      email: "",
      password: "",
      passwordRepeat: "",
      showNameAlert: false,
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showMemberEmailAlert: false,
      showMemberIsRegisteredAlert: false,
      showPasswordAlert: false,
      showPasswordLengthAlert: false,
      showPasswordDescription: true,
      showPasswordNoUpperAlert: false,
      showPasswordNoLowerAlert: false,
      showPasswordNoDigitsAlert: false,
      showPasswordNoSymbolsAlert: false,
      showPasswordRepeatAlert: false,
      showPasswordRepeatMatchAlert: false,
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
        if(this.password==""){this.showPasswordAlert=true; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(this.password.length < 8){this.showPasswordAlert=false; this.showPasswordLengthAlert=true; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/[A-Z]/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=true; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/[a-z]/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=true; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(!/\d/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=true; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=false; valid=false}
        else if(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/.test(this.password)){this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=true; this.showPasswordDescription=false; valid=false}
        else{this.showPasswordAlert=false; this.showPasswordLengthAlert=false; this.showPasswordNoUpperAlert=false; this.showPasswordNoLowerAlert=false; this.showPasswordNoDigitsAlert=false; this.showPasswordNoSymbolsAlert=false; this.showPasswordDescription=true;}
        if(this.passwordRepeat==""){this.showPasswordRepeatAlert=true; this.showPasswordRepeatMatchAlert=false; valid = false}
        else if(this.passwordRepeat != this.password){this.showPasswordRepeatAlert=false; this.showPasswordRepeatMatchAlert=true; valid=false}
        else{this.showPasswordRepeatAlert=false; this.showPasswordRepeatMatchAlert=false}
        if(valid){
            let members = this.$store.getters.members
            let memberExists = false;
            for(let i=0; i < members.length; i++){
                console.log(members)
                if(members[i].email==this.email && !members[i].regisered==false){
                    memberExists = true;
                    //const bcrypt = require('bcrypt');
                    //const saltRounds = 12;
                    //bcrypt.hash(this.password, saltRounds, function(err, hash) {
                        let login = {email: this.email, password: this.password}
                        store.dispatch('register', login)
                        this.$store.commit('setRegistered', i)
                    //});
                    break;
                }
                else if(members[i].email==this.email && members[i].registered){
                    memberExists=true;
                    this.showMemberIsRegisteredAlert=true;
                    break;
                }
            }
            if(!memberExists){this.showMemberEmailAlert=true}
            else{
                this.email = "";
                this.password = "";
                this.passwordRepeat = "";
            }
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
  .d-sign-up-two {
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
  .d-is-it-your-first-time-here-you-can-crea {
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
    color: white;
  }
  /*
  .captcha-two {
    background-color: rgba(233, 233, 233, 1);
    margin-bottom: 50px;
    margin-left: 500px;
    padding: 19px 15px 11px 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .captcha {
    font-family: "Inter";
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-bottom: 4px;
  }
  */
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  .d-already-have-an-account-you-can-log-in {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-top: 3%;
  }
  .relative-wrapper-one {
    position: relative;
  }
}
@media (max-aspect-ratio: 1/1){
  .d-sign-up-two {
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
  .d-is-it-your-first-time-here-you-can-crea {
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
    color: white;
  }
  /*
  .captcha-two {
    background-color: rgba(233, 233, 233, 1);
    margin-bottom: 50px;
    margin-left: 500px;
    padding: 19px 15px 11px 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .captcha {
    font-family: "Inter";
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-bottom: 4px;
  }
  */
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  .d-already-have-an-account-you-can-log-in {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-top: 3%;
  }
  .relative-wrapper-one {
    position: relative;
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
  .sign-up-two {
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
  .is-it-your-first-time-here-you-can-crea {
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
  /*
  .captcha-two {
    background-color: rgba(233, 233, 233, 1);
    margin-bottom: 50px;
    margin-left: 500px;
    padding: 19px 15px 11px 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .captcha {
    font-family: "Inter";
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-bottom: 4px;
  }
  */
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  .already-have-an-account-you-can-log-in {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    margin-top: 3%;
  }
  .relative-wrapper-one {
    position: relative;
  }
}
@media (max-aspect-ratio: 1/1){
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 2vw;
    margin-left: 15%;
    width: 70%;
  }
  .sign-up-two {
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
  .is-it-your-first-time-here-you-can-crea {
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
  }
  .username {
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
  }
  .group-18 {
    padding: 3% 0% 3% 2%;
    display: flex;
    align-items: center;
    border: 2px solid rgba(225, 225, 225, 1);
    margin-top: 2%;
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  /*
  .captcha-two {
    background-color: rgba(233, 233, 233, 1);
    margin-bottom: 50px;
    margin-left: 500px;
    padding: 19px 15px 11px 22px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .captcha {
    font-family: "Inter";
    font-size: 22px;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-bottom: 4px;
  }
  */
  .rectangle-78 {
    width: 46px;
    height: 46px;
    background-color: white;
  }
  .already-have-an-account-you-can-log-in {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    margin-top: 3%;
  }
  .relative-wrapper-one {
    position: relative;
  }
}
</style>