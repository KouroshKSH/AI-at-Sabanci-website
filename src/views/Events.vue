<template>
  <div id="events">
    <div v-if="!darkMode" class="events-three" style="min-height: 100vh">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <b-container style="margin-top: 3%">
        <b-row>
          <b-col><p class="events-two">Events</p></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="lorem-ipsum-dolor-sit-amet-consectetur">
              Join us in these events and stay up-to-date with the rapidly evolving world of artificial intelligence.
            </p>
          </b-col>
        </b-row>
      </b-container>
      <div class="events" style="width: 100%">
        <b-container fluid v-if="events[(page-1)*3]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3].img
              />
              <div class="flex-wrapper-three">
                <p class="our-first-event">{{ events[(page-1)*3].name }}</p>
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3].date}}<br />
                  {{events[(page-1)*3].time}}<br />
                  {{events[(page-1)*3].location}}
                </p>
                <router-link :to=event+((page-1)*3)><p class="read-more">Read More</p></router-link>
              </div>
              
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+1]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+1].img
              />
              <div class="flex-wrapper-three">
                <p class="our-first-event">{{ events[(page-1)*3+1].name }}</p>
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+1].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+1].date}}<br />
                  {{events[(page-1)*3+1].time}}<br />
                  {{events[(page-1)*3+1].location}}
                </p>
                <router-link :to=event+((page-1)*3+1)><p class="read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+2]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+2].img
              />
              <div class="flex-wrapper-three">
                <p class="our-first-event">{{ events[(page-1)*3+2].name }}</p>
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+2].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+2].date}}<br />
                  {{events[(page-1)*3+2].time}}<br />
                  {{events[(page-1)*3+2].location}}
                </p>
                <router-link :to=event+((page-1)*3+2)><p class="read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>  
        </b-container>
      </div> <!--wide-->
      <div class="m-events">
        <b-container fluid v-if="events[(page-1)*3]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3].img
              />
              <p class="our-first-event">{{ events[(page-1)*3].name }}</p>
              <div class="flex-wrapper-three">
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3].date}}<br />
                  {{events[(page-1)*3].time}}<br />
                  {{events[(page-1)*3].location}}
                </p>
                <router-link :to=event+((page-1)*3)><p class="read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+1]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+1].img
              />
              <p class="our-first-event">{{ events[(page-1)*3+1].name }}</p>
              <div class="flex-wrapper-three">
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+1].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+1].date}}<br />
                  {{events[(page-1)*3+1].time}}<br />
                  {{events[(page-1)*3+1].location}}
                </p>
                <router-link :to=event+((page-1)*3+1)><p class="read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+2]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+2].img
              />
              <div class="flex-wrapper-three">
                <p class="our-first-event">{{ events[(page-1)*3+2].name }}</p>
                <p
                  class="join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+2].abstract}}
                </p>
                <p class="wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+2].date}}<br />
                  {{events[(page-1)*3+2].time}}<br />
                  {{events[(page-1)*3+2].location}}
                </p>
                <router-link :to=event+((page-1)*3+2)><p class="read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>  
        </b-container>
      </div> <!--mobi;e-->
      <b-container class="group-14">
        <b-row align-h="center" style="margin-top: 5%;">
            <div style="width: 36px; height: 18px">
              <img
                v-if="page>1"
                alt=""
                class="back-to-top-arrow-two"
                src="https://static.overlay-tech.com/assets/eed53001-380b-4cd2-b196-a9a3d2901933.svg"
                @click="page--"
              />
            </div>
            <p style="margin-top: 0.5%; width: 0%">{{ page }}</p>
            <div style="width: 36px; height: 18px">
              <img
                v-if="Math.ceil(events.length/3)>page"
                alt=""
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/10a1e514-f99b-435a-b9cf-c317b6a48dd3.svg"
                @click="page++"
              />
            </div>
        </b-row>
      </b-container>
    </div>
    <div v-else class="d-events-three" style="min-height: 100vh">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <b-container style="margin-top: 3%">
        <b-row>
          <b-col><p class="d-events-two">Events</p></b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="d-lorem-ipsum-dolor-sit-amet-consectetur">
              Join us in these events and stay up-to-date with the rapidly evolving world of artificial intelligence.
            </p>
          </b-col>
        </b-row>
      </b-container>
      <div class="events" style="width: 100%">
        <b-container fluid v-if="events[(page-1)*3]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3].img
              />
              <div class="flex-wrapper-three">
                <p class="d-our-first-event">{{ events[(page-1)*3].name }}</p>
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3].date}}<br />
                  {{events[(page-1)*3].time}}<br />
                  {{events[(page-1)*3].location}}
                </p>
                <router-link :to=event+((page-1)*3)><p class="d-read-more">Read More</p></router-link>
              </div>
              
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+1]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+1].img
              />
              <div class="flex-wrapper-three">
                <p class="d-our-first-event">{{ events[(page-1)*3+1].name }}</p>
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+1].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+1].date}}<br />
                  {{events[(page-1)*3+1].time}}<br />
                  {{events[(page-1)*3+1].location}}
                </p>
                <router-link :to=event+((page-1)*3+1)><p class="d-read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+2]" class="relative-wrapper-one">
          <b-row align-h="center">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+2].img
              />
              <div class="flex-wrapper-three">
                <p class="d-our-first-event">{{ events[(page-1)*3+2].name }}</p>
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+2].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+2].date}}<br />
                  {{events[(page-1)*3+2].time}}<br />
                  {{events[(page-1)*3+2].location}}
                </p>
                <router-link :to=event+((page-1)*3+2)><p class="d-read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>  
        </b-container>
      </div> <!--wide-->
      <div class="m-events">
        <b-container fluid v-if="events[(page-1)*3]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3].img
              />
              <p class="d-our-first-event">{{ events[(page-1)*3].name }}</p>
              <div class="flex-wrapper-three">
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3].date}}<br />
                  {{events[(page-1)*3].time}}<br />
                  {{events[(page-1)*3].location}}
                </p>
                <router-link :to=event+((page-1)*3)><p class="d-read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+1]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+1].img
              />
              <p class="d-our-first-event">{{ events[(page-1)*3+1].name }}</p>
              <div class="flex-wrapper-three">
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+1].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+1].date}}<br />
                  {{events[(page-1)*3+1].time}}<br />
                  {{events[(page-1)*3+1].location}}
                </p>
                <router-link :to=event+((page-1)*3+1)><p class="d-read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>
        </b-container>
        <b-container fluid v-if="events[(page-1)*3+2]" class="relative-wrapper-one">
          <b-row align-h="left">
            <div class="d-num-1st-event">
              <img
                alt=""
                class="rectangle-34"
                :src=events[(page-1)*3+2].img
              />
              <div class="flex-wrapper-three">
                <p class="d-our-first-event">{{ events[(page-1)*3+2].name }}</p>
                <p
                  class="d-join-our-first-event-where-we-will-pres"
                >
                    {{events[(page-1)*3+2].abstract}}
                </p>
                <p class="d-wednesday-march-1st-2023-1800-2000">
                  {{events[(page-1)*3+2].date}}<br />
                  {{events[(page-1)*3+2].time}}<br />
                  {{events[(page-1)*3+2].location}}
                </p>
                <router-link :to=event+((page-1)*3+2)><p class="d-read-more">Read More</p></router-link>
              </div>
            </div>
          </b-row>  
        </b-container>
      </div><!--mobile-->
      <b-container class="group-14">
        <b-row align-h="center" style="margin-top: 3%;">
            <div style="width: 36px; height: 18px">
              <img
                v-if="page>1"
                alt=""
                class="back-to-top-arrow-two"
                src="https://static.overlay-tech.com/assets/eed53001-380b-4cd2-b196-a9a3d2901933.svg"
                @click="page--"
              />
            </div>
            <p style="margin-top: 0.5%; width: 0%; color: white">{{ page }}</p>
            <div style="width: 36px; height: 18px">
              <img
                v-if="Math.ceil(events.length/3)>page"
                alt=""
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/10a1e514-f99b-435a-b9cf-c317b6a48dd3.svg"
                @click="page++"
              />
            </div>
        </b-row>
      </b-container>
    </div>
    <b-container style="padding-bottom: 5%; min-height: 0vh" fluid class="bottom-bar">
        <div class="flex-wrapper-seven">
              <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%"><p class="contact-us">Contact Us</p></div></router-link>
        </div>
        <a href="#events">  
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
    name: "Events",
    data(){
        return{
            event: "/event/",
            page: 1,
            events: [
                {
                    name: "Our First Event!",
                    abstract: "Join our first event, where we will present the basics of Deep Learning, and how it can be utilized on smaller-scale projects.",
                    date: "Wednesday, March 1st, 2023",
                    time: "18:00-20:00",
                    location: "FENS G077",
                    img: "https://static.overlay-tech.com/assets/2de6e4c5-a258-4c5d-8f34-004fcd00fc3a.png",
                },
                {
                    name: "DL in Real Life",
                    abstract: "In this workshop, we will implement the various Deep Learning techniques on real life projects.",
                    date: "Saturday, March 18th, 2023",
                    time: "17:30 - 19:00",
                    location: "FENS G035",
                    img: "https://static.overlay-tech.com/assets/3ccb7de4-1fda-40e7-bec4-a6f88b5bec6f.png",
                },
                {
                    name: "What is HPC?",
                    abstract: "What is High-performance Computing? How can we benefit from it? All this and more in this upcoming workshop.",
                    date: "Sunday, April 2nd, 2023",
                    time: "14:00 - 15:00",
                    location: "FASS 1011",
                    img: "https://static.overlay-tech.com/assets/e65b88ca-b4e9-4583-8015-7f181c1fe5fb.png",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
                    date: "Tuesday, April 4th, 2023",
                    time: "19:00-21:00",
                    location: "FMAN1099",
                    img: "https://s3.ap-south-1.amazonaws.com/techleer/31.jpg",
                },
                {
                    name: "Developing an AI model with TenserFlow",
                    abstract: "In this workshop, we will develop an visual computer vision AI model using TenserFlow",
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
    .m-events{
      display: none;
    }
    .d-events-three {
      background-color: #242424;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .d-events-two {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-lorem-ipsum-dolor-sit-amet-consectetur {
      width: 100%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-num-1st-event {
      width: 75%;
      background-color: #242424;
      padding: 2% 3% 2% 3%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .d-our-first-event {
      color: white;
    }
    .d-join-our-first-event-where-we-will-pres {
      height: 8%;
      width: 100%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
    .d-wednesday-march-1st-2023-1800-2000 {
      height: 6%;
      width: 80%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
    .d-read-more {
      font-family: "Inter";
      font-size: 1.5vh;
      width: 12vh;
      margin-bottom: 0;
      margin-right: 0;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-decoration: underline;
      position: absolute;
      right: 0;
      bottom: 10%;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .d-events-three {
      background-color: #242424;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .d-events-two {
      font-family: "Cinzel";
      font-size: 6vw;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
      width: 100%;
      margin-top: 15%;
    }
    .d-lorem-ipsum-dolor-sit-amet-consectetur {
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-num-1st-event {
      width: 75%;
      background-color: #242424;
      padding: 2% 3% 2% 3%;
      margin-top: 10%;

    }
    .d-our-first-event {
      color: white;
      width: 100%;
      font-size: 5vw;
      margin-top: 5%;
    }
    .d-join-our-first-event-where-we-will-pres {
      height: 8%;
      width: 100%;
      margin-top: 10%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-align: left;
      float: left;
    }
    .d-wednesday-march-1st-2023-1800-2000 {
      height: 100%;
      width: 100%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      color: white;
    }
    .d-read-more {
      font-family: "Inter";
      font-size: 2.5vw;
      width: 20vw;
      margin-bottom: 0;
      margin-right: 0;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-decoration: underline;
      position: absolute;
      right: 20%
    }
  }

  @media (min-aspect-ratio: 1/1){
    .m-events{
      display: none
    }
    .events-three {
      background-color: white;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .events-two {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
      width: 100%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .relative-wrapper-one {
      position: relative;
    }
    .num-1st-event {
      width: 75%;
      background-color: white;
      padding: 2% 3% 2% 3%;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.14);
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .rectangle-34 {
      width: 100%;
      max-width: 249px;
      height: auto;
      margin-right: 2%;
    }
    .flex-wrapper-three {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .our-first-event {
      color: gray;
    }
    .join-our-first-event-where-we-will-pres {
      height: 8%;
      width: 100%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
    .wednesday-march-1st-2023-1800-2000 {
      height: 6%;
      width: 80%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
    .read-more {
      font-family: "Inter";
      font-size: 1.5vh;
      width: 12vh;
      margin-bottom: 0;
      margin-right: 0;
      font-weight: 200;
      line-height: normal;
      color: black;
      text-decoration: underline;
      position: absolute;
      right: 0;
      bottom: 10%;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .events{
      display: none;
    }
    .events-three {
      background-color: white;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .events-two {
      font-family: "Cinzel";
      font-size: 6vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
      width: 100%;
      margin-top: 15%;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .relative-wrapper-one {
      position: relative;
    }
    .num-1st-event {
      width: 75%;
      background-color: white;
      padding: 2% 3% 2% 3%;
      margin-top: 10%;

    }
    .rectangle-34 {
      width: 25%;
      max-width: 249px;
      height: auto;
      margin-right: 2%;
      float: left;
    }
    .flex-wrapper-three {

    }
    .our-first-event {
      color: gray;
      width: 100%;
      font-size: 5vw;
      margin-top: 5%;
    }
    .join-our-first-event-where-we-will-pres {
      height: 8%;
      width: 100%;
      margin-top: 10%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: left;
      float: left;
    }
    .wednesday-march-1st-2023-1800-2000 {
      height: 100%;
      width: 100%;
      font-family: "Inter";
      font-size: 3.5vw;
      font-weight: 200;
      color: gray;
    }
    .read-more {
      font-family: "Inter";
      font-size: 2.5vw;
      width: 20vw;
      margin-bottom: 0;
      margin-right: 0;
      font-weight: 200;
      line-height: normal;
      color: black;
      text-decoration: underline;
      position: absolute;
      right: 20%
    }
  }
  </style>