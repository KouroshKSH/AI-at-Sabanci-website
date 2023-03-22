<template>
    <div>
      
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <div v-if="!darkMode">
        <div class="wide-nav">  
          <div class="flex-wrapper-eight" style="backdrop-filter: blur(10px);">
              <div class="logo-two"><router-link to="/"><a class="logo">
                <img
                  src="./assets/fresh logo (1).png"
                  style="max-width: 30%; margin-left: 1%; margin-top: 1%"
                >
              </a></router-link></div>
              <b-container fluid class="header">
                <b-row align-self="center">
                  <b-col><router-link class="profile" to="/login"><p class="profile">Login</p></router-link></b-col>
                  <b-col><router-link to="/workshops"><p class="profile">Workshops</p></router-link></b-col>
                  <b-col><router-link class="profile" to="/projects"><p class="profile">Projects</p></router-link></b-col>
                  <b-col><router-link class="profile" to="/aboutUs"><p class="profile">Our Team</p></router-link></b-col>
                  <b-col><router-link class="profile" to="/events"><p class="profile">Events</p></router-link></b-col>
                  <b-col><router-link class="profile" to="/applicationForm"><p class="profile">Join Us!</p></router-link></b-col>
                </b-row>
                <b-row v-if="darkMode" class="header" @click="$store.commit('toggleDarkMode');">
                  <img
                    style="width: 5%; position: absolute; right: 3%; cursor: pointer;"
                    src="./assets/light toggle.png"
                  >
                </b-row>
                <b-row v-else class="header" @click="$store.commit('toggleDarkMode');">
                  <img
                    style="width: 5%; position: absolute; right: 3%; cursor: pointer;"
                    src="./assets/dark toggle.png"
                  >
                </b-row>
              </b-container>
          </div>
        </div>
        <div class="notwide-nav" style="position: fixed; z-index: 9; width: 100%">
            <div class="hamburger" ><router-link to="/"><a class="logo">
              <img
                src="./assets/logo square (1).png"
                style="max-width: 25%; float: left; margin-left: 5%; margin-top: 5%;"
              >
            </a></router-link></div>
                <img
                  class="AI"
                  src="./assets/Vector (4).png"
                  style="max-width: 30%; position: fixed; margin-left: 35%; margin-right: 35%; margin-top: 5%;"
                >
            
            <b-container fluid class="header">
              <b-row>
                <div class="hamburger">
                  <img
                    @click="showNav=true"
                    src="./assets/hamburger (2).png"
                    style="cursor: pointer; max-width: 50%; float: right; margin-top: -5%"
                  >
                </div>
              </b-row>
            </b-container>
        </div>
        <div v-if="showNav" class="nav-screen">
          <b-container fluid class="header">
            <b-row>
              <div class="hamburger" >
                <img
                  @click="showNav=false"
                  src="./assets/back button.png"
                  style="cursor: pointer; width: 15vw; float: right; margin-top: 5%;"
                >
              </div>
            </b-row>
          </b-container>
          <b-container fluid style="width: 60%; margin-right: 20%; margin-left: 20%">
            <b-row @click="showNav=false">
              <router-link to="/login">
                <div style="margin-top: 15%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Log In</h1>
                  <p style="float: right; display:inline; font-size: 5vw">👤</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/workshops">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Workshops</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🏛️</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/projects">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Projects</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🧩</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/aboutUs">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Our Team</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🇹🇷</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/events">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Events</h1>
                  <p style="float: right; display:inline; font-size: 5vw">⚡</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/applicationForm">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Join Us</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🫵</p>
                </div>
              </router-link>
            </b-row>
            <img
              src="./assets/dark theme button (2).png"
              style="max-width: 90%; margin-left: 5%; margin-right; 5%; margin-top: 5%"
              @click="$store.commit('toggleDarkMode');"
            >
          </b-container>
        </div>
      </div>
      <div v-else>
        <div class="wide-nav">  
          <div class="flex-wrapper-eight" style="backdrop-filter: blur(10px);">
              <div class="logo-two"><router-link to="/"><a class="logo">
                <img
                  src="./assets/dark logo.png"
                  style="max-width: 30%; margin-left: 1%; margin-top: 1%"
                >
              </a></router-link></div>
              <b-container fluid class="header">
                <b-row align-self="center">
                  <b-col><router-link class="d-profile" to="/login"><p class="d-profile">Login</p></router-link></b-col>
                  <b-col><router-link class="d-profile" to="/workshops"><p class="d-profile">Workshops</p></router-link></b-col>
                  <b-col><router-link class="d-profile" to="/projects"><p class="d-profile">Projects</p></router-link></b-col>
                  <b-col><router-link class="d-profile" to="/aboutUs"><p class="d-profile">Our Team</p></router-link></b-col>
                  <b-col><router-link class="d-profile" to="/events"><p class="d-profile">Events</p></router-link></b-col>
                  <b-col><router-link class="d-profile" to="/applicationForm"><p class="d-profile">Join Us!</p></router-link></b-col>
                </b-row>
                <b-row v-if="darkMode" class="header" @click="$store.commit('toggleDarkMode');">
                  <img
                    style="width: 5%; position: absolute; right: 3%; cursor: pointer;"
                    src="./assets/light toggle.png"
                  >
                </b-row>
                <b-row v-else class="header" @click="$store.commit('toggleDarkMode');">
                  <img
                    style="width: 5%; position: absolute; right: 3%; cursor: pointer;"
                    src="./assets/dark toggle.png"
                  >
                </b-row>
              </b-container>
          </div>
        </div>
        <div class="notwide-nav" style="position: fixed; z-index: 9; width: 100%">
            <div class="hamburger" ><router-link to="/"><a class="logo">
              <img
                src="./assets/Vector (2).png"
                style="max-width: 25%; float: left; margin-left: 5%; margin-top: 5%;"
              >
            </a></router-link></div>
              <img
                class="AI"
                src="./assets/Vector (5).png"
                style="max-width: 30%; position: fixed; margin-left: 35%; margin-right: 35%; margin-top: 5%;"
              >
            <b-container fluid class="header">
              <b-row>
                <div class="hamburger">
                  <img
                    @click="showNav=true"
                    src="./assets/hamburger (1).png"
                    style="cursor: pointer; max-width: 50%; float: right; margin-top: -5%"
                  >
                </div>
              </b-row>
            </b-container>
        </div>
        <div v-if="showNav" class="nav-screen">
          <b-container fluid class="header">
            <b-row>
              <div class="hamburger" >
                <img
                  @click="showNav=false"
                  src="./assets/back button.png"
                  style="cursor: pointer; width: 15vw; float: right; margin-top: 5%;"
                >
              </div>
            </b-row>
          </b-container>
          <b-container fluid style="width: 60%; margin-right: 20%; margin-left: 20%">
            <b-row @click="showNav=false">
              <router-link to="/login">
                <div style="margin-top: 15%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Log In</h1>
                  <p style="float: right; display:inline; font-size: 5vw">👤</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/workshops">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Workshops</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🏛️</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/projects">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Projects</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🧩</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/aboutUs">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Our Team</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🇹🇷</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/events">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Events</h1>
                  <p style="float: right; display:inline; font-size: 5vw">⚡</p>
                </div>
              </router-link>
            </b-row>
            <b-row @click="showNav=false">
              <router-link to="/applicationForm">
                <div style="margin-top: 3%" class="nav-element">
                  <h1 style="margin: 0; display:inline; color: white; width:50%;" class="nav-element">Join Us</h1>
                  <p style="float: right; display:inline; font-size: 5vw">🫵</p>
                </div>
              </router-link>
            </b-row>
            <img
              src="./assets/dark theme button (1).png"
              style="max-width: 100%"
              @click="$store.commit('toggleDarkMode');"
            >
          </b-container>
        </div>
      </div>
      <router-view/>
    </div>
 
