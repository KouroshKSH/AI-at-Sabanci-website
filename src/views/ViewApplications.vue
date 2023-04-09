<template>
    <div v-if="$store.state.user.admin">
        <div style="margin-top: 0%; width: 100%">
            <h1 style="position:relative; margin-top:10%; float: left; margin-left: 5%; font-size: 5vh">Member Applications:</h1>
            <h1 style="margin-top:50%; margin-left: 30%; width: 100%; display: flex;" v-if="applications.length==0">There are no member applications</h1>
            <b-table v-else style="text-align: left; position: relative; width: 90%; left: 5%; top: 15%" :items="applications" :fields="fields" :keys="keys">
                <template #cell(firstName)="applications">
                    <router-link :to="`/applicant/${applications.index}`">{{ applications.item.firstName + " " + applications.item.lastName }}</router-link>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '@/firebase'
export default {
    data(){
        return{
            isAdmin: this.$store.getters.isAdmin,
            applications: ["a"],
            fields: [{key: "firstName", label: "Full Name"}, "email", "program", "year", "GPA"],
        }   
    },
    mounted(){
        const q = query(collection(db, "memberApplications"));
        const applications = [];

        getDocs(q).then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            if(doc.id!="cneSYPTbfhSuZPnXOl51"){applications.push({ id: doc.id, ...doc.data() })};
            });

            this.applications = applications;
            console.log(applications)
        });
    }
}
</script>