<template>
    <div> 
        <div v-if="!darkMode">   
            <div class="form">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <b-container fluid align-y="center">
                <b-row style="padding-top:5%" align-self="center" class="log-in-two">
                    <p class="your-account">Contact Us</p>
                    <p class="welcome-back">Feel free to write us an email regarding any of your inquiries.</p>
                    <div style="padding: 0 0 0 0">
                    <div style="z-index: 2; display: flex; flex-direction: column; align-items: flex-start; position: relative; margin-top: 3%; padding: 0 0 0 0">
                        <div style="display: flex; align-items: flex-start; width: 100%; padding: 0 0 0 0">
                        <input class="flex-wrapper-one" v-model="firstName" placeholder="First Name" />
                        <input style="margin-left: 5%" class="flex-wrapper-one" v-model="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    </div>
                    <b-row>
                        <h3 v-if="showFirstNameAlert" class="warning" style="margin-left: 0%; width:50%">Please enter your first name.</h3>
                        <h3 v-if="showLastNameAlert" class="warning" style="margin-left: 3%; width:45%">Please enter your last name.</h3>
                    </b-row>
                    <input class="group-16" v-model="email" placeholder="Email" />
                    <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
                    <input class="group-17" v-model="subject" placeholder="Subject" />
                    <textarea cols="140" rows="5" v-model="message" class="flex-wrapper-four" placeholder="Message"></textarea>
                    <h3 v-if="showMessageAlert" class="warning">Please write your message here.</h3>
                    <div style="margin-top: 5%; margin-bottom: 3%;" @click="sendForm()" class="submit-button">
                        <p style="text-align: center" class="click-here">Submit</p>
                    </div>
                    <div class="relative-wrapper-one">
                    </div>
                </b-row>
            </b-container>
            </div>
        </div>
        <div v-else style="background-color: #242424; width: 100%; min-height: 100vh">
            <div class="form">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <b-container fluid align-y="center">
                <b-row style="padding-top:5%" align-self="center" class="d-log-in-two">
                    <p class="d-your-account">Contact Us</p>
                    <p class="d-welcome-back">Feel free to write us an email regarding any of your inquiries.</p>
                    <div style="padding: 0 0 0 0">
                    <div style="z-index: 2; display: flex; flex-direction: column; align-items: flex-start; position: relative; margin-top: 3%; padding: 0 0 0 0">
                        <div style="display: flex; align-items: flex-start; width: 100%; padding: 0 0 0 0">
                        <input class="d-flex-wrapper-one" v-model="firstName" placeholder="First Name" />
                        <input style="margin-left: 5%" class="d-flex-wrapper-one" v-model="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    </div>
                    <b-row>
                        <h3 v-if="showFirstNameAlert" class="warning" style="margin-left: 0%; width:50%">Please enter your first name.</h3>
                        <h3 v-if="showLastNameAlert" class="warning" style="margin-left: 3%; width:45%">Please enter your last name.</h3>
                    </b-row>
                    <input class="d-group-16" v-model="email" placeholder="Email" />
                    <h3 v-if="showEmailAlert" class="warning">Please enter your email address.</h3>
                    <input class="d-group-17" v-model="subject" placeholder="Subject" />
                    <textarea cols="140" rows="5" v-model="message" class="d-flex-wrapper-four" placeholder="Message"></textarea>
                    <h3 v-if="showMessageAlert" class="warning">Please write your message here.</h3>
                    <div style="margin-top: 5%; margin-bottom: 3%;" @click="sendForm()" class="d-submit-button">
                        <p style="text-align: center" class="d-click-here">Submit</p>
                    </div>
                    <div class="relative-wrapper-one">
                    </div>
                </b-row>
            </b-container>
            </div>
        </div>
    </div>
</template>

