<template>
  <div :id="event">
    <div v-if="!darkMode" class="specific-event" style="min-height: 90vh; overflow-y:hidden">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <div>
        <b-container style="margin-top: 3%">
          <b-row>
            <b-col><p class="events-two">Events</p></b-col>
          </b-row>
        </b-container>
        <b-container fluid class="events">  
          <img
            alt=""
            class="rectangle-76"
            :src=events[index].img
          />
          <p class="dl-in-real-life">{{events[index].name}}</p>
          <div class="relative-wrapper-one">
            <div class="rectangle-35"></div>
            <p class="deep-learning-has-become-increasingly-po">
              {{events[index].description}}
            </p>
          </div>
          <p class="time-place">Time &amp; Place</p>
          <p class="saturday-march-18th-2023-1730-1900">
            {{events[index].date}}<br />
            {{events[index].time}}<br />
            {{events[index].location}}
          </p>
          <p class="sounds-interesting-to-you">
            Sounds interesting to you?
          </p>
          <div style="margin-bottom: 5%" class="submit-button">
            <p class="click-here">Join Event</p>
          </div>
        </b-container>
      </div>
    </div>
    <div v-else class="d-specific-event" style="min-height: 90vh; overflow-y: disabled; background-color: #242424;">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <div>
        <b-container style="padding-top: 3%">
          <b-row>
            <b-col><p class="d-events-two">Events</p></b-col>
          </b-row>
        </b-container>
        <b-container fluid class="events">  
          <img
            alt=""
            class="rectangle-76"
            :src=events[index].img
          />
          <p class="d-dl-in-real-life">{{events[index].name}}</p>
          <div class="d-relative-wrapper-one">
            <div class="rectangle-35"></div>
            <p class="d-deep-learning-has-become-increasingly-po">
              {{events[index].description}}
            </p>
          </div>
          <p class="d-time-place">Time &amp; Place</p>
          <p class="d-saturday-march-18th-2023-1730-1900">
            {{events[index].date}}<br />
            {{events[index].time}}<br />
            {{events[index].location}}
          </p>
          <p class="d-sounds-interesting-to-you">
            Sounds interesting to you?
          </p>
          <div style="padding-bottom: 5%">
            <div class="d-submit-button">
              <p class="d-click-here">Join Event</p>
            </div>
          </div>
        </b-container>
      </div>
    </div>
    <b-container style="padding-bottom: 0%" fluid class="bottom-bar">
        <div class="flex-wrapper-seven">
              <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%"><p class="contact-us">Contact Us</p></div></router-link>
        </div>
        <a :href=event>  
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
    name: "SpecificEvent",
    data(){
        return{
            index: this.$route.params.id,
            event: `event/${this.$route.params.id}`,
            page: 1,
            events: [
                {
                    name: "Our First Event!",
                    abstract: "Join our first event, where we will present the basics of Deep Learning, and how it can be utilized on smaller-scale projects.",
                    description: "Welcome to the inaugural event of our AI club! This event will introduce you to the basics of AI and demonstrate how it can be used on smaller scale projects.\nAttendees will learn how to develop and deploy AI models on their own, using open-source tools and platforms.\nThroughout the event, there will be opportunities for attendees to ask questions and discuss their own ideas for AI projects. This is a great opportunity for beginners to learn more about AI and for more experienced individuals to network and exchange ideas.",
                    date: "Wednesday, March 1st, 2023",
                    time: "18:00-20:00",
                    location: "FENS G077",
                    img: "https://static.overlay-tech.com/assets/2de6e4c5-a258-4c5d-8f34-004fcd00fc3a.png",
                },
                {
                    name: "DL in Real Life",
                    abstract: "In this workshop, we will implement the various Deep Learning techniques on real life projects.",
                    description: "Deep learning has become increasingly popular in recent years, and it has been applied to a wide range of real-world problems across various industries. In this workshop, we will implement the various Deep Learning techniques on real life projects. Some of these include:\nImage and object recognition\nNatural language processing (NLP)\nAutonomous driving\nFraud detection\n\nPrior familiarity with deep learning is not necessary for this workshop.",
                    date: "Saturday, March 18th, 2023",
                    time: "17:30 - 19:00",
                    location: "FENS G035",
                    img: "https://static.overlay-tech.com/assets/3ccb7de4-1fda-40e7-bec4-a6f88b5bec6f.png",
                },
                {
                    name: "What is HPC?",
                    abstract: "What is High-performance Computing? How can we benefit from it? All this and more in this upcoming workshop.",
                    description: "High-Performance Computing (HPC) is an important field of study that is worth learning for several reasons. During this event, our expert speakers will dive deep into what HPC is, and how it works. We will start by providing an overview of HPC architecture, including the hardware and software components that make up HPC systems. We will also cover the various types of HPC systems, including clusters, supercomputers, and cloud-based HPC.",
                    date: "Sunday, April 2nd, 2023",
                    time: "14:00 - 15:00",
                    location: "FASS 1011",
                    img: "https://static.overlay-tech.com/assets/e65b88ca-b4e9-4583-8015-7f181c1fe5fb.png",
                },
                {
                    name: "Developing an AI model with TensorFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TensorFlow",
                    description: "Our speaker, a TensorFlow expert, will begin by giving an overview of TensorFlow and its key features. They will explain how it can be used to create a range of AI models, including deep learning models, and how it can be applied in various industries such as healthcare, finance, and transportation. Attendees will then be taken through the steps required to develop an AI model using TensorFlow. This will include data preparation, feature engineering, model training, and evaluation. The speaker will provide practical examples and demonstrate how to implement these steps in TensorFlow using Python code. The event will also cover some of the common challenges faced when developing AI models, such as overfitting and underfitting. Attendees will learn how to identify these issues and apply techniques to improve the performance of their models.",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                
            ]
        }
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
  };
  </script>
  
<style scoped>
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
    height: 20vh;
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
    height: 20vw;
    margin-bottom: 0;
    padding-left: 30%;
    padding-right: 30%;
    position: relative;
  }
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
  .d-events-two {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
      width: 60%;
      margin-left: 20%;
      margin-right: 20%;
    }
  .d-specific-event {
    background-color: #242424;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-dl-in-real-life {
    font-size: 4vh;
    color: white;
    margin-top: 5%;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .d-deep-learning-has-become-increasingly-po {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 100;
    line-height: normal;
    color: white;
    position: relative;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .d-time-place {
    color: white;
    font-size: 3vh;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .d-saturday-march-18th-2023-1730-1900 {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .d-sounds-interesting-to-you {
    color: white;
    text-align: center;
    font-size: 3vh;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media (max-aspect-ratio: 1/1){
  .d-events-two{
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 20%;
  }
  .d-specific-event {
    width: 100%;
    background-color: #242424;
    padding: 0 0 0 0;
  }
  .d-dl-in-real-life {
    font-size: 5vw;
    color: white;
    margin-left: 10%;
    margin-top: 10%;
  }
  .d-deep-learning-has-become-increasingly-po {
    font-family: "Inter";
    font-size: 3.5vw;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-weight: 200;
    line-height: normal;
    color: white;
    position: relative;
  }
  .d-time-place {
    color: white;
    font-size: 5vw;
    margin-left: 10%;
  }
  .d-saturday-march-18th-2023-1730-1900 {
    font-family: "Inter";
    font-size: 3.5vw;
    margin-left: 10%;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
  }
  .d-sounds-interesting-to-you {
    color: white;
    text-align: center;
    font-size: 5vw;
  }

}

@media (min-aspect-ratio: 1/1){
  .events{
    width: 100%;  
    margin-top: 0%;
  }
  .events-two {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
      width: 60%;
      margin-left: 20%;
      margin-right: 20%;
    }
  .specific-event {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .rectangle-76 {
    float: center;
    width: 100%;
    max-width: 1148px;
    max-height: 500px;
    object-fit: contain;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .dl-in-real-life {
    font-size: 4vh;
    color: black;
    margin-top: 5%;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .relative-wrapper-one {
    position: relative;
  }
  .rectangle-35 {
    position: relative;
  }
  .deep-learning-has-become-increasingly-po {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 100;
    line-height: normal;
    color: gray;
    position: relative;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .time-place {
    color: gray;
    font-size: 3vh;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .saturday-march-18th-2023-1730-1900 {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
  .sounds-interesting-to-you {
    color: gray;
    text-align: center;
    font-size: 3vh;
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
  }
}
@media (max-aspect-ratio: 1/1){
  .events-two{
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 20%;
  }
  .events{
    width: 100%; 
    padding: 0 0 0 0;
    margin-top: 0%;
  }
  .specific-event {
    width: 100%;
    background-color: white;
    padding: 0 0 0 0;
  }
  .rectangle-76 {
    padding: 0 0 0 0;
    width: 100%;
  }
  .dl-in-real-life {
    font-size: 5vw;
    color: black;
    margin-left: 10%;
    margin-top: 10%;
  }
  .relative-wrapper-one {
    position: relative;
  }
  .rectangle-35 {
    position: relative;
  }
  .deep-learning-has-become-increasingly-po {
    font-family: "Inter";
    font-size: 3.5vw;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-weight: 200;
    line-height: normal;
    color: gray;
    position: relative;
  }
  .time-place {
    color: black;
    font-size: 5vw;
    margin-left: 10%;
  }
  .saturday-march-18th-2023-1730-1900 {
    font-family: "Inter";
    font-size: 3.5vw;
    margin-left: 10%;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .sounds-interesting-to-you {
    color: gray;
    text-align: center;
    font-size: 5vw;
  }

}
</style>