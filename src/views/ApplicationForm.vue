<template>
  <div id="applicationForm">  
    <div v-if="!darkMode">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <div class="join-us-three">
          <b-container fluid style="padding: 0 0 0 0">
            <div class="flex-wrapper-seven"></div>
            <div style="width: 100%;">
                
                <div class="flex-wrapper-five" style="background-color: rgba(207,207,207,1); margin-top: 30%">
                  <div class="flex-wrapper-six"><p class="join-us-two" style="z-index: 2">Join Us</p></div>
                  <!--<p class="become-a-part-of-our-club-participate-i">
                    Apply to becoming a member of the club and earn the chance to use top level AI equipment and be directly involved in developing projects related to AI/ML development 
                  </p>-->
                  <div class="blur bubblepos-1">
                    Become a part of our club, participate in your favorite activities, and make the best out of it.
                  </div>
                  <div class="emoji">👋</div>
                  <div class="blur bubblepos-2">
                    You can choose from a range of positions, such as AI developer, social media manager, etc.
                  </div>
                  <div class="blur bubblepos-3">
                    So why wait? Join us today and be a part of our club!
                  </div>
                  <img
                  style="padding: 0 0 0 0;"
                  alt=""
                  class="rectangle-31"
                  src="https://static.overlay-tech.com/assets/1cc15398-f828-48ad-9f49-ca5c88a14079.png"
                  />
                </div>
            </div>
          </b-container>
          <b-container class="form" fluid style="overflow:hidden;">
            <b-row align-h="center">
              <div style="z-index: 2;" class="group-17">
                <p class="your-name">Your Name *</p>
                <div style="display: flex; align-items: flex-start; width: 100%">
                  <input class="flex-wrapper-one" v-model="firstName" placeholder="First Name" />
                  <input style="margin-left: 5%" class="flex-wrapper-one" v-model="lastName" placeholder="Last Name" />
                </div>
              </div>
            </b-row>
            <b-row>
              <h3 v-if="showFirstNameAlert" style="margin-top: 1%; color: red; font-size: 15px; width:50%">Please enter your first name.</h3>
              <h3 v-if="showLastNameAlert" style="margin-top: 1%; margin-left: 1.5%; color: red; font-size: 15px; width:45%">Please enter your last name.</h3>
            </b-row>
            <div class="group-16">
              <p class="your-name">Your Sabanci Email *</p>
              <input style="width: 100%; height: 100%;" type="email" v-model="email" class="flex-wrapper-three" />
              <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
              <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
              <p class="your-name">Phone number: *</p>
              <input type="phone" v-model="phone" class="flex-wrapper-three" />
              <h3 v-if="showPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your phone number.</h3>
              <p class="your-name">Program: *</p>
              <input type="text" v-model="program" class="flex-wrapper-three" placeholder="ex. BSCS" />
              <h3 v-if="showProgramAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your Program/Major.</h3>
            </div>
            <label class="your-name" for="year">Level / Year: * </label>
            <select v-model="year" id="year">
                <option disabled value="">Please select one</option>
                <option>Foundation Year</option>
                <option>Freshman (Year 1)</option>
                <option>Sophomore (Year 2)</option>
                <option>Junior (Year 3)</option>
                <option>Senior (Year 4 or above)</option>
                <option>Master</option>
                <option>Bachelors</option>
                <option>Doctorate</option>
            </select><br>
            <h3 v-if="showYearAlert" style="margin-top: 1%; color: red; font-size: 15px">Please choose a year.</h3>
            <p class="your-name">GPA: *</p>
            <input type="number" step="0.1" min="1" max="4" v-model="GPA" style="padding-right: 2%; width: 20%;" class="flex-wrapper-three" />
            <h3 v-if="showGPAAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your GPA.</h3>
            <div class="group-15">
            <p class="your-name">Please tell us about your interest/experience with AI/ML. *</p>
            <textarea cols="140" rows="5" v-model="aiInterest" class="flex-wrapper-four"></textarea>
            <h3 v-if="showAIInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us your interest/experience with AI/ML.</h3>
            <p class="your-name">How did you hear about our club? *</p>
            <textarea cols="140" rows="5" v-model="clubKnowledge" class="flex-wrapper-four"></textarea>
            <h3 v-if="showClubKnowledgeAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us how you heard about the club.</h3>
            <p class="your-name">Why are you interested in joining our club? *</p>
            <textarea cols="140" rows="5" v-model="clubInterest" class="flex-wrapper-four"></textarea>
            <h3 v-if="showClubInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us why you are interested in joining out club.</h3>
            <p class="your-name">GitHub: </p>
            <input type="text" v-model="GitHub" class="flex-wrapper-three" placeholder="GitHub link" />
            <p class="your-name">LinkedIn: </p>
            <input type="text" v-model="LinkedIn" class="flex-wrapper-three" placeholder="LinkedIn link" />
            </div>
          </b-container>
          <b-container>
            <b-row align-h="center">
              <div class="submit-button" style="margin-top: 5%; margin-bottom: 5%">
                <p @click="sendForm()" class="click-here">Submit</p>
              </div>
            </b-row>
          </b-container>
        </div>
    </div>
    <div v-else>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <div class="d-join-us-three">
          <b-container fluid style="padding: 0 0 0 0">
            <div class="flex-wrapper-seven"></div>
            <div style="width: 100%;">
                <div class="d-flex-wrapper-five">
                  <p class="d-join-us-two" style="z-index: 2">Join Us</p>
                  <!--<p class="become-a-part-of-our-club-participate-i">
                    Apply to becoming a member of the club and earn the chance to use top level AI equipment and be directly involved in developing projects related to AI/ML development 
                  </p>-->
                  <div class="blur bubblepos-1" style="color: white">
                    Become a part of our club, participate in your favorite activities, and make the best out of it.
                  </div>
                  <div class="d-emoji">👋</div>
                  <div class="blur bubblepos-2" style="color: white">
                    You can choose from a range of positions, such as AI developer, social media manager, etc.
                  </div>
                  <div class="blur bubblepos-3" style="color: white">
                    So why wait? Join us today and be a part of our club!
                  </div>
                  <img
                  style="padding: 0 0 0 0;"
                  alt=""
                  class="rectangle-31"
                  src="../assets/Rectangle 31.png"
                  />
                </div>
            </div>
            
          </b-container>
          <b-container class="form" fluid style="overflow:hidden;">
            <b-row align-h="center">
              <div style="z-index: 2;" class="group-17">
                <p class="d-your-name">Your Name *</p>
                <div style="display: flex; align-items: flex-start; width: 100%">
                  <input class="d-flex-wrapper-one" v-model="firstName" placeholder="First Name" />
                  <input style="margin-left: 5%" class="d-flex-wrapper-one" v-model="lastName" placeholder="Last Name" />
                </div>
              </div>
            </b-row>
            <b-row>
              <h3 v-if="showFirstNameAlert" style="margin-top: 1%; color: red; font-size: 15px; width:50%">Please enter your first name.</h3>
              <h3 v-if="showLastNameAlert" style="margin-top: 1%; margin-left: 1.5%; color: red; font-size: 15px; width:45%">Please enter your last name.</h3>
            </b-row>
            <div class="group-16">
              <p class="d-your-name">Your Sabanci Email *</p>
              <input style="width: 100%; height: 100%;" type="email" v-model="email" class="d-flex-wrapper-three" />
              <h3 v-if="showEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your email address.</h3>
              <h3 v-if="showSabanciEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please make sure you entered your Sabanci email address.</h3>
              <p class="d-your-name">Phone number: *</p>
              <input type="phone" v-model="phone" class="d-flex-wrapper-three" />
              <h3 v-if="showPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your phone number.</h3>
              <p class="d-your-name">Program: *</p>
              <input type="text" v-model="program" class="d-flex-wrapper-three" placeholder="ex. BSCS" />
              <h3 v-if="showProgramAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your Program/Major.</h3>
            </div>
            <label class="d-your-name" for="year">Level / Year: * </label>
            <select v-model="year" id="year">
                <option disabled value="">Please select one</option>
                <option>Foundation Year</option>
                <option>Freshman (Year 1)</option>
                <option>Sophomore (Year 2)</option>
                <option>Junior (Year 3)</option>
                <option>Senior (Year 4 or above)</option>
                <option>Master</option>
                <option>Bachelors</option>
                <option>Doctorate</option>
            </select><br>
            <h3 v-if="showYearAlert" style="margin-top: 1%; color: red; font-size: 15px">Please choose a year.</h3>
            <p class="d-your-name">GPA: *</p>
            <input type="number" step="0.1" min="1" max="4" v-model="GPA" style="padding-right: 2%; width: 20%;" class="d-flex-wrapper-three" />
            <h3 v-if="showGPAAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter your GPA.</h3>
            <div class="group-15">
            <p class="d-your-name">Please tell us about your interest/experience with AI/ML. *</p>
            <textarea cols="140" rows="5" v-model="aiInterest" class="d-flex-wrapper-four"></textarea>
            <h3 v-if="showAIInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us your interest/experience with AI/ML.</h3>
            <p class="d-your-name">How did you hear about our club? *</p>
            <textarea cols="140" rows="5" v-model="clubKnowledge" class="d-flex-wrapper-four"></textarea>
            <h3 v-if="showClubKnowledgeAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us how you heard about the club.</h3>
            <p class="d-your-name">Why are you interested in joining our club? *</p>
            <textarea cols="140" rows="5" v-model="clubInterest" class="d-flex-wrapper-four"></textarea>
            <h3 v-if="showClubInterestAlert" style="margin-top: 1%; color: red; font-size: 15px">Please tell us why you are interested in joining our club.</h3>
            <p class="d-your-name">GitHub: </p>
            <input type="text" v-model="GitHub" class="d-flex-wrapper-three" placeholder="GitHub link" />
            <p class="d-your-name">LinkedIn: </p>
            <input type="text" v-model="LinkedIn" class="d-flex-wrapper-three" placeholder="LinkedIn link" />
            </div>
          </b-container>
          <b-container>
            <b-row align-h="center">
              <div class="d-submit-button" style="margin-top: 5%; margin-bottom: 5%; cursor: pointer;">
                <p @click="sendForm()" class="d-click-here">Submit</p>
              </div>
            </b-row>
          </b-container>
        </div>
    </div>
    <b-container style="padding-bottom: 5%" fluid class="bottom-bar">
      <div class="flex-wrapper-seven-1">
            <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%;"><p class="contact-us">Contact Us</p></div></router-link>
      </div>
      <a href="#applicationForm">  
        <img
          style="max-width:5%; position: absolute; right: 5%; cursor: pointer;"
          src="../assets/back to top.png"
        >
      </a>
    </b-container>
  </div>  
