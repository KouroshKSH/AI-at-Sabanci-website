<template>
      <div id="#">
        <title>IntelliMind</title>
        <div v-if="!darkMode" class="landing-page" style="width: 100%; z-index: 1;">
            <b-container fluid class="flex-wrapper-five" style="height: auto">
              <b-row align-h="" style="width: 100%; margin-left: 0;">
                <div class="AIatSabancihas"> 
                      IntelliMind has been selected as 
                      one of the pilot members of
                      <br><div class="nvidias">NVIDIA’s</div> Student Network initiative!
                </div><br>
                <a class="announcements" href="https://developer.nvidia.com/student-network" target="blank">Read More</a>
                <router-link class="wantToTryChatSU" to="/aiChatbox">Want to try ChatSU?</router-link>
                <img
                  @click="scrollDown()"
                  style="max-width: 5%; height: 5%; margin-top: 15%; cursor: pointer"
                  src="../assets/Union (2).png"
                >
                    <!--<div class="ai-sabanci-wrapper">
                        <a>
                          <img
                            src="../assets/Vector.png"
                            class="ai-sabanci"
                          >
                        </a>
                        <div class="where-dreams-come-true-baby" style="text-align: center;">
                          <router-link style="text-decoration: none" to="/aiChatBox"><p style="color: black; margin: 0; display:inline;">Want to try out our&nbsp;</p><p style="color: black; margin: 0; display:inline; text-decoration: underline;">chat-bot</p><p style="color: black; margin: 0; display:inline;">?</p></router-link>
                        </div>
                    </div>-->
              </b-row>
            </b-container>
            <div class="rectangle-92"></div>
            <b-container fluid class="flex-wrapper-six" style="width: 100%">
              <b-row align-h="center">
                <div class="flex-wrapper-nine">
                    <div class="workshops">
                      <p class="ai-workshops">AI Workshops</p>
                      <p
                          class="we-organize-workshops-regarding-deep-lea"
                      >
                          We organize workshops regarding Deep Learning,
                          High-performance computing, and similar topics,
                          where anyone can join and learn from our
                          esteemed lecturers.
                      </p>
                      <router-link to="/workshops"><p class="read-more">Read More</p></router-link>
                    </div>
                    <div class="workshops">
                      <p class="ai-workshops">AI Projects</p>
                      <p
                          class="in-our-club-a-number-of-ai-projects-are"
                      >
                          In our club, a number of AI projects are carried
                          out simultaneously, ranging from Machine
                          Learning to Bioinformatics.
                      </p>
                      <router-link to="/projects"><p class="read-more-two">Read More</p></router-link>
                    </div>
                </div>
              </b-row>
            </b-container>
            <div style="width: 100%;">
              <b-container fluid class="flex-wrapper-two">
                  <div class="flex-wrapper-three">
                      <div class="accomplish">
                        <p class="what-do-we-want-to-accomplish">
                            What Do We Want to Accomplish?
                        </p>
                        <p class="our-aim-is-to-expand-the-horizon-of-ai">
                          Our goal is to provide AI/ML enthusiasts the opportunity to learn, innovate, and create with the support of our sponsors, while building a collaborative community of passionate individuals.
                        </p>
                        <router-link to="/aboutUs"><p class="more-about-us">More About Us</p></router-link>
                      </div>
                    </div>
                  <div style="height: 100%;" class="flex-wrapper-four"></div>
              </b-container>
            </div>
            <div style="width:100%;" class="relative-wrapper-one">
                <b-container fluid class="turkey">
                    <p class="first-student-club-in-tuerk-iye">
                      With our sponsors we are stronger than ever
                    </p>
                    <p class="our-ai-club-here-at-sabanci-is-the-fir">
                      IntelliMind is the first-ever student club in Turkey to be selected to NVIDIA's Student Network program. With the hardware and content packs sponsorship, we are one step closer to achieving our goal!
                    </p>
                </b-container>
                <b-container fluid class="flex-wrapper-one">
                  <div class="white-shade"></div>
                  <div class="dark-shade"></div> 
                </b-container>
                <b-container fluid style="padding-bottom: 5%; background-color: black; width: 100%;">
                      <b-row class="text-center" align-h="center">
                          <div style="align-content: center;">
                            <p class="want-to-join-our-club">
                              Want to Join Our Club?
                            </p>
                            <router-link to="/applicationForm"><div class="submit-button" style="margin-top: 2%"><p class="click-here">Click Here</p></div></router-link>
                          </div>
                      </b-row>
                    </b-container>
                    <b-container style="padding-bottom: 5%;" fluid class="bottom-bar">
                        <div class="flex-wrapper-seven">
                              <router-link to="/contactUs"><div style="width: 100%"><p class="contact-us">Contact Us</p></div></router-link>
                        </div>
                        <a @click="scrollUp()">  
                          <img
                            class="backToTop"
                            src="../assets/back to top.png"
                          >
                        </a>
                    </b-container>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </div>
        <div v-else class="d-landing-page" style="width: 100%; z-index: 1;">
            <b-container fluid class="flex-wrapper-five" style="background-color: black;">
              <b-row align-h="" style="width: 100%; margin-left: 0;">
                <div class="AIatSabancihas"> 
                      IntelliMind has been selected as 
                      one of the pilot members of
                      <br><div class="nvidias">NVIDIA’s</div> Student Network initiative!
                </div><br>
                <a class="announcements" href="https://developer.nvidia.com/student-network" target="blank">Read More</a>
                <router-link class="wantToTryChatSU" to="/aiChatbox">Want to try ChatSU?</router-link>
                <img
                  @click="scrollDown()"
                  style="max-width: 5%; height: 5%; margin-top: 15%; cursor: pointer"
                  src="../assets/Union (2).png"
                >
                    <!--<div class="ai-sabanci-wrapper">
                        <a>
                          <img
                            src="../assets/Vector.png"
                            class="ai-sabanci"
                          >
                        </a>
                        <div class="where-dreams-come-true-baby" style="text-align: center;">
                          <router-link style="text-decoration: none" to="/aiChatBox"><p style="color: black; margin: 0; display:inline;">Want to try out our&nbsp;</p><p style="color: black; margin: 0; display:inline; text-decoration: underline;">chat-bot</p><p style="color: black; margin: 0; display:inline;">?</p></router-link>
                        </div>
                    </div>-->
              </b-row>
            </b-container>
            <div class="d-rectangle-92"></div>
            <b-container fluid class="d-flex-wrapper-six" style="width: 100%; background-color: black;">
              <b-row align-h="center" style="background-color: black;">
                <div class="flex-wrapper-nine">
                    <div class="workshops">
                      <p class="d-ai-workshops">AI Workshops</p>
                      <p
                          class="d-we-organize-workshops-regarding-deep-lea"
                      >
                          We organize workshops regarding Deep Learning,
                          High-performance computing, and similar topics,
                          where anyone can join and learn from our
                          esteemed lecturers.
                      </p>
                      <router-link to="/workshops"><p class="d-read-more">Read More</p></router-link>
                    </div>
                    <div class="workshops">
                      <p class="d-ai-workshops">AI Projects</p>
                      <p
                          class="d-in-our-club-a-number-of-ai-projects-are"
                      >
                          In our club, a number of AI projects are carried
                          out simultaneously, ranging from Machine
                          Learning to Bioinformatics.
                      </p>
                      <router-link to="/projects"><p class="d-read-more-two">Read More</p></router-link>
                    </div>
                </div>
              </b-row>
            </b-container>
            <b-container fluid class="d-flex-wrapper-two">
                <div class="d-flex-wrapper-three">
                    <div class="accomplish">
                      <p class="d-what-do-we-want-to-accomplish">
                          What Do We Want to Accomplish?
                      </p>
                      <p class="d-our-aim-is-to-expand-the-horizon-of-ai">
                        Our goal is to provide AI/ML enthusiasts the opportunity to learn, innovate, and create with the support of our sponsors, while building a collaborative community of passionate individuals.
                      </p>
                      <router-link to="/aboutUs"><p class="d-more-about-us">More About Us</p></router-link>
                    </div>
                  </div>
                <div style="height: 100%;" class="d-flex-wrapper-four"></div>
            </b-container>
            <div style="width:100%; background-color: black;" class="relative-wrapper-one">
                <b-container fluid class="d-turkey">
                    <p class="d-first-student-club-in-tuerk-iye">
                      With our sponsors we are stronger than ever
                    </p>
                    <p class="d-our-ai-club-here-at-sabanci-is-the-fir" style="text-align: center;">
                      IntelliMind is the first-ever student club in Turkey to be selected to NVIDIA's Student Network program. With the hardware and content packs sponsorship, we are one step closer to achieving our goal!
                    </p>
                </b-container>
                <b-container fluid class="d-flex-wrapper-one">
                  <div class="d-white-shade"></div>
                  <div class="d-dark-shade"></div> 
                </b-container>
                <b-container fluid style="padding-bottom: 5%; background-color: black; width: 100%;">
                      <b-row class="text-center" align-h="center">
                          <div style="align-content: center;">
                            <p class="want-to-join-our-club">
                              Want to Join Our Club?
                            </p>
                            <router-link to="/applicationForm"><div class="submit-button" style="margin-top: 2%"><p class="click-here">Click Here</p></div></router-link>
                            
                          </div>
                      </b-row>
                    </b-container>
                    <b-container style="padding-bottom: 5%;" fluid class="bottom-bar">
                        <div class="flex-wrapper-seven">
                              <router-link to="/contactUs"><div style="width: 100%"><p class="contact-us">Contact Us</p></div></router-link>
                        </div>
                        <a @click="scrollUp()">  
                          <img
                            class="backToTop"
                            src="../assets/back to top.png"
                          >
                        </a>
                    </b-container>
            </div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </div>
      </div>
    <!--</div>-->
