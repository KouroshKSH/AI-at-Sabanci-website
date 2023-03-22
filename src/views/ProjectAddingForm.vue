<template>
    <!--<div>
        <router-link style="position: absolute; left: 1%; top: 3%; font-size: 3vh" to="/projects">Projects</router-link>
        <div style="float: left; text-align: left; margin-left: 5%; font-size: 1.5vh; margin-top: 5%">
            <label style="margin-top: 3%" for="name">Project Name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="name" v-model="name" /><br>
            <h3 v-if="showNameAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project.</h3>
            <label style="margin-top: 3%" for="field">Project field </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="field" v-model="field" /><br>
            <h3 v-if="showFieldAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the field of AI the project covers..</h3>
            <label style="margin-top: 3%" for="abstract">Abstract </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="abstract" v-model="abstract" /><br>
            <h3 v-if="showAbstractAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the abstract of the project.</h3>
            <label style="margin-top: 3%" for="description">Description </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="description" v-model="description" /><br>
            <h3 v-if="showDescriptionAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a description of the project.</h3>
            <label style="margin-top: 3%" for="leader">Project Leader name </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="leader" v-model="projectLeader" /><br>
            <h3 v-if="showLeaderAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project leader.</h3>
            <label style="margin-top: 3%" for="mail">Project Leader email </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="mail" v-model="projectLeaderEmail" /><br>
            <h3 v-if="showLeaderEmailAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the email address of the project leader.</h3>
            <label style="margin-top: 3%" for="phone">Project Leader phone </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="phone" v-model="projectLeaderPhone" /><br>
            <h3 v-if="showLeaderPhoneAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the phone number of the project leader.</h3>
            <label style="margin-top: 3%" for="members">Members (seperated by a ","): </label>
            <input type="text" id="members" v-model="projectMembers" /><br>
            <label style="margin-top: 3%" for="goals">Goals (seperated by a ",") </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="goals" v-model="goals" /><br>
            <h3 v-if="showGoalsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the goals of the project.</h3>
            <label style="margin-top: 3%" for="github">GitHub Link </label><span style="color: red">*</span><span>:</span>
            <input type="text" id="github" v-model="githubLink" /><br>
            <h3 v-if="showGitHubLinkAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a GitHub link for the project.</h3>
            <label style="margin-top: 3%" for="CV">CV: </label>
            <input type="file" id="CV" ref="file" v-on:change="handleFileUpload()"/>
            <b-button @click="sendForm()">Submit</b-button>
        </div>
    </div>-->
    <div id="projectAddingForm">
        <div v-if="!darkMode">
          <b-container class="form" fluid style="overflow:hidden">
              <h1 class="project-proposal">Project Proposal</h1>
              <div class="group-16">
                  <p class="your-name">Project Name: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="name" class="flex-wrapper-three" />
                  <h3 v-if="showNameAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project.</h3>
                  <p class="your-name">Project Field: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="field" class="flex-wrapper-three" />
                  <h3 v-if="showFieldAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the field of AI the project covers.</h3>
                  <p class="your-name">Abstract: *</p>
                  <input type="text" v-model="abstract" class="flex-wrapper-three" />
                  <h3 v-if="showAbstractAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the abstract of the project.</h3>
                  <p class="your-name">Description: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="description" class="flex-wrapper-three" />
                  <h3 v-if="showDescriptionAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a description of the project.</h3>
                  <p class="your-name">Project Members (including self, seperated by (,)s): *</p>
                  <input type="text" v-model="projectMembers" class="flex-wrapper-three" />
                  <h3 v-if="showMembersAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the members of the project.</h3>
                  <p class="your-name">Project Goals (seperated by (,)s): *</p>
                  <input type="text" v-model="goals" class="flex-wrapper-three" />
                  <h3 v-if="showGoalsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the goals of the project.</h3>
                  <p class="your-name">GitHub: </p>
                  <input type="text" v-model="githubLink" class="flex-wrapper-three" placeholder="GitHub link" />
                  <h3 v-if="showGitHubLinkAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a GitHub link for the project.</h3>
              </div>
              <b-container fluid>
                  <b-row align-h="center">
                      <div class="submit-button" style="margin-top: 5%; margin-bottom: 5%">
                          <p @click="sendForm()" class="click-here">Submit</p>
                      </div>
                  </b-row>
              </b-container>
          </b-container>
        </div>
        <div v-else style="width: 100%; background-color: #242424;">
          <b-container class="d-form" fluid style="overflow:hidden;">
              <h1 class="d-project-proposal">Project Proposal</h1>
              <div class="d-group-16">
                  <p class="d-your-name">Project Name: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="name" class="d-flex-wrapper-three" />
                  <h3 v-if="showNameAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the name of the project.</h3>
                  <p class="d-your-name">Project Field: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="field" class="d-flex-wrapper-three" />
                  <h3 v-if="showFieldAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the field of AI the project covers.</h3>
                  <p class="d-your-name">Abstract: *</p>
                  <input type="text" v-model="abstract" class="d-flex-wrapper-three" />
                  <h3 v-if="showAbstractAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the abstract of the project.</h3>
                  <p class="d-your-name">Description: *</p>
                  <input style="width: 100%; height: 100%;" type="text" v-model="description" class="d-flex-wrapper-three" />
                  <h3 v-if="showDescriptionAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a description of the project.</h3>
                  <p class="d-your-name">Project Members (including self, seperated by (,)s): *</p>
                  <input type="text" v-model="projectMembers" class="d-flex-wrapper-three" />
                  <h3 v-if="showMembersAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the members of the project.</h3>
                  <p class="d-your-name">Project Goals (seperated by (,)s): *</p>
                  <input type="text" v-model="goals" class="d-flex-wrapper-three" />
                  <h3 v-if="showGoalsAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter the goals of the project.</h3>
                  <p class="d-your-name">GitHub: </p>
                  <input type="text" v-model="githubLink" class="d-flex-wrapper-three" placeholder="GitHub link" />
                  <h3 v-if="showGitHubLinkAlert" style="margin-top: 1%; color: red; font-size: 15px">Please enter a GitHub link for the project.</h3>
              </div>
              <b-container fluid>
                  <b-row align-h="center">
                      <div class="d-submit-button" style="margin-top: 5%; margin-bottom: 5%">
                          <p @click="sendForm()" class="d-click-here">Submit</p>
                      </div>
                  </b-row>
              </b-container>
          </b-container>
        </div>
        <b-container style="padding-bottom: 5%;" fluid class="bottom-bar">
            <div class="flex-wrapper-seven">
                  <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%"><p class="contact-us">Contact Us</p></div></router-link>
            </div>
            <a href="#projectAddingForm">  
              <img
                style="max-width:5%; position: absolute; right: 5%; cursor: pointer;"
                src="../assets/back to top.png"
              >
            </a>
        </b-container>
    </div>
