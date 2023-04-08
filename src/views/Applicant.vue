<template>
    <div class="applicant-page">
        <router-link style="position: relative; left: 1%; padding-top: 5%; font-size: 2.5vh; width: 100%; z-index: 99; display: flex" to="/viewApplications">Applications</router-link>
        <div>
            <b-container fluid style="text-align: left; margin-left: 0%; margin-top: 50%; width: 100%; font-size: 2.5vh; left: 0; top: -70%; position: absolute">  
                <h1 style="font-size: 2.5vh">First name: {{ applications[index]['firstName'] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Last name: {{ applications[index]["lastName"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Email: {{ applications[index]["email"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Program: {{ applications[index]["program"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Year: {{ applications[index]["year"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">GPA: {{ applications[index]["GPA"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">AI Interest: {{ applications[index]["aiInterest"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Club Knowledge: {{ applications[index]["clubKnowledge"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh">Club Interest: {{ applications[index]["clubInterest"] }} </h1>
                <h1 style="margin-top:2%; font-size: 2.5vh; display: inline">GitHub: </h1><a style="" :href="'//'+`${applications[index]['LinkedIn']}`" targer="_blank">{{ applications[index]["LinkedIn"] }}</a><br>
                <h1 style="margin-top:2%; font-size: 2.5vh; display: inline">LinkedIn: </h1><a style="margin-top:2%; font-size: 2.5vh;" :href="'//'+`${applications[index]['GitHub']}`" targer="_blank">{{ applications[index]["GitHub"] }}</a><br>
                <h1 style="margin-top:2%; font-size: 2.5vh; display: inline; cursor: pointer; text-decoration: underline;" @click="showAcceptPrompt=true">Accept</h1>
                <h1 style="margin-top:2%; font-size: 2.5vh; display: inline; margin-left: 2%; cursor: pointer; text-decoration: underline;" @click="showRejectPrompt=true">Reject</h1>
            </b-container>
        </div>
        <div v-if="showAcceptPrompt || showRejectPrompt" class="bg-blur">
            <div class="are-you-sure" style="position: absolute">
                <div v-if="showAcceptPrompt">
                    <h1 style="text-align: center; margin-top: 15%; margin-bottom: 10%;">Are you sure you want to accept this applicant as a club member?</h1>
                    <h1 @click="acceptMember()" style="display: inline; margin-left: 40%; margin-right: 10%; text-decoration: underline; cursor: pointer;">Yes</h1>
                    <h1 @click="showAcceptPrompt=false" style="display: inline; text-decoration: underline; cursor: pointer;">No</h1>
                </div>
                <div v-if="showRejectPrompt">
                    <h1 style="text-align: center; margin-top: 15%; margin-bottom: 10%;">Are you sure you want to reject this applicant?</h1>
                    <h1 @click="rejectMember()" style="display: inline; margin-left: 40%; margin-right: 10%; text-decoration: underline; cursor: pointer;">Yes</h1>
                    <h1 @click="showAcceptPrompt=false" style="display: inline; text-decoration: underline; cursor: pointer;">No</h1>
                </div>
            </div>
        </div>
    </div>
</template>
 
<script>
import { collection, query, where, setDoc, getDocs, getFirestore, deleteDoc, doc } from "firebase/firestore";
const firestore = getFirestore()
import { db } from '@/firebase'
import axios from 'axios';
export default {
    data() {
        return {
        applications: [],
        index: 0,
        showAcceptPrompt: false,
        showRejectPrompt: false,
        currentTime: "",
        }
    },
    methods: {
        acceptMember(){
            axios.get('https://worldtimeapi.org/api/timezone/Europe/Istanbul')
            .then(response => {
                const utcTime = new Date(response.data.utc_datetime);
                const offset = 0;
                const localTime = new Date(utcTime.getTime() + offset * 60 * 60 * 1000);
                this.currentTime = localTime.toLocaleString("en-us", {timeZone: 'Europe/Istanbul', dateStyle: 'long', timeStyle: 'medium'});
                try {
                    let application = this.applications[this.index];
                    application.admin = false;
                    application.hasGPT4Access = false;
                    application.registered = false;
                    application.memberSince = this.currentTime
                    const applicationDoc = doc(firestore, `members/${application.email}`)
                    setDoc(applicationDoc, application).then(() => {
                        deleteDoc(doc(db, "memberApplications", application.email)).then(() => {
                            this.showAcceptPrompt=false;
                        });
                    })
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })
            .catch(error => {
                console.error(error);
            });
        },
        rejectMember(){
            try {
                const applicationDoc = doc(firestore, `rejectedMembers/${this.applications[this.index].email}`)
                setDoc(applicationDoc, this.applications[this.index]).then(() => {
                    deleteDoc(doc(db, "memberApplications", this.applications[this.index].email)).then(() => {
                        router.push("/applicant")
                    });
                })
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
    },
    mounted() {
        this.index = this.$route.params.id;
        const q = query(collection(db, "memberApplications"));
        const applications = [];

        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            if(doc.id!="cneSYPTbfhSuZPnXOl51"){applications.push({ id: doc.id, ...doc.data() });}
            });

            this.applications = applications;
        });
    }
}
</script>

<style scoped>
  .applicant-page {
    background-color: white;
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: 100%;
  }
  .bg-blur{
    position: fixed;
    width: 100vw;
    height: 100vh;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 100;
}
.are-you-sure{
    width: 80%; 
    margin: 5% 10% 10% 10%; 
    height: 80%; 
    background: #F8F8F8; 
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
  }
</style>