</template>

<script>
//Vue.prototype.$darkMode = false;
export default {
  data(){
    return{
      showNav: false,
    }
  },
  computed: {
    darkMode: function() {
      return this.$store.state.darkMode;
    },
    isHome: function() {
      return this.$route.name == "/#/"
    } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#d-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.contact-us {
    font-family: "Inter";
    font-size: 4vh;
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
  margin-bottom: 5%;
  padding-left: 30%;
  padding-right: 30%;
  position: relative;
}
@media (min-aspect-ratio: 1/1){
  .AI{
    display: none;
  }
  .nav-screen{
    display: none;
  }
  .notwide-nav{
    width:0px;
    height:0px
  }
  .flex-wrapper-eight {
    margin-bottom: 0%;
    padding: 0 0 0 0%;
    display: flex;
    align-items: flex-start;
    position: fixed; 
    z-index: 9; 
    width: 100%
  }
  .profile {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 300;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    margin-right: 0%;
    width:100%;
  }
  .d-profile {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 300;
    line-height: normal;
    color: white;
    text-align: center;
    margin-right: 0%;
    width:100%;
  }
  .logo-three{
    width:0;
  }
  .hamburger{
    display: none;
  }
}
@media (max-aspect-ratio: 1/1){
  .notwide-nav{
    margin-bottom: 0%;
    padding: 0 0 0 0%;
    display: flex;
    align-items: flex-start;
  }
  .flex-wrapper-eight {
    display: none;
  }
  .profile {
    width: 0px;
    height: 0px;
  }
  .logo-two {
    width: 0;
    margin-right: 45%;
    position: relative;
  }
  .logo-three{
    width:20%;
    margin-left: 2%;
    margin-top:1%;
  }
  .hamburger{
    width: 100%;
    padding: 0 0 0 0;
  }
  .nav-screen{
    position: fixed;
    width: 100vw;
    height: 100vh;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
  }
}
.nav-element{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 5vw;
}
.header {
  margin-top: 13px;
  width: 100%;
  float: right;
}
.logo-two {
  margin-right: 15%;
  position: relative;
}
.logo-three{
  width:4%;
}
#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
