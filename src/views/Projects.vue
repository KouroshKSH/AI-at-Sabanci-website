<template>
    <div id="projects" style="background-color: black; height: 100%;">
        <div v-if="!darkMode" class="projects-two">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <b-container fluid class="flex-wrapper-one">
                <div class="rectangle-31"></div>
                <div class="rectangle-32"></div>
                <div class="flex-wrapper-two">
                  <div style="width: 100%; margin-top:15%; margin-bottom: 10%">
                    <div class="our-projects">Our Projects</div>
                    <div style="padding: 1% 1% 1% 1%; margin-left: 40%; margin-top: 0%;; text-align: left; border: 1px solid white" class="blur bubblepos-1">We cover a large array of AI projects that are carried out by many teams.</div>
                    <p class="emoji">👾</p>
                    <div style="padding: 1% 1% 1% 1%; margin-left: -0%; margin-top: 10%; text-align: left; border: 1px solid white" class="blur bubblepos-2">Anyone can start a project and carry out their vision.</div>
                    <div style="padding: 1% 1% 1% 2%; margin-left: 60%; margin-top: 2%; text-align: left; border: 1px solid white float: left; width: 25%; background: linear-gradient(92.13deg, rgba(47, 48, 238, 0.484783) -10.71%, #CED3F3 103.45%); backdrop-filter: blur(15px); border-radius: 30px; color: white;" class="blur bubblepos-3">Want to propose one?</div>
                  </div>
                </div>
            </b-container>
            <b-container class="num-1st-event">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/e4f8f188-1cd5-4217-b708-c1d16238e956.png"
                />
                <div class="flex-wrapper-four">
                    <p class="ai-aided-tomography">
                      SpeechAI Implementation
                    </p>
                    <p class="our-team-has-developed-a-new-approach-to">
                      Our speech AI implementation project aims to develop a state-of-the-art speech recognition system using artificial intelligence. The system will leverage cutting-edge deep learning algorithms and natural language processing techniques to accurately transcribe spoken words into text. <br> <br>

                      The project will involve designing and training a neural network model using large datasets of audio recordings and their corresponding transcriptions. We will also explore different feature extraction techniques, such as Mel-frequency cepstral coefficients (MFCCs), to improve the accuracy of our model.
                    </p>
                </div>
                
            </b-container>
            <!--<b-container class="num-1st-event-two">
              <img
                  alt=""
                  class="rectangle-34"
                  src="https://static.overlay-tech.com/assets/9a7157e1-c435-4724-affc-a6f614d0e4dd.png"
              />
              <div class="flex-wrapper-four">
                  <p class="ai-aided-tomography">
                      Autonomous Driving
                  </p>
                  <p class="our-team-has-developed-a-new-approach-to">
                      Our project aims to develop a simulation of an
                      autonomous vehicle that can navigate a simple
                      environment using advanced algorithms and control
                      systems. Areas such as sensor data processing,
                      path planning, and control systems were our main
                      focus.
                  </p>
                </div>
            </b-container>
            <b-container  class="num-1st-event-two">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/fbc886f8-616b-44ff-a50a-b208388f9097.png"
                />
                <div class="flex-wrapper-four">
                    <p class="ai-aided-tomography">
                        İstanbul's Weather Prediction
                    </p>
                    <p class="our-team-has-developed-a-new-approach-to">
                        Using HPC, we developed a model for predicting the
                        weather in Istanbul. We collected large amounts of
                        weather data and used sophisticated algorithms to
                        analyze the complex interactions between the
                        atmosphere, oceans, and land surfaces to give more
                        accurate weather precitions.
                    </p>
                </div>
            </b-container>-->
            <b-container fluid>
              <b-row align-h="center">
                <p class="interested-in-future-projects">
                    Have an idea for a project?
                </p>
              </b-row>
              <b-row align-h="center" style="margin-bottom: 2%">
                <router-link to="/projectAddingForm">
                    <div class="submit-button">
                        <p class="click-here">Click Here</p>
                    </div>
                </router-link>
              </b-row>
            </b-container>
        </div>
        <div v-else class="d-projects-two">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
            <b-container fluid class="d-flex-wrapper-one">
                <div class="d-rectangle-31"></div>
                <div class="d-rectangle-32"></div>
                <div class="d-flex-wrapper-two">
                  <div style="width: 100%; margin-top:15%; margin-bottom: 10%">
                    <div class="d-our-projects">Our Projects</div>
                    <div style="padding: 1% 1% 1% 1%; margin-left: 40%; margin-top: 0%;; text-align: left; color: white; border: 1px solid gray" class="blur bubblepos-1">We cover a large array of AI projects that are carried out by many teams.</div>
                    <p class="emoji">👾</p>
                    <div style="padding: 1% 1% 1% 1%; margin-left: -0%; margin-top: 10%; text-align: left; color: white; border: 1px solid gray" class="blur bubblepos-2">Anyone can start a project and carry out their vision.</div>
                    <div style="padding: 1% 1% 1% 2%; margin-left: 60%; margin-top: 2%; text-align: left; float: left; width: 25%; background: linear-gradient(92.13deg, rgba(22, 23, 23, 0.7) 12.48%, rgba(233, 238, 225, 0.7) 103.45%); backdrop-filter: blur(15px); border-radius: 30px; color: white; border: 1px solid gray;" class="blur bubblepos-3">Want to propose one?</div>
                  </div>
                </div>
            </b-container>
            <b-container class="num-1st-event">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/e4f8f188-1cd5-4217-b708-c1d16238e956.png"
                />
                <div class="flex-wrapper-four">
                    <p class="d-ai-aided-tomography">
                    AI Aided Tomography
                    </p>
                    <p class="d-our-team-has-developed-a-new-approach-to">
                    Our team has developed a new approach to
                    tomography that utilizes advanced deep learning
                    algorithms to assist with image reconstruction.
                    Our system is able to analyze raw tomography data
                    and automatically identify features and structures
                    in the image, leading to faster and more accurate
                    image reconstruction.
                    </p>
                </div>
            </b-container>
            <b-container class="num-1st-event-two">
            <img
                alt=""
                class="rectangle-34"
                src="https://static.overlay-tech.com/assets/9a7157e1-c435-4724-affc-a6f614d0e4dd.png"
            />
             <div class="flex-wrapper-four">
                <p class="d-ai-aided-tomography">
                    Autonomous Driving
                </p>
                <p class="d-our-team-has-developed-a-new-approach-to">
                    Our project aims to develop a simulation of an
                    autonomous vehicle that can navigate a simple
                    environment using advanced algorithms and control
                    systems. Areas such as sensor data processing,
                    path planning, and control systems were our main
                    focus.
                </p>
              </div>
            </b-container>
            <b-container  class="num-1st-event-two">
                <img
                    alt=""
                    class="rectangle-34"
                    src="https://static.overlay-tech.com/assets/fbc886f8-616b-44ff-a50a-b208388f9097.png"
                />
                <div class="flex-wrapper-four">
                    <p class="d-ai-aided-tomography">
                        İstanbul’s Weather Prediction
                    </p>
                    <p class="d-our-team-has-developed-a-new-approach-to">
                        Using HPC, we developed a model for predicting the
                        weather in Istanbul. We collected large amounts of
                        weather data and used sophisticated algorithms to
                        analyze the complex interactions between the
                        atmosphere, oceans, and land surfaces to give more
                        accurate weather precitions.
                    </p>
                </div>
            </b-container>
            <b-container fluid>
              <b-row align-h="center">
                <p class="d-interested-in-future-projects">
                    Have an idea for a project?
                </p>
              </b-row>
              <b-row align-h="center" style="margin-bottom: 2%">
                <router-link to="/projectAddingForm">
                    <div class="d-submit-button">
                        <p class="d-click-here">Click Here</p>
                    </div>
                </router-link>
              </b-row>
            </b-container>
        </div>
        <b-container style="padding-bottom: 5%; bottom: 0" fluid class="bottom-bar">
          <div class="flex-wrapper-seven-1">
                <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%;"><p class="contact-us">Contact Us</p></div></router-link>
          </div>
          <a href="#projects">  
            <img
              style="max-width:5%; position: absolute; right: 5%; cursor: pointer;"
              src="../assets/back to top.png"
            >
          </a>
        </b-container>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            currentProjects: this.$store.getters.currentProjects,
            pastProjects: this.$store.getters.pastProjects,
            fields: ["name", "field", "projectLeader", "abstract"],
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