</template>

<script>
import { collection, addDoc, getDoc, setDoc, getFirestore, doc } from "firebase/firestore"; 
import { db } from '../firebase'
export default {
   data() {
     return {
      adding: true,
      name: "",
      field: "",
      abstract: "",
      description: "",
      projectLeader: "",
      projectLeaderEmail: "",
      projectLeaderPhone: "",
      projectMembers: "",
      goals: "",
      githubLink: "",
      img: "",
      //CV: "",
      showNameAlert: false,
      showFieldAlert: false,
      showAbstractAlert: false,
      showDescriptionAlert: false,
      showLeaderAlert: false,
      showLeaderEmailAlert: false,
      showLeaderPhoneAlert: false,
      showGoalsAlert: false,
      showMembersAlert: false,
      showGitHubLinkAlert: false,
     }
     /* name: "Crime Detection System",
        field: "visual detection",
        abstract: "A visual detection system to identify possible criminal activities and report a human operator",
        description: "The goal of this project is to prepare a dataset made of images of lethal weapons and other criminal imagery such as explosions or bleeding. Once the dataset is prepared the AI will be trained to recognize such imagery and then tested for accuracy.",
        projectLeader: "Imam Alimsultanov",
        projectLeaderMail: "imam.alimsultanov@gmail.com",
        projectLeaderPhone: 2345678901,
        projectMembers: ["Imam Alimsultanov", "Imam Alimsultanov2", "Imam Alimsultanov3", "Imam Alimsultanov4"],
        goals: ["Make a dataset", "Train the AI", "Test the AI on images and videos", "Test the AI IRL"],
        goalCompletion: [0, 0, 0, 0],
        githubLink: "github.com/asxvzxzc",
        img
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
        if(this.name==""){this.showNameAlert=true; valid=false}
        else{this.showNameAlert=false}
        if(this.field==""){this.showFieldAlert=true; valid=false}
        else{this.showFieldAlert=false}
        if(this.abstract==""){this.showAbstractAlert=true; valid=false}
        else{this.showAbstractAlert=false}
        if(this.description==""){this.showDescriptionAlert=true; valid=false}
        else{this.showDescriptionAlert=false}
        if(this.projectLeader==""){this.showLeaderAlert=true; valid=false}
        else{this.showLeaderAlert=false}
        if(this.projectLeaderEmail==""){this.showLeaderEmailAlert=true; valid=false}
        else{this.showLeaderEmailAlert=false}
        if(this.projectLeaderPhone==""){this.showLeaderPhoneAlert=true; valid=false}
        else{this.showLeaderPhoneAlert=false}
        if(this.goals==""){this.showGoalsAlert=true; valid=false}
        else{this.showGoalsAlert=false}
        if(this.projectMembers==""){this.showMembersAlert=true; valid=false}
        else{this.showMembersAlert=false}
        if(this.githubLink==""){this.showGitHubLinkAlert=true; valid=false}
        else{this.showGitHubLinkAlert=false}
        if(valid){
            let projectMembers = this.projectMembers.split(",")
            let goals = this.goals.split(",")
            let goalCompletion = []
            for(let i = 0; i < this.goals.length; i++){goalCompletion.push(0)}
            let project = {
                name: this.name,
                field: this.field,
                abstract: this.abstract,
                description: this.description,
                projectLeader: this.projectLeader,
                projectLeaderEmail: this.projectLeaderEmail,
                projectLeaderPhone: this.projectLeaderPhone,
                projectMembers,
                goals,
                goalCompletion,
                githubLink: this.githubLink,
                img: this.img,
            }
            const firestore = getFirestore()
            if(this.adding){
                try {
                    const projectDoc = doc(firestore, `projects/${project.name}`)
                    setDoc(projectDoc, project)
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            else{
                try {
                    const projectDoc = doc(firestore, `projectProposals/${project.name}`)
                    setDoc(projectDoc, project)
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            this.name = "";
            this.field = "";
            this.abstract = "";
            this.description = "";
            this.projectLeader = "";
            this.projectLeaderEmail = "";
            this.projectLeaderPhone = "";
            this.projectMembers = "";
            this.goals = "";
            this.githubLink = "";
            this.img = "";
    }
   } 
}}
</script>
<style scoped>
input::placeholder {
    opacity: 0.5;
    color: gray;
    font-size: 1vh;
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



.d-project-proposal {
  margin-top: 5%;
  font-family: "Cinzel";
  font-size: 6vh;
  font-weight: 400;
  line-height: normal;
  color: white;
  background: #242424;
  text-align: center;
  position: relative;
  width: 100%;
}
.d-form {
  padding-right: 15%;
  padding-left: 15%;
  width: 70%;
  padding: 0 3px 0 3px;
  background-color: #242424;
}
.d-join-us-three {
  width: 100%;
  background-color: #242424;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.d-relative-wrapper-one {
  position: relative;
}
.d-flex-wrapper-four {
  border: 2px solid gray;
}
.d-join-us-two {
  font-family: "Cinzel";
  font-size: 6vh;
  font-weight: 400;
  line-height: normal;
  color: white;
  text-align: center;
  position: relative;
  width: 100%;
}
.d-group-17 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

}
.d-your-name {
  font-family: "Inter";
  font-size: 2vh;
  font-weight: 200;
  line-height: normal;
  color: white;
  margin-top: 5%;
}
.d-flex-wrapper-eight {
  display: flex;
  align-items: flex-start;
}
.d-flex-wrapper-one {
  padding: 2% 0 2% 3%;
  display: flex;
  align-items: center;
  border: 2px solid gray;
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
  border: 2px solid white;
  margin-left: 4%;
}
.d-flex-wrapper-five {
  background-size: 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/5a0d0b7d-cd26-48e7-ab12-c32c44a0620a.png");
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat
}
.d-rectangle-31 {
  width: 100%;
  height: 100%;
  position: relative;
}
.d-flex-wrapper-six {
  background: linear-gradient(
    180deg,
    rgba(255,255,255,1) 0%,
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
  color: white;
  display: flex;
  align-items: center;
}
.d-group-16 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.d-flex-wrapper-three {
  padding: 2% max(68%) 2% 3%;
  align-items: center;
  border: 2px solid gray;
  background-color: #242424;
  color: white;
  width: 100%;
}
.d-group-15 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%
}



.project-proposal {
  margin-top: 5%;
  font-family: "Cinzel";
  font-size: 6vh;
  font-weight: 400;
  line-height: normal;
  color: gray;
  text-align: center;
  position: relative;
  width: 100%;
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
.join-us-two {
  font-family: "Cinzel";
  font-size: 6vh;
  font-weight: 400;
  line-height: normal;
  color: gray;
  text-align: center;
  position: relative;
  width: 100%;
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
.flex-wrapper-eight {
  display: flex;
  align-items: flex-start;
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
.flex-wrapper-five {
  background-size: 100%;
  background-position: center;
  background-image: url("https://static.overlay-tech.com/assets/5a0d0b7d-cd26-48e7-ab12-c32c44a0620a.png");
  position: relative;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat
}
.rectangle-31 {
  width: 100%;
  height: 100%;
  position: relative;
}
.flex-wrapper-six {
  background: linear-gradient(
    180deg,
    rgba(255,255,255,1) 0%,
    rgba(207,207,207,1) 50%
  );
  margin-top: 3%;
  padding: 4% 10% 0% 0%;
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