</template>

<script>
import store from '@/store/index';
export default {
    data(){
        return{
            user: this.$store.getters.user,
        }
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
    
    mounted() {
      document.title = "IntelliMind";
    },
   methods: {
    logout(){
        store.dispatch('logout');
    },
    logUser(){
        console.log(this.user)
    },
    scrollUp() {
      window.scrollTo({
        top: window.pageYOffset - (window.innerHeight * 4),
        behavior: 'smooth'
      });
    },
    scrollDown(){
      window.scrollTo({
        top: window.pageYOffset + window.innerHeight,
        behavior: 'smooth'
      });
    },
   }
}
</script>


<style scoped>
@media (min-aspect-ratio: 8/5){
  .submit-button {
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
  .submit-button:hover {
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
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
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
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
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
    border: 2px solid rgba(255, 255, 255, 1);
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
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
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
      color: white;
      align-items: center;
      position: relative;
      border: 2px solid rgba(255, 255, 255, 1);
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
      border: 2px solid rgba(255, 255, 255, 1);
      transition: background-color 0.5s, color 0.5s;
      color: black;
      background-color: white;
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
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
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
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    border: 3px solid black;
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
    color: white;
    align-items: center;
    position: relative;
    border: 2px solid rgba(255, 255, 255, 1);
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
    border: 2px solid rgba(255, 255, 255, 1);
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
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

@media (min-aspect-ratio:21/10){
    .where-dreams-come-true-baby {
      font-family: "Inter";
      font-size: 3vh;
      width: 32%;
      height: 5vh;
      font-weight: 500;
      line-height: normal;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      margin-bottom: 0%;
      margin-left: 34%;
      margin-right: 34%;
      margin-top: 2%;
      padding-top: 0.3%;
      /* identical to box height */
      align-items: center;
      text-align: center;
      text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
      background: rgba(255, 255, 255, 0.2);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
      backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
      border-radius: 20px;
    }
}
@media (max-aspect-ratio:21/10) and (min-aspect-ratio: 18/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 36%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 32%;
    margin-right: 32%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:18/10) and (min-aspect-ratio: 16/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 42%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 29%;
    margin-right: 29%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:16/10) and (min-aspect-ratio: 14/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 46%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 27%;
    margin-right: 27%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:14/10) and (min-aspect-ratio: 13/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 48%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 26%;
    margin-right: 26%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:13/10) and (min-aspect-ratio: 12/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 54%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 23%;
    margin-right: 23%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:12/10) and (min-aspect-ratio: 11/10){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 62%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 19%;
    margin-right: 19%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio:11/10) and (min-aspect-ratio: 1/1){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 3vh;
    width: 64%;
    height: 5vh;
    font-weight: 500;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-bottom: 0%;
    margin-left: 18%;
    margin-right: 18%;
    margin-top: 2%;
    padding-top: 0.3%;
    /* identical to box height */
    align-items: center;
    text-align: center;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}
@media (max-aspect-ratio: 1/1){
  .where-dreams-come-true-baby {
    font-family: "Inter";
    font-size: 2.5vw;
    width: 60%;
    height: 5vw;
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
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
/* Note: backdrop-filter has minimal browser support */
    border-radius: 20px;
  }
}

@media (min-aspect-ratio: 1/1) {
  .d-landing-page {
    background-color: black;
    /*padding: 0 0 175px;*/
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .d-flex-wrapper-five {
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/image 121.png");
    /*padding: 32px 0 0;*/
    background-repeat: no-repeat;
    width: 100%;
    background-color: black;
  }
  /*@media (min-aspect-ratio: 2/3){*/
  .d-ai-sabanci {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    font-family: "Michroma";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    font-family: 'Michroma';
    font-style: normal;
    line-height: 114px;
  }

  .d-rectangle-92 {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 0) 100%
    );
    margin-top: 0%;
    z-index: 1;
  }
  .d-flex-wrapper-six {
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 50%,
      rgba(222,219,222,1) 100%
    );
    /*padding: 4.35% 20.5% 5% 19.79%;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .d-ai-workshops {
    font-family: "Cinzel";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
    margin-bottom: 1.9%;
  }
  .d-we-organize-workshops-regarding-deep-lea {
    height: auto;
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
  }
  .d-read-more {
    font-family: "Inter";
    width: 100%;
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-decoration: underline;
    position: relative;
  }
  .d-in-our-club-a-number-of-ai-projects-are {
    height: auto;
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    margin-left: 1px;
  }
  .d-read-more-two {
    font-family: "Inter";
    width: 100%;
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: rgb(255, 255, 255);
    text-decoration: underline;
    margin-left: 0%;
  }
  .d-flex-wrapper-two {
    width: 100%;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/image\ 122.png");
    padding: 0% 0 0%;
    position: relative;
    background-repeat: no-repeat;
    background-color: rgb(15, 15, 15);
    z-index: 2;
  }
  .d-flex-wrapper-three {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgb(0, 0, 0) 0%,
      rgba(241, 241, 241, 0) 100%
    );
    padding: 15% 49.8% 24% 19.79%;
    margin-top: 10%;
    position: relative;
    width: 100%;
  }
  .d-what-do-we-want-to-accomplish {
    max-width: 100%;
    font-family: "Cinzel";
    font-size: 3.5vh;
    font-weight: 400;
    line-height: normal;
    color: rgb(255, 255, 255);
    margin-bottom: 2.8%;
    padding-top: 10%;
  }
  .d-our-aim-is-to-expand-the-horizon-of-ai {
    height: 8.6%;
    width: 75.8%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgb(255, 255, 255);
    display: flex;
  }
  .d-flex-wrapper-four {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );

    display: flex;
    align-items: flex-start;
    position: relative;
    margin-top: 1
  }
  .d-more-about-us {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: rgb(255, 255, 255);
    text-decoration: underline;
  }
  @media (min-aspect-ratio: 7/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 15%,
        rgba(255, 250, 245, 0) 100%
      );
      height: 30%;
      width: 100%;
    }
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 15%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
      width: 100%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 7/5) and (min-aspect-ratio: 6/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 30%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 7%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 90%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 6/5) and (min-aspect-ratio: 5/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 40%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 12%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 80%;
      width: 100%;
    }
  }
  .rectangle-29 {
    width: 100%;
    height: 75%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 1) 102%
    );
    position: relative;
    left: 0;
    top: 25%;
  }
  .rectangle-70 {
    width: 100%;
    height: 30%;
    background: linear-gradient(
      360deg,
      rgba(255, 250, 245, 0) 0%,
      rgba(255, 250, 245, 1) 80%
    );
    position: relative;
    left: 0;
    top: 0;
  }
  .want-to-join-our-club {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 5;
  }
  .rectangle-71 {
    width: 100%;
    height: 36%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );
    position: relative;
    z-index: 5;
  }
  .d-turkey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
      360deg,
      rgb(0, 0, 0) 10%,
      rgb(15, 15, 15) 50%
    );
    margin-top: 0%;
    margin-bottom: -2%;
  }
  .d-first-student-club-in-tuerk-iye {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    color: rgba(180, 180, 180);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 5%;
    z-index: 6;
    /*margin-bottom: 20px;
    margin-left: 107px;*/
  }
  .d-our-ai-club-here-at-sabanci-is-the-fir {
    height: 12.6%;
    width: 59.5%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(180, 180, 180, 1);
    display: flex;
    text-align: center;
    z-index: 5;
  }
}
@media (max-aspect-ratio: 1/1) {
  .d-landing-page {
    background-color: black;
    /*padding: 0 0 175px;*/
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .d-flex-wrapper-five {
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/image 121.png");
    /*padding: 32px 0 0;*/
    background-repeat: no-repeat;
    width: 100%;
    background-color: black;
  }
  /*@media (min-aspect-ratio: 2/3){*/
  .d-ai-sabanci {
    width: 100%;
    margin-left: 0%;
    margin-right: 0;
    font-family: "Michroma";
    font-size: 6vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    font-family: 'Michroma';
    font-style: normal;
    line-height: 114px;
  }

  .d-rectangle-92 {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 0) 100%
    );
    margin-top: 0%;
    z-index: 1;
  }
  .d-flex-wrapper-six {
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 50%,
      rgba(222,219,222,1) 100%
    );
    /*padding: 4.35% 20.5% 5% 19.79%;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .d-union {
    width: 1.78%;
    height: 1.78%;
    margin-bottom: 13%;
    margin-left: 29.3%;
  }
  .d-flex-wrapper-nine {
    align-items: flex-start;
    margin-top: 20%;
    margin-left: 0%;
    margin-right: 0%;
    width: 100%;
  }
  .d-workshops {
    align-items: flex-start;
    margin-right: 7%;
    height: 40%;
    width:100%;
    margin-top: 10%;
  }
  .d-ai-workshops {
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
    margin-bottom: 1.9%;
    margin-top: 3%;
    margin-left: 10%
  }
  .d-we-organize-workshops-regarding-deep-lea {
    height: auto;
    width: 65%;
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-left: 10%;
    display: flex;
  }
  .d-read-more {
    font-family: "Inter";
    width: 100%;
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    margin-bottom: 15%;
    color: white;
    text-decoration: underline;
    position: relative;
    text-align: center;
  }
  .d-in-our-club-a-number-of-ai-projects-are {
    height: auto;
    width: 65%;
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    margin-left: 10%;
  }
  .d-read-more-two {
    font-family: "Inter";
    width: 100%;
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-decoration: underline;
    margin-left: 0%;
    text-align: center;
  }
  .d-flex-wrapper-two {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/image\ 122.png");
    padding: 0 0 0% 0;
    margin-left: 0%;
    position: relative;
    background-repeat: no-repeat;
    background-color: black;
    z-index: 2;
  }
  .d-flex-wrapper-three {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(0,0,0, 1) 0%,
      rgba(241, 241, 241, 0) 100%
    );
    margin-top: 10%;
    position: relative;
    width: 100%;
  }
  .d-accomplish {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .d-what-do-we-want-to-accomplish {
    max-width: 75%;
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    margin-bottom: 2.8%;
    padding-top: 10%;
    margin-left: 12%
  }
  .d-our-aim-is-to-expand-the-horizon-of-ai {
    height: 8.6%;
    width: 60%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    margin-left: 12%;
  }
  .d-flex-wrapper-four {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(0,0,0, 1) 100%
    );

    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .d-more-about-us {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-decoration: underline;
    text-align: center;
    width: 100%;
    position: absolute;
  }
  .d-relative-wrapper-one{
    position: relative;
    height: 97vw;
  }
  @media (max-aspect-ratio: 5/5) and (min-aspect-ratio: 4/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 50%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }

    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 17%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 70%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 4/5) and (min-aspect-ratio: 3/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 60%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 23%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 60%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 3/5) and (min-aspect-ratio: 2/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 80%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 33%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 50%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 2/5){
    .d-white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgb(0, 0, 0) 80%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .d-dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 33%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .d-flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/istanbul night.png");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 50%;
      width: 100%;
    }
  }

  .d-rectangle-23 {
    width: 100%;
    height: 90%;
    position: relative;
  }
  .d-rectangle-29 {
    width: 100%;
    height: 75%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 1) 102%
    );
    position: relative;
    left: 0;
    top: 25%;
  }
  .d-rectangle-70 {
    width: 100%;
    height: 30%;
    background: linear-gradient(
      360deg,
      rgba(0,0,0, 0) 0%,
      rgba(0,0,0, 1) 80%
    );
    position: relative;
    left: 0;
    top: 0;
  }
  .d-want-to-join-our-club {
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 5;
  }
  .d-rectangle-71 {
    width: 100%;
    height: 36%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );
    position: relative;
    z-index: 5;
  }
  .d-turkey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
      360deg,
      rgba(0,0,0,1) 50%,
      rgba(0,0,0,1) 100%
    );

    padding-top: 10%;
  }
  .d-first-student-club-in-tuerk-iye {
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    color: white;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-left: 0%;
    margin-right: 15%;
    margin-top: 5%;
    z-index: 6;
    /*margin-bottom: 20px;
    margin-left: 107px;*/
  }
  .d-our-ai-club-here-at-sabanci-is-the-fir {
    width: 70%;
    margin-left: 0%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    text-align: left !important;
    z-index: 5;
  }
  .contact-us {
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: black;
    margin-bottom: 0%;
    text-align: center;
  }
}
@media (min-aspect-ratio: 1/1) {
  img {
    max-width: 100%;
  }
  html { 
    scroll-behavior: smooth;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
  }
  .landing-page {
    background-color: rgba(255, 255, 255, 1);
    /*padding: 0 0 175px;*/
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .AIatSabancihas{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 5vh;
    color: white;
    margin: 15% 35% 0% 15%;
    width: 50%;
  }
  .nvidias{
    display: inline;
    background: linear-gradient(90deg, #76B900 0%, rgba(118, 185, 0, 0) 100%);
  }
  .announcements{
    text-decoration: underline;
    color: white;
    font-size: 2vh;
    margin-left: 15%;
    margin-top: 2%;
    margin-bottom: 20%;
    width: 15%;
    margin-right: 2%;
    float: left;
    cursor: pointer;
  }
  .wantToTryChatSU{
    color: white;
    font-size: 2vh;
    display: inline;
    border: 1px solid #FFFFFF;
    width: 25vh;
    margin-top: 2%;
    margin-bottom: 20%;
    text-align: center;
    cursor: pointer;
  }
  .wantToTryChatSU:hover{
    font-size: 2vh;
    display: inline;
    border: 1px solid #FFFFFF;
    width: 25vh;
    margin-top: 2%;
    margin-bottom: 20%;
    text-align: center;
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    cursor: pointer;
  }
  
  .ai-sabanci-wrapper{
    margin-top: 20%; margin-bottom: 20%; width: 80%; margin-left: 10%; margin-right: 10%
  }
  .flex-wrapper-five {
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/gradient\ with\ pillars\ landing\ background\ -\ desktop.png");
    /*padding: 32px 0 0;*/
    background-repeat: no-repeat;
    width: 100%;
    background-color: rgba(222, 219, 222, 1);
  }
  .subtract {
    width: 3.3%;
    height: 1.85%;
    margin-bottom: 18.15%;
    margin-left: 94.9%;
  }
  .ai-sabanci {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    font-family: "Michroma";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    font-family: 'Michroma';
    font-style: normal;
    line-height: 114px;
  }
  .rectangle-92 {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 0) 100%
    );
    margin-top: 0%;
    z-index: 1;
  }
  .flex-wrapper-six {
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 50%,
      rgba(222,219,222,1) 100%
    );
    /*padding: 4.35% 20.5% 5% 19.79%;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .union {
    width: 1.78%;
    height: 1.78%;
    margin-bottom: 13%;
    margin-left: 29.3%;
  }
  .flex-wrapper-nine {
    display: flex;
    align-items: flex-start;
    margin-top: 20%;
    margin-left: 20%;
    margin-right: 20%;
    width: 60%
  }
  .workshops {
    align-items: flex-start;
    margin-right: 7%;
    height: 40%;
    width:100%
  }
  .ai-workshops {
    font-family: "Cinzel";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(54, 54, 54, 1);
    text-align: left;
    margin-bottom: 1.9%;
  }
  .we-organize-workshops-regarding-deep-lea {
    height: auto;
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
  }
  .read-more {
    font-family: "Inter";
    width: 100%;
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
    position: relative;
  }
  .in-our-club-a-number-of-ai-projects-are {
    height: auto;
    width: 100%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
    margin-left: 1px;
  }
  .read-more-two {
    font-family: "Inter";
    width: 100%;
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
    margin-left: 0%;
  }
  .flex-wrapper-two {
    background-size: 100%;
    background-position: center;
    background-image: url("https://images.squarespace-cdn.com/content/v1/5dc00e9e32cd095744be7634/3c59b614-0c48-4c09-82d9-f0e3c052baf6/deepmind-4sRFTaQSM8Q-unsplash+%281%29.jpg?format=1500w");
    padding: 0 0 0%;
    position: relative;
    background-repeat: no-repeat;
    background-color: rgba(228, 229, 231, 1);
    z-index: 2;
  }
  .flex-wrapper-three {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(241, 241, 241, 0) 100%
    );
    padding: 15% 49.8% 24% 19.79%;
    margin-top: 10%;
    position: relative;
    width: 100%;
  }
  .accomplish {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .what-do-we-want-to-accomplish {
    max-width: 100%;
    font-family: "Cinzel";
    font-size: 3.5vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(54, 54, 54, 1);
    margin-bottom: 2.8%;
    padding-top: 10%;
  }
  .our-aim-is-to-expand-the-horizon-of-ai {
    height: 8.6%;
    width: 75.8%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
  }
  .flex-wrapper-four {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );

    display: flex;
    align-items: flex-start;
    position: relative;
    margin-top: 1
  }
  .more-about-us {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
  }
  .relative-wrapper-one {
    position: relative;
    height: 100vh;
  }

  @media (min-aspect-ratio: 7/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 250, 245, 1) 15%,
        rgba(255, 250, 245, 0) 100%
      );
      height: 30%;
      width: 100%;
    }
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 15%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
      width: 100%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 100%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 7/5) and (min-aspect-ratio: 6/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 250, 245, 1) 30%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 7%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 90%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 6/5) and (min-aspect-ratio: 5/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 250, 245, 1) 40%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 12%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 80%;
      width: 100%;
    }
  }

  .rectangle-23 {
    width: 100%;
    height: 90%;
    position: relative;
  }
  .rectangle-29 {
    width: 100%;
    height: 75%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 1) 102%
    );
    position: relative;
    left: 0;
    top: 25%;
  }
  .rectangle-70 {
    width: 100%;
    height: 30%;
    background: linear-gradient(
      360deg,
      rgba(255, 250, 245, 0) 0%,
      rgba(255, 250, 245, 1) 80%
    );
    position: relative;
    left: 0;
    top: 0;
  }
  .want-to-join-our-club {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 5;
  }
  .rectangle-71 {
    width: 100%;
    height: 36%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );
    position: relative;
    z-index: 5;
  }
  .turkey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 10%,
      rgba(229,229,229,1) 50%
    );
    margin-top: -5%;
    margin-bottom: -2%;
  }
  .first-student-club-in-tuerk-iye {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    color: rgba(54, 54, 54, 1);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0%;
    margin-right: 0%;
    margin-top: 5%;
    z-index: 6;
    /*margin-bottom: 20px;
    margin-left: 107px;*/
  }
  .our-ai-club-here-at-sabanci-is-the-fir {
    height: 12.6%;
    width: 59.5%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
    text-align: center;
    z-index: 5;
  }
  .bottom-bar {
    background-color: rgba(0, 0, 0, 1);
    margin-bottom: 5%;
    padding-left: 30%;
    padding-right: 30%;
    position: relative;
  }
  .flex-wrapper-seven {
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .powered-by-squared-space {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
  }
  .back-to-top-two {
    margin-top: 0.8%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .union-two {
    width: 34.34px;
    height: 19.17px;
    margin-bottom: 12px;
  }
  .back-to-top {
    font-family: "Inter";
    font-size: 18px;
    font-weight: 300;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
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
  .backToTop {
    max-width:5%;
    position: absolute;
    right: 5%; 
    cursor: pointer;
  }
}
@media (max-aspect-ratio: 1/1) {
  img {
    max-width: 100%;
  }
  html { 
    scroll-behavior: smooth;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */}
  .landing-page {
    background-color: rgba(255, 255, 255, 1);
    /*padding: 0 0 175px;*/
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .ai-sabanci-wrapper{
    margin-top: 20%; 
    margin-bottom: 20%; 
    width: 60%; 
    margin-left: 20%; 
    margin-right: 20%
  }
  .AIatSabancihas{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 6.5vw;
    color: white;
    margin: 20% 0 0% 15%;
    width: 70%;
  }
  .nvidias{
    display: inline;
    background: linear-gradient(90deg, #76B900 0%, rgba(118, 185, 0, 0) 100%);
  }
  .announcements{
    text-decoration: underline;
    color: white;
    font-size: 4vw;
    margin-left: 15%;
    margin-top: 10%;
    margin-bottom: 20%;
    width: 30%;
    margin-right: 2%;
    float: left;
    cursor: pointer;
  }
  .wantToTryChatSU{
    color: white;
    font-size: 4vw;
    display: inline;
    border: 1px solid #FFFFFF;
    width: 40vw;
    margin-top: 10%;
    margin-bottom: 20%;
    text-align: center;
    cursor: pointer;
  }
  .wantToTryChatSU:hover{
    font-size: 4vw;
    display: inline;
    border: 1px solid #FFFFFF;
    width: 40vw;
    margin-top: 10%;
    margin-bottom: 20%;
    text-align: center;
    transition: background-color 0.5s, color 0.5s;
    color: black;
    background-color: white;
    cursor: pointer;
  }
  .flex-wrapper-five {
    background-size: cover;
    background-position: center;
    background-image: url("../assets/gradient\ with\ pillars\ landing\ background\ -\ desktop.png");
    
    /*padding: 32px 0 0;*/
    background-repeat: no-repeat;
    width: 100%;
    background-color: rgba(222, 219, 222, 1);
  }
  .subtract {
    width: 3.3%;
    height: 1.85%;
    margin-bottom: 18.15%;
    margin-left: 94.9%;
  }
  .ai-sabanci {
    width: 100%;
    margin-left: 0%;
    margin-right: 0;
    font-family: "Michroma";
    font-size: 6vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    font-family: 'Michroma';
    font-style: normal;
    line-height: 114px;
  }

  .rectangle-92 {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(244, 244, 244, 1) 0%,
      rgba(244, 244, 244, 0) 100%
    );
    margin-top: 0%;
    z-index: 1;
  }
  .flex-wrapper-six {
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 50%,
      rgba(222,219,222,1) 100%
    );
    /*padding: 4.35% 20.5% 5% 19.79%;*/
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .union {
    width: 1.78%;
    height: 1.78%;
    margin-bottom: 13%;
    margin-left: 29.3%;
  }
  .flex-wrapper-nine {
    align-items: flex-start;
    margin-top: 20%;
    margin-left: 0%;
    margin-right: 0%;
    width: 100%;
  }
  .workshops {
    align-items: flex-start;
    margin-right: 7%;
    height: 40%;
    width:100%;
    margin-top: 10%;
  }
  .ai-workshops {
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(54, 54, 54, 1);
    text-align: left;
    margin-bottom: 1.9%;
    margin-top: 3%;
    margin-left: 10%
  }
  .we-organize-workshops-regarding-deep-lea {
    height: auto;
    width: 65%;
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    margin-left: 10%;
    display: flex;
  }
  .read-more {
    font-family: "Inter";
    width: 100%;
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    margin-bottom: 15%;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
    position: relative;
    text-align: center;
  }
  .in-our-club-a-number-of-ai-projects-are {
    height: auto;
    width: 65%;
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
    margin-left: 10%;
  }
  .read-more-two {
    font-family: "Inter";
    width: 100%;
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
    margin-left: 0%;
    text-align: center;
  }
  .flex-wrapper-two {
    width: 100%;
    height: 100%;
    background-size: 100%;
    background-position: center;
    background-image: url("https://images.squarespace-cdn.com/content/v1/5dc00e9e32cd095744be7634/3c59b614-0c48-4c09-82d9-f0e3c052baf6/deepmind-4sRFTaQSM8Q-unsplash+%281%29.jpg?format=1500w");
    padding: 0 0 0% 0;
    margin-left: 0%;
    position: relative;
    background-repeat: no-repeat;
    background-color: rgba(228, 229, 231, 1);
    z-index: 2;
  }
  .flex-wrapper-three {
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(241, 241, 241, 0) 100%
    );
    margin-top: 10%;
    position: relative;
    width: 100%;
  }
  .accomplish {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }
  .what-do-we-want-to-accomplish {
    max-width: 75%;
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(54, 54, 54, 1);
    margin-bottom: 2.8%;
    padding-top: 10%;
    margin-left: 12%
  }
  .our-aim-is-to-expand-the-horizon-of-ai {
    height: 8.6%;
    width: 60%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
    margin-left: 12%;
  }
  .flex-wrapper-four {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );

    display: flex;
    align-items: flex-start;
    position: relative;
  }
  .more-about-us {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 1);
    text-decoration: underline;
    text-align: center;
    width: 100%;
    position: absolute;
  }
  .relative-wrapper-one{
    position: relative;
    height: 97vw;
  }
  @media (max-aspect-ratio: 5/5) and (min-aspect-ratio: 4/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 250, 245, 1) 50%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }

    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 17%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 70%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 4/5) and (min-aspect-ratio: 3/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 250, 245, 1) 60%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 23%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 60%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 3/5) and (min-aspect-ratio: 2/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 80%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 33%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 51%;
      width: 100%;
    }
  }
  @media (max-aspect-ratio: 2/5){
    .white-shade{
      position: relative;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 1) 80%,
        rgba(255, 250, 245, 0) 100%
      );
      display: flex;
      align-items: flex-start;
      height: 30%;
    }
    
    .dark-shade{
      position: relative;
      background: linear-gradient(
        360deg,
        rgba(0, 0, 0, 1) 33%,
        rgba(255, 250, 245, 0) 50%
      );
      display: flex;
      align-items: flex-start;
      height: 70%;
    }
    .flex-wrapper-one {
      background-size: 100%;
      background-position: center;
      background-image: url("../assets/galata.jpg");
      position: relative;
      padding: 0 0 0%;
      background-repeat: no-repeat;
      height: 50%;
      width: 100%;
    }
  }

  .rectangle-23 {
    width: 100%;
    height: 90%;
    position: relative;
  }
  .rectangle-29 {
    width: 100%;
    height: 75%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 30%,
      rgba(0, 0, 0, 1) 102%
    );
    position: relative;
    left: 0;
    top: 25%;
  }
  .rectangle-70 {
    width: 100%;
    height: 30%;
    background: linear-gradient(
      360deg,
      rgba(255, 250, 245, 0) 0%,
      rgba(255, 250, 245, 1) 80%
    );
    position: relative;
    left: 0;
    top: 0;
  }
  .want-to-join-our-club {
    font-family: "Inter";
    font-size: 4.5vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    text-shadow: 0 4px 7px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 5;
  }
  .rectangle-71 {
    width: 100%;
    height: 36%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 29%,
      rgba(240, 240, 240, 1) 100%
    );
    position: relative;
    z-index: 5;
  }
  .turkey {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(
      360deg,
      rgba(255,255,255,1) 50%,
      rgba(229,229,229,1) 100%
    );
    margin-top: -5%;
    padding-top: 10%;
  }
  .first-student-club-in-tuerk-iye {
    font-family: "Cinzel";
    font-size: 7.5vw;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    color: rgba(54, 54, 54, 1);
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    margin-left: 0%;
    margin-right: 15%;
    margin-top: 5%;
    z-index: 6;
    /*margin-bottom: 20px;
    margin-left: 107px;*/
  }
  .our-ai-club-here-at-sabanci-is-the-fir {
    width: 70%;
    margin-left: 0%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(86, 86, 86, 1);
    display: flex;
    text-align: left;
    z-index: 5;
  }
  .contact-us {
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(255, 255, 255, 1);
    margin-bottom: 0%;
    text-align: center;
  }
  .backToTop {
    max-width: 15%;
    position: absolute;
    right: 5%; 
    bottom: 10%;
    cursor: pointer;
  }
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
</style>