<script>
import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
import { db } from '../firebase'
export default {
    data(){
        return{
            firstName: "",
            lastName: "",
            email: "",
            subject: "",
            message: "",
            showFirstNameAlert: false,
            showLastNameAlert: false,
            showEmailAlert: false,
            showMessageAlert: false,
            inquiries: [],
        }
    },
    methods: {
        sendForm(){
            let valid = true
            if(this.firstName==""){this.showFirstNameAlert=true; valid=false}
            else{this.showFirstNameAlert=false}
            if(this.lastName==""){this.showLastNameAlert=true; valid=false}
            else{this.showLastNameAlert=false}
            if(!this.email.includes(".") || !this.email.includes("@")){this.showEmailAlert=true; valid=false}
            else{this.showEmailAlert=false}
            if(this.message==""){this.showMessageAlert=true; valid=false}
            else{this.showMessageAlert=false}
            if(valid){
              const firestore = getFirestore()
              try {
                const collectionRef = db.collection('contactUsEnquiries');
                const snapshot = collectionRef.count().get();
                console.log(snapshot.data().count);
                  const applicationDoc = doc(firestore, `contactUsEnquiries/${this.email}`)
                  setDoc(applicationDoc, {firstName: this.firstName, lastName: this.lastName, email: this.email, subject: this.subject, message: this.message})
              } catch (e) {
                  console.error("Error adding document: ", e);
              }
            }
        }
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
}
</script>

<style scoped>
input::placeholder {
    opacity: 0.5;
    color: gray;
    font-size: 1.5vh;
}
textarea {
  width: 100%;
}
.form {
  margin-right: 15%;
  margin-left: 15%;
  width: 70%;
  padding: 0 3px 0 3px;
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

@media (min-aspect-ratio: 1/1){
    .d-flex-wrapper-one {
        padding: 2% 0 2% 3%;
        display: flex;
        align-items: center;
        border: 2px solid gray;
        background-color: #242424;
        color: white;
        width: 100%
    }
  .d-log-in-two {
    background-color: #242424;
    padding: 0px 0 0;
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
    margin-top: 5%;
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
    background-color: #242424;
    color: white;
    margin-top: 3%;
    max-width: 100%;
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
    background-color: #242424;
    color: white;
    margin-top: 2%;
    max-width: 100%;
  }
  .d-flex-wrapper-four {
    padding-top: 1%;
    padding-left: 1%;
    margin-top: 3%;
    border: 2px solid gray;
    background-color: #242424;
    color: white;
  }
  .d-flex-wrapper-four::placeholder{
    opacity: 0.5;
    color: white;
    font-size: 1.5vh;
  }
}
@media (max-aspect-ratio: 1/1){
    .d-flex-wrapper-one {
        padding: 2% 0 2% 3%;
        display: flex;
        align-items: center;
        border: 2px solid gray;
        background-color: #242424;
        color: white;
        width: 100%
    }
  .d-log-in-two {
    background-color: #242424;
    padding: 0px 0 0;
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
    margin-top: 25%;
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
    background-color: #242424;
    color: white;
    margin-top: 3%;
    max-width: 100%;
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
    background-color: #242424;
    color: white;
    margin-top: 2%;
    max-width: 100%;
  }
  .d-flex-wrapper-four {
    padding-top: 1%;
    padding-left: 1%;
    margin-top: 3%;
    border: 2px solid gray;
    background-color: #242424;
    color: white;
  }
  .d-flex-wrapper-four::placeholder{
    opacity: 0.5;
    color: white;
    font-size: 1.5vw;
  }
}

@media (min-aspect-ratio: 1/1){
    .flex-wrapper-one {
        padding: 2% 0 2% 3%;
        display: flex;
        align-items: center;
        border: 2px solid rgba(225, 225, 225, 1);
        width: 100%
    }
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vh;
    margin-left: 0%;
    width: 70%;
  }
  .log-in-two {
    background-color: white;
    padding: 0px 0 0;
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
    margin-top: 5%;
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
    max-width: 100%;
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
    max-width: 100%;
  }
  .flex-wrapper-four {
    padding-top: 1%;
    padding-left: 1%;
    margin-top: 3%;
    border: 2px solid rgba(225, 225, 225, 1);
  }
  .flex-wrapper-four::placeholder{
    opacity: 0.5;
    color: gray;
    font-size: 1.5vh;
  }
}
@media (max-aspect-ratio: 1/1){
    .flex-wrapper-one {
        padding: 2% 0 2% 3%;
        display: flex;
        align-items: center;
        border: 2px solid rgba(225, 225, 225, 1);
        width: 100%
    }
  .warning {
    margin-top: 1%;
    color: red; 
    font-size: 1vw;
    margin-left: 0%;
    width: 70%;
  }
  .log-in-two {
    background-color: white;
    padding: 0px 0 0;
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
    margin-top: 25%;
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
    max-width: 100%;
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
    max-width: 100%;
  }
  .flex-wrapper-four {
    padding-top: 1%;
    padding-left: 1%;
    margin-top: 3%;
    border: 2px solid rgba(225, 225, 225, 1);
  }
  .flex-wrapper-four::placeholder{
    opacity: 0.5;
    color: gray;
    font-size: 1.5vw;
  }
}
</style>