@media (min-aspect-ratio: 21/10){
  .emoji{
    position: absolute; 
    left: 55%; 
    top: 55%; 
    font-size: 3vh;
  }
}
@media (max-aspect-ratio: 21/10) and (min-aspect-ratio: 18/10){
  .emoji{
    position: absolute; 
    left: 58%; 
    top: 55%; 
    font-size: 3vh;
  }
}
@media (max-aspect-ratio: 18/10) and (min-aspect-ratio: 15/10){
  .emoji{
    position: absolute; 
    left: 61%; 
    top: 55%; 
    font-size: 3vh;
  }
}
@media (max-aspect-ratio: 15/10) and (min-aspect-ratio: 13/10){
  .emoji{
    position: absolute; 
    left: 63%; 
    top: 55%; 
    font-size: 3vh;
  }
}
@media (max-aspect-ratio: 13/10) and (min-aspect-ratio: 1/1){
  .emoji{
    position: absolute; 
    left: 67%; 
    top: 55%; 
    font-size: 3vh;
  }
}
@media (max-aspect-ratio: 1/1){
  .emoji{
    position: absolute; 
    left: 70%; 
    top: 45%; 
    font-size: 3vw;
  }
}

@media (min-aspect-ratio: 21/10){
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
@media (max-aspect-ratio: 21/10) and (min-aspect-ratio: 18/10){
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
@media (max-aspect-ratio: 18/10) and (min-aspect-ratio: 16/10){
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
@media (max-aspect-ratio: 16/10) and (min-aspect-ratio: 14/10){
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
@media (max-aspect-ratio: 14/10) and (min-aspect-ratio: 13/10){
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
@media (max-aspect-ratio: 13/10) and (min-aspect-ratio: 12/10){
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
@media (max-aspect-ratio: 12/10) and (min-aspect-ratio: 11/10){
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
@media (max-aspect-ratio: 11/10) and (min-aspect-ratio: 1/1){
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
    font-size: 2.5vw !important;
    width: 60%t;
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
    bottom: 0;
    padding-left: 30%;
    padding-right: 30%;
    position: relative;
  }
}

@media (min-aspect-ratio: 1/1){
  .d-projects-two {
    width: 100%;
    height: 100%;
    background-color: #242424;
    overflow: hidden;
    padding: 32px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .d-flex-wrapper-one {
    object-fit: contain;
    width: 100%;
    height: auto;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/dark\ neural\ network.png");
    margin-bottom: 3%;
    padding: 30% 0 0;
    position: relative;
    z-index: 5;
    background-repeat: no-repeat;
    background-color: #242424;
  }
  .d-rectangle-31 {
    width: 100%;
    height: 20vh;
    background: linear-gradient(
      360deg,
      #242424 0%,
      rgba(244, 244, 244, 0) 70%
    );
    position: relative;
    margin-bottom: 0%;
    z-index: 3;
  }
  .d-flex-wrapper-two {
    width: 100%;
    background: linear-gradient(
      180deg,
      #242424 0%,
      rgba(244, 244, 244, 0) 100%
    );
    padding: 0 25% 0 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
  }
  .d-our-projects {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-bottom: 16.1%;
  }
  .d-project-subtext{
    font-family: "Inter";
    color: white;
    font-size: 2vh
  }
  .d-ai-aided-tomography {
    color: white;
    margin-bottom: 13px;
    font-size: 3vh
  }
  .d-our-team-has-developed-a-new-approach-to {
    height: 17.8%;
    width: 90%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
  }
  .d-interested-in-future-projects {
    color: white;
    text-align: center;
    margin-bottom: 1%;
    margin-left: 0%;
    font-size: 2vh
  }
}
@media (max-aspect-ratio: 1/1){
  .d-projects-two {
    max-width: 100%;
    height: 100%;
    background-color: #242424;
    overflow: hidden;
    padding: 32px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .d-flex-wrapper-one {
    object-fit: contain;
    width: 100%;
    height: auto;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/dark\ neural\ network.png");
    margin-bottom: 3%;
    padding: 30% 0 0;
    position: relative;
    z-index: 5;
    background-repeat: no-repeat;
    background-color: #242424;
  }
  .d-rectangle-31{
    width: 100%;
    height: 15vw;
    background: linear-gradient(
      180deg,
      rgba(36, 36, 36, 1) 50%,
      rgba(244, 244, 244, 0) 100%
    );
    position: absolute;
    top: 0%;
    margin-bottom: 0%;
    z-index: 0;
  }
  .d-rectangle-32 {
    width: 100%;
    height: 15vw;
    background: linear-gradient(
      360deg,
      rgba(36, 36, 36, 1) 50%,
      rgba(244, 244, 244, 0) 100%
    );
    position: relative;
    margin-top: 10%;
    margin-bottom: 0%;
    z-index: 0;
  }
  .d-flex-wrapper-two {
    width: 100%;
    background: linear-gradient(
      360deg,
      rgb(24, 24, 24, 1) 0%,
      rgba(244, 244, 244, 0) 0%
    );
    padding: 0 25% 0 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
  }
  .d-our-projects {
    font-family: "Cinzel";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 15%;
  }
  .d-project-subtext{
    font-family: "Inter";
    color: white;
    font-size: 2vw
  }
  .d-ai-aided-tomography {
    color: white;
    margin-top: 5%;
    font-size: 5vw
  }
  .d-our-team-has-developed-a-new-approach-to {
    height: 20%;
    width: 80%;
    margin-top: 3%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: left;
    float: left;
  }
  .d-interested-in-future-projects {
    color: white;
    text-align: center;
    margin-bottom: 1%;
    margin-left: 0%;
    font-size: 2vw
  }
}

@media (min-aspect-ratio: 1/1){
  .projects-two {
    width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;
    padding: 32px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }

  .chatbubble{
    font-size: 2vh;
  }
  .flex-wrapper-one {
    object-fit: contain;
    width: 100%;
    height: auto;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/neural\ network\ image.png");
    margin-bottom: 3%;
    padding: 30% 0 0;
    position: relative;
    z-index: 5;
    background-repeat: no-repeat;
    background-color: rgba(209, 209, 209, 1);
  }
  .rectangle-31 {
    width: 100%;
    height: 20vh;
    background: linear-gradient(
      360deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(244, 244, 244, 0) 70%
    );
    position: relative;
    margin-bottom: 0%;
    z-index: 3;
  }
  .flex-wrapper-two {
    width: 100%;
    background: linear-gradient(
      180deg,
      rgb(255, 255, 255, 1) 0%,
      rgba(244, 244, 244, 0) 100%
    );
    padding: 0 25% 0 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
  }
  .our-projects {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-bottom: 16.1%;
  }
  .project-subtext{
    font-family: "Inter";
    color: black;
    font-size: 2vh
  }
  .num-1st-event {
    width: 100%;
    margin-bottom: 2%;
    margin-top: 0%;
    padding: 0 114px 0 46px;
    display: flex;
    align-items: flex-start;
  }
  .rectangle-34 {
    width: 25%;
    margin-right: 3%;
    max-width: 250px;
    max-height: 250px;
  }
  .flex-wrapper-four {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .ai-aided-tomography {
    color:black;
    margin-bottom: 13px;
    font-size: 3vh
  }
  .our-team-has-developed-a-new-approach-to {
    height: 17.8%;
    width: 90%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .num-1st-event-two {
    margin-bottom: 2%;
    padding: 0 114px 0 46px;
    display: flex;
    align-items: flex-start;
  }
  .interested-in-future-projects {
    color: gray;
    text-align: center;
    margin-bottom: 1%;
    margin-left: 0%;
    font-size: 2vh
  }
}
@media (max-aspect-ratio: 1/1){
  .bubblepos-1{
    margin-left: 20% !important;
    width: 85% !important;
    padding: 3% 3% 3% 3% !important; 
  }
  .bubblepos-2{
    margin-left: -10% !important;
    width: 85% !important;
    padding: 3% 3% 3% 3% !important; 
  }
  .bubblepos-3{
    margin-left: 30% !important;
    margin-top: 10% !important;
    width: 60% !important; 
    padding: 3% 3% 3% 3% !important; 
  }
  .chatbubble{
    font-size: 2vw;
  }
  .num-1st-event {
    width: 100%;
    margin-bottom: 2%;
    margin-top: 10%;
    padding: 0 5% 0 5%;
  }
  .rectangle-34 {
    width: 50%;
    margin-right: 3%;
    max-width: 60px;
    max-height: 60px;
    float: left
  }
  .num-1st-event-two {
    width: 100%;
    margin-bottom: 2%;
    margin-top: 0%;
    padding: 0 5% 0 5%;
  }
  .projects-two {
    max-width: 100%;
    height: 100%;
    background-color: white;
    overflow: hidden;
    padding: 32px 0 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
  }
  .flex-wrapper-one {
    object-fit: contain;
    width: 100%;
    height: auto;
    background-size: 100%;
    background-position: center;
    background-image: url("../assets/neural\ network\ image.png");
    margin-bottom: 3%;
    padding: 30% 0 0;
    position: relative;
    z-index: 5;
    background-repeat: no-repeat;
    background-color: white;
  }
  .rectangle-31{
    width: 100%;
    height: 15vw;
    background: linear-gradient(
      180deg,
      rgb(255, 255, 255) 50%,
      rgba(244, 244, 244, 0) 100%
    );
    position: absolute;
    top: 0%;
    margin-bottom: 0%;
    z-index: 0;
  }
  .rectangle-32 {
    width: 100%;
    height: 15vw;
    background: linear-gradient(
      360deg,
      rgb(255, 255, 255) 50%,
      rgba(244, 244, 244, 0) 100%
    );
    position: relative;
    margin-top: 10%;
    margin-bottom: 0%;
    z-index: 0;
  }
  .flex-wrapper-two {
    width: 100%;
    background: linear-gradient(
      360deg,
      rgb(24, 24, 24, 1) 0%,
      rgba(244, 244, 244, 0) 0%
    );
    padding: 0 25% 0 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    left: 0;
    top: 0;
  }
  .our-projects {
    font-family: "Cinzel";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    margin-top: 5%;
    margin-bottom: 15%;
  }
  .project-subtext{
    font-family: "Inter";
    color: black;
    font-size: 2vw
  }
  .ai-aided-tomography {
    color: black;
    margin-top: 5%;
    font-size: 5vw
  }
  .our-team-has-developed-a-new-approach-to {
    height: 20%;
    width: 80%;
    margin-top: 3%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: black;
    text-align: left;
    float: left;
  }
  .interested-in-future-projects {
    color: black;
    text-align: center;
    margin-bottom: 1%;
    margin-left: 0%;
    font-size: 2vw
  }
}
</style>