</template>

<script>
import Vue from 'vue'
import VueTelInput from 'vue-tel-input'
const VuePhoneNumberInput = window['vue-phone-number-input'];
Vue.use(VueTelInput)
Vue.component('vue-tel-input', VueTelInput.VueTelInput)
//Vue.component('vue-phone-number-input', VuePhoneNumberInput);
import { Email } from "@/smtp.js"
import memberApplications from '@/assets/memberApplications';
import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
import { db } from '../firebase'
export default {
   data() {
     return {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      program: "",
      year: "",
      GPA: "",
      aiInterest: "",
      clubKnowledge: "",
      clubInterest: "",
      LinkedIn: "",
      GitHub: "",
      //CV: "",
      showFirstNameAlert: false,
      showLastNameAlert: false,
      showPhoneAlert: false,
      showEmailAlert: false,
      showSabanciEmailAlert: false,
      showProgramAlert: false,
      showYearAlert: false,
      showGPAAlert: false,
      showAIInterestAlert: false,
      showClubKnowledgeAlert: false,
      showClubInterestAlert: false,
      Email,
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
        String.prototype.isNumber = function(){return /^\d+$/.test(this);}
        if(this.firstName==""){this.showFirstNameAlert=true; valid=false}
        else{this.showFirstNameAlert=false}
        if(this.lastName==""){this.showLastNameAlert=true; valid=false}
        else{this.showLastNameAlert=false}
        if(this.phone==""){this.showPhoneAlert=true; valid=false}
        else{this.showPhoneAlert=false}
        if(this.email==""){this.showEmailAlert=true; valid=false}
        else if(!this.email.includes("@sabanciuniv.edu")){this.showSabanciEmailAlert=true; this.showEmailAlert=false; valid=false}
        else{this.showEmailAlert=false; this.showSabanciEmailAlert=false}
        if(this.program==""){this.showProgramAlert=true; valid=false}
        else{this.showProgramAlert=false}
        if(this.year==""){this.showYearAlert=true; valid=false}
        else{this.showYearAlert=false}
        if(this.GPA==""){this.showGPAAlert=true; valid=false}
        else{this.showGPAAlert=false}
        if(this.aiInterest==""){this.showAIInterestAlert=true; valid=false}
        else{this.showAIInterestAlert=false}
        if(this.clubKnowledge==""){this.showClubKnowledgeAlert=true; valid=false}
        else{this.showClubKnowledgeAlert=false}
        if(this.clubInterest==""){this.showClubInterestAlert=true; valid=false}
        else{this.showClubInterestAlert=false}
        if(valid){
            /*const res = fetch('http://localhost:465',
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    "Content-Type": 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({fullName: this.fullName,
                        email: this.email,
                        program: this.program,
                        year: this.year,
                        GPA: this.GPA,
                        aiInterest: this.aiInterest,
                        clubKnowledge: this.clubKnowledge,
                        clubInterest: this.clubInterest,
                        LinkedIn: this.LinkedIn,
                        GitHub: this.GitHub,
                        //CV: this.CV,
                    })
            })*/
            let application = {    
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                program: this.program,
                year: this.year,
                GPA: this.GPA,
                aiInterest: this.aiInterest,
                clubKnowledge: this.clubKnowledge,
                clubInterest: this.clubInterest,
                LinkedIn: this.LinkedIn,
                GitHub: this.GitHub,
                //CV: this.CV,
            }
            //console.log(application)
            const firestore = getFirestore()
            try {
                const applicationDoc = doc(firestore, `memberApplications/${application.email}`)
                setDoc(applicationDoc, application)
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            this.firstName = "";
            this.lastName = "";
            this.phone = "";
            this.email = "";
            this.program = "";
            this.year = "";
            this.GPA = "";
            this.aiInterest = "";
            this.clubKnowledge = "";
            this.clubInterest = "";
            this.LinkedIn = "";
            this.GitHub = "";
            
            //})
        }
    }
   } 
}
</script>


<style scoped>
input {border:0;outline:0;}
input:focus {outline:none!important;}
input::placeholder {
    opacity: 0.5;
    color: gray;
    font-size: 1.5vh;
}
textarea {
  width: 100%;
}

@media (min-aspect-ratio: 1/1){
  .contact-us {
    font-family: "Inter";
    font-size: 4vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
  .flex-wrapper-seven {
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .bottom-bar {
    background-color: rgba(0, 0, 0, 1);
    margin-bottom: 0%;
    padding-left: 30%;
    padding-right: 30%;
    position: relative;
  }
}
@media (max-aspect-ratio: 1/1){
  .contact-us {
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 0%;
    text-align: center;
  }
  .flex-wrapper-seven {
      margin-right: 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
  }
  .bottom-bar {
    background-color: rgba(0, 0, 0, 1);
    margin-bottom: 0%;
    padding-left: 30%;
    padding-right: 30%;
    position: relative;
  }
}


@media (min-aspect-ratio: 1/1){
  .emoji{
    position: absolute; 
    left: 43%; 
    top: 20%; 
    font-size: 3vh
  }
}
@media (max-aspect-ratio: 1/1){
  .emoji{
    position: absolute; 
    left: 60%; 
    top: 20%; 
    font-size: 5vw;
  }
}

@media (min-aspect-ratio: 1/1){
  .d-emoji{
    position: absolute; 
    left: 43%; 
    top: 17%; 
    font-size: 3vh
  }
}
@media (max-aspect-ratio: 1/1){
  .d-emoji{
    position: absolute; 
    left: 60%; 
    top: 20%; 
    font-size: 5vw;
  }
}

@media (min-aspect-ratio:21/10){
    .blur {
      font-family: "Inter";
      font-size: 2vh;
      width: 25%;
      height: 100%;
      font-weight: 500;
      line-height: normal;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      margin-bottom: 0%;
      margin-left: 37.5%;
      margin-right: 37.5%;
      margin-top: 2%;
      padding-top: 0.3%;
      /* identical to box height */
      align-items: center;
      text-align: center;
      color: #363636;
      text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
      backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
      border-radius: 20px;
    }
}
@media (max-aspect-ratio:21/10) and (min-aspect-ratio: 18/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 30%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 35%;
    margin-right: 35%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:18/10) and (min-aspect-ratio: 16/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 35%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 32.5%;
    margin-right: 32.5%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:16/10) and (min-aspect-ratio: 14/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 40%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 30%;
    margin-right: 30%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:14/10) and (min-aspect-ratio: 13/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 45%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 27.5%;
    margin-right: 27.5%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:13/10) and (min-aspect-ratio: 12/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 50%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 25%;
    margin-right: 25%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:12/10) and (min-aspect-ratio: 11/10){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 55%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 22.5%;
    margin-right: 22.5%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:11/10) and (min-aspect-ratio: 1/1){
  .blur {
    font-family: "Inter";
    font-size: 1.5vh;
    width: 60%;
    height: 100%;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 20%;
    margin-right: 20%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    color: #363636;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio: 1/1){
  .blur {
      font-family: "Inter";
      font-size: 1.5vw;
      width: 60%;
      height: 100%;
      font-weight: 500;
      line-height: normal;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      margin-bottom: 0%;
      margin-left: 20%;
      margin-right: 20%;
      margin-top: 2%;
      padding-top: 1%;
      /* identical to box height */
      align-items: center;
      text-align: center;
      color: #363636;
      text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
      backdrop-filter: blur(10px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
  }
}

@media (min-aspect-ratio: 1/1){
  .bubblepos-1{
    text-align: left;
    padding: 1% 1% 1% 1%; 
    margin-left: 25%; 
    width: 20%; 
    border: 1px solid white
  }
  .bubblepos-2{
    text-align: left; 
    padding: 1% 1% 1% 1%; 
    margin-left: 50%; 
    width: 20%; 
    border: 1px solid white
  }
  .bubblepos-3{
    text-align: left; 
    padding: 1% 1% 1% 1%; 
    margin-left: 20%; 
    width: 20%; 
    border: 1px solid white
  }
}
@media (max-aspect-ratio: 1/1){
  .bubblepos-1{
    font-size: 3vw;
    text-align: left;
    padding: 2% 2% 2% 2%; 
    margin-left: 5%; 
    width: 60%; 
    border: 1px solid white;
    backdrop-filter: blur(15px);
  }
  .bubblepos-2{
    font-size: 3vw;
    text-align: left; 
    padding: 2% 2% 2% 2%; 
    margin-left: 30%;
    margin-top: 20%; 
    width: 60%;  
    border: 1px solid white;
    backdrop-filter: blur(50px);
  }
  .bubblepos-3{
    font-size: 3vw;
    text-align: left; 
    padding: 2% 2% 2% 2%; 
    margin-left:10%;
    margin-top: 20%; 
    width: 60%;  
    border: 1px solid white;
    backdrop-filter: blur(30px);
  }
}

.d-join-us-three {
  width: 100%;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.d-flex-wrapper-four {
  border: 2px solid gray;
  background-color: #242424;
  color: white;
}
@media (min-aspect-ratio: 1/1){
  .d-join-us-two {
    font-family: "Cinzel";
    font-size: 10vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    position: relative;
    width: 100%;
    margin-top: 5%;
    margin-bottom: 5%;
  }
}
@media (max-aspect-ratio: 1/1){
  .d-join-us-two {
    font-family: "Cinzel";
    font-size: 10vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    position: relative;
    width: 100%;
    margin-top: 30%;
    margin-bottom: 5%;
  }
}
.d-your-name {
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: white;
  background-color: #242424;
  margin-top: 5%;
}
.d-flex-wrapper-one {
  padding: 2% 0 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid gray;
  background-color: #242424;
  color: white;
  width: 100%;
}
.d-first-name {
  font-family: "Inter";
  font-size: 1.5vh;
  font-weight: 200;
  line-height: normal;
  color: white;
}
.d-flex-wrapper-two {
  padding: 2% 28% 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid gray;
  background-color: #242424;
  color: white;
  margin-left: 4%;
}
.d-flex-wrapper-five {
  margin-top: 5%;
  background-size: 80%;
  background-position: right;
  background-image: url("../assets/jeff-hardi-LkPTJo7u6O8-unsplash\ \(2\).png");
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-color: #242424;
}
.d-flex-wrapper-six {
  background: linear-gradient(
    180deg,
    #242424 0%,
    rgba(207,207,207,1) 50%
  );
  margin-top: 3%;
  padding: 4% 10% 0% 0%;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.d-become-a-part-of-our-club-participate-i {
  height: 100%;
  width: 35%;
  padding-left: 15%;
  padding-top: 10%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: gray;
  display: flex;
  align-items: center;
  background-color: #242424;
  color: white;
}
.d-flex-wrapper-three {
  padding: 2% max(68%) 2% 3%;
  align-items: center;
  border: 2px solid gray;
  width: 100%;
  background-color: #242424;
  color: white;
}



.form {
  margin-right: 15%;
  margin-left: 15%;
  width: 70%;
  padding: 0 3px 0 3px;
}
.join-us-three {
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.relative-wrapper-one {
  position: relative;
}
.flex-wrapper-four {
  border: 2px solid gray;
}
@media (min-aspect-ratio: 1/1){
  .join-us-two {
    font-family: "Cinzel";
    font-size: 10vh;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    position: relative;
    width: 100%;
    margin-top: 0%;
    margin-bottom: 5%;
  }
}
@media (max-aspect-ratio: 1/1){
  .join-us-two {
    font-family: "Cinzel";
    font-size: 10vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    position: relative;
    width: 100%;
    margin-top: 0%;
    margin-bottom: 5%;
  }
}
.group-17 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

}
.your-name {
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: gray;
  margin-top: 5%;
}
.flex-wrapper-one {
  padding: 2% 0 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid gray;
  width: 100%;
}
.first-name {
  font-family: "Inter";
  font-size: 1.5vh;
  font-weight: 200;
  line-height: normal;
  color: rgba(0, 0, 0, 0.3);
}
.flex-wrapper-two {
  padding: 2% 28% 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid gray;
  margin-left: 4%;
}
@media(min-aspect-ratio: 1/1){
  .flex-wrapper-five {
    background-size: 100%;
    background-position: center;
    background-image: url("https://static.overlay-tech.com/assets/5a0d0b7d-cd26-48e7-ab12-c32c44a0620a.png");
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat
  }
}
@media(max-aspect-ratio: 1/1){
  .flex-wrapper-five {
    background-size: 175%;
    background-position: center;
    background-image: url("https://static.overlay-tech.com/assets/5a0d0b7d-cd26-48e7-ab12-c32c44a0620a.png");
    position: relative;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat
  }
}
.rectangle-31 {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.flex-wrapper-six {
  width: 100%;
  height: 10vh;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,1) 20%,
    rgba(209, 209, 209) 100%
  );
  margin-top: 5%;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.become-a-part-of-our-club-participate-i {
  height: 100%;
  width: 35%;
  padding-left: 15%;
  padding-top: 10%;
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: gray;
  display: flex;
  align-items: center;
}
.group-16 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.flex-wrapper-three {
  padding: 2% max(68%) 2% 3%;
  align-items: center;
  border: 2px solid gray;
  width: 100%;
}
.group-15 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%
}
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
</style>
