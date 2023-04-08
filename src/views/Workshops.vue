<template>
  <div class="bg" id="workshops">
    <div v-if="!darkMode" class="workshops-two" style="width: 100%">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div style="width: 100%; margin-top: 3%;">
          <b-container fluid>
            <b-row align-h="center">
              <b-col align-self="center">
                <p class="educational-workshops">
                    Educatıonal Workshops
                </p>
                <p class="lorem-ipsum-dolor-sit-amet-consectetur">
                  Our workshops are designed to provide hands-on experience and practical knowledge to help individuals elevate their AI/ML skills and drive innovation in the field. With a focus on real-world applications, our workshops are tailored to meet the needs of learners of all levels, encouraging collaboration and critical thinking and enabling participants to take on real-world challenges.
                </p>
              </b-col>
            </b-row>
          </b-container>
          <div style="margin-top: 3%; width: 100%" v-for="(workshop, i) in workshops">  
              <div v-if="i%2==0">
                  <b-container class="relative-wrapper-one" fluid style="padding: 0 0 0 0">
                      <div class="dl">
                          <img
                              alt=""
                              class="rectangle-66"
                              :src= workshop.img
                          />
                          <div class="flex-wrapper-two">
                              <p class="deep-learning">{{ workshop.name }}</p>
                              <p
                              style="white-space: pre-line;"
                              class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                              >
                                  {{message[i] }}

                              </p>
                              <div v-if="!extended[i]" style="cursor: pointer;" @click="extend(i)" class="more-two">
                                  <img
                                      alt=""
                                      class="union"
                                      :src=downArrow
                                  />
                                  <p class="more">More</p>
                              </div>
                              <div v-else style="cursor: pointer;" @click="shorten(i)" class="more-two">
                                  <img
                                  alt=""
                                  class="union"
                                  :src=upArrow
                                  />
                                  <p class="more">Less</p>
                              </div>
                          </div>
                      </div>
                      <div class="rectangle-90"></div>
                  </b-container>
                  
              </div>
              <div v-else>
                  <b-container fluid style="padding: 0 0 0 0;">
                    <div class="hpc">
                      <img
                            alt=""
                            class="rectangle-67"
                            :src=workshop.img
                        />
                        <div class="flex-wrapper-three">
                            <p class="deep-learning-1">
                                {{ workshop.name }}
                            </p>
                            <p
                                style="white-space: pre-line;"
                                class="lorem-ipsum-dolor-sit-amet-consectetur-three"
                            >
                                {{ message[i] }}
                            </p>
                            <div v-if="!extended[i]" style="cursor: pointer;" @click="extend(i)" class="more-three">
                                <img
                                    alt=""
                                    class="union"
                                    :src=downArrow
                                />
                                <p class="more">More</p>
                            </div>
                            <div v-else style="cursor: pointer;" @click="shorten(i)" class="more-three">
                                <img
                                alt=""
                                class="union"
                                :src=upArrow
                                />
                                <p class="more">Less</p>
                            </div>
                        </div>
                      </div>
                  </b-container>
              </div>
          </div>
          <div>
              <b-container fluid class="relative-wrapper-one" style="padding: 0 0 0 0">
                  <div class="dl">
                    <img
                        alt=""
                        class="rectangle-66"
                        src="https://static.overlay-tech.com/assets/a77e414f-333f-4f60-9035-632fcc5837c3.png"
                    />
                    <div class="flex-wrapper-two">
                        <p class="deep-learning">Have more ideas?</p>
                        <p
                            class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                        >
                          If you have more ideas for our workshops, feel free to let us know. 
                          Any suggestion is more than welcome!
                        </p>
                    </div>
                      <router-link to="contactUs">
                          <img
                          src="../assets/submit button.png"
                          class="yes-i-do"
                        >
                      </router-link>
                      <p class="eyes">👀</p>
                  </div>
              </b-container>
          </div>
          <b-container fluid style="margin-bottom: 5%; margin-top: 20%">
            <div>    
              <p class="want-to-attend-these" style="text-align: center;">
                  Want to Attend These?
              </p>
            </div>
            <router-link to="/applicationForm">
              <div class="submit-button">
                  <p class="click-here">Click Here</p>
              </div>
            </router-link>
          </b-container>
        </div>
    </div>
    <div v-else class="workshops-two" style="width: 100%; background-color: #242424;">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <div style="width: 100%; margin-top: 3%;">
          <b-container fluid>
            <b-row align-h="center">
              <b-col align-self="center">
                <p class="d-educational-workshops">
                    Educatıonal Workshops
                </p>
                <p class="d-lorem-ipsum-dolor-sit-amet-consectetur">
                  Our workshops are designed to provide hands-on experience and practical knowledge to help individuals elevate their AI/ML skills and drive innovation in the field. With a focus on real-world applications, our workshops are tailored to meet the needs of learners of all levels, encouraging collaboration and critical thinking and enabling participants to take on real-world challenges.
                </p>
              </b-col>
            </b-row>
          </b-container>
          <div style="margin-top: 3%; width: 100%" v-for="(workshop, i) in workshops">  
              <div v-if="i%2==0">
                  <b-container fluid class="relative-wrapper-one" style="padding: 0 0 0 0">
                      <div class="dl">
                          <img
                              alt=""
                              class="rectangle-66"
                              :src= workshop.img
                          />
                          <div class="flex-wrapper-two">
                              <p class="d-deep-learning">{{ workshop.name }}</p>
                              <p
                              style="white-space: pre-line"
                              class="d-lorem-ipsum-dolor-sit-amet-consectetur-two"
                              >
                                  {{ message[i] }}

                              </p>
                              <div v-if="!extended[i]" @click="extend(i)" style="cursor: pointer;" class="more-two">
                                  <img
                                      alt=""
                                      class="union"
                                      src="../assets/Union.png"
                                  />
                                  <p class="d-more">More</p>
                              </div>
                              <div v-else @click="shorten(i)" style="cursor: pointer" class="more-two">
                                  <img
                                    alt=""
                                    class="union"
                                    src="../assets/Union (1).png"
                                  />
                                  <p class="d-more">Less</p>
                              </div>
                          </div>
                      </div>
                      <div class="rectangle-90"></div>
                  </b-container>
                  
              </div>
              <div v-else>
                  <b-container fluid style="padding: 0 0 0 0">
                    <div class="hpc">  
                      <img
                            alt=""
                            class="rectangle-67"
                            :src=workshop.img
                        />
                      <div class="flex-wrapper-three">
                          <p class="d-deep-learning-1">
                              {{ workshop.name }}
                          </p>
                          <p
                            style="white-space: pre-line"
                            class="d-lorem-ipsum-dolor-sit-amet-consectetur-three"
                          >
                              {{ message[i] }}
                          </p>
                          <div v-if="!extended[i]" @click="extend(i)" class="more-three">
                              <img
                                  alt=""
                                  class="union"
                                  src="../assets/Union.png"
                              />
                              <p class="d-more">More</p>
                          </div>
                          <div v-else @click="shorten(i)" class="more-three">
                              <img
                                  alt=""
                                  class="union"
                                  src="../assets/Union (1).png"
                              />
                              <p class="d-more">Less</p>
                          </div>
                      </div>
                    </div> 
                  </b-container>
              </div>
          </div>
          <div>
              <b-container fluid class="relative-wrapper-one" style="padding: 0 0 0 0">
                  <div class="dl">
                    <img
                        alt=""
                        class="rectangle-66"
                        src="https://static.overlay-tech.com/assets/a77e414f-333f-4f60-9035-632fcc5837c3.png"
                    />
                    <div class="flex-wrapper-two">
                        <p class="d-deep-learning">Have more ideas?</p>
                        <p
                            class="d-lorem-ipsum-dolor-sit-amet-consectetur-two"
                        >
                          If you have more ideas for our workshops, feel free to let us know. 
                          Any suggestion is more than welcome!
                        </p>
                    </div>
                      <router-link to="/contactUs">
                        <img
                          src="../assets/submit button (1).png"
                          class="yes-i-do"
                        >
                      </router-link>
                      <p class="eyes">👀</p>
                  </div>
              </b-container>
          </div>
          <b-container fluid style="margin-bottom: 5%; margin-top: 20%">
            <b-row>    
              <p class="d-want-to-attend-these" style="text-align: center;">
                  Want to Attend These?
              </p>
            </b-row>
            <router-link to="/applicationForm">
              <div class="d-submit-button">
                  <p class="d-click-here">Click Here</p>
              </div>
            </router-link>
          </b-container>
        </div>
    </div>
    <b-container style="padding-bottom: 5%;" fluid class="bottom-bar">
        <div class="flex-wrapper-seven">
              <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%"><p class="contact-us">Contact Us</p></div></router-link>
        </div>
        <a @click="scrollUp()">  
          <img
            class="backToTop"
            src="../assets/back to top.png"
          >
        </a>
    </b-container>
  </div>
</template>
  
  <script>
  export default {
    //name: "Workshops",
    data(){
        return {
            upArrow: "https://static.overlay-tech.com/assets/192f6f3f-feb2-4a2c-a55f-77d774d83639.svg",
            downArrow: "https://static.overlay-tech.com/assets/37fa9443-f430-4ee9-bc4b-34aeb416ebda.svg",
            whiteUpArrow: "../assets/Union (1).png",
            whiteDownArrow: "../assets/Union.png",
            extended: [],
            //showMore1: false,
            message: [],
            workshops: [{
                name: "Speech AI",
                shortText: "Speech AI, also known as automatic speech recognition (ASR), is a technology that enables machines to recognize and understand human speech. This technology uses complex algorithms and statistical models to analyze audio signals and convert them into text, which can then be processed and analyzed by computers",
                longText: "Speech AI, also known as automatic speech recognition (ASR), is a technology that enables machines to recognize and understand human speech. This technology uses complex algorithms and statistical models to analyze audio signals and convert them into text, which can then be processed and analyzed by computers.\n\nComputer speech AI has a wide range of applications, from speech-to-text transcription services and virtual assistants to automated customer service systems and speech-enabled smart home devices. With the advancements in artificial intelligence, computer speech AI has become more accurate and efficient, making it an essential technology in today's digital world.\n\nIn this workshop, you will learn about the various techniques and tools used in computer speech AI, such as deep learning, neural networks, and natural language processing. You will also learn how to build and train your own speech recognition models using popular frameworks such as TensorFlow and PyTorch.\n\nWhether you're a software developer, data scientist, or just interested in exploring the fascinating world of artificial intelligence, this workshop will provide you with a comprehensive understanding of computer speech AI and its applications. You'll gain practical skills that you can apply to real-world projects, and you'll leave the workshop with a deeper understanding of how this technology is transforming the way we interact with machines.",
                img: "https://developer-blogs.nvidia.com/wp-content/uploads/2022/06/ai-for-dev-blog-green-neon-wave-1600x950-2.jpg"

            }, {
                name: "Computer Vision",
                shortText: "Step into the captivating world of computer vision with our immersive workshop designed to introduce you to the fascinating interplay between algorithms and visual data. Over the course of this workshop, you'll learn the basics of computer vision, explore cutting-edge techniques and dive deep into hands-on labs that will sharpen your skills and enhance your knowledge.",
                longText: "Step into the captivating world of computer vision with our immersive workshop designed to introduce you to the fascinating interplay between algorithms and visual data. Over the course of this workshop, you'll learn the basics of computer vision, explore cutting-edge techniques and dive deep into hands-on labs that will sharpen your skills and enhance your knowledge.\n\nOur workshop is crafted to provide a comprehensive overview of the field, starting with the fundamentals of image processing and building up to the latest deep learning algorithms.\nYou'll delve into the core concepts of feature detection, object recognition, and segmentation, and gain an understanding of how these methods are used in real-world applications like self-driving cars, facial recognition systems, and robotics.\n\nIn this workshop, we put a strong emphasis on experiential learning.\nYou'll work with industry-standard tools and techniques, like OpenCV, TensorFlow, Keras, and PyTorch, to train and test machine learning models on various datasets.\n\nBy the end of this workshop, you'll have the knowledge and confidence to create exciting computer vision applications and solutions that make an impact in your industry.\nExperience the thrill of diving into the fascinating field of computer vision with our workshop, which promises to leave you enriched, empowered, and inspired to take on the next big challenge." ,
                img: "https://i.pcmag.com/imagery/articles/061CyMCZV6G2sXUmreKHvXS-1..v1581020108.jpg",
            },], 
        }
    },
    mounted(){
        for(let i=0; i < this.workshops.length; i++){
            this.message.push(this.workshops[i].shortText);
            this.extended.push(false)
        }
        
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
    methods: {
        extend(i){
            this.extended[i]=true; 
            this.$set(this.message, i, this.workshops[i].longText)
            this.message[i]=this.workshops[i].longText;
            this.getMessage(i)
        },
        shorten(i){
            this.extended[i]=false;
            this.$set(this.message, i, this.workshops[i].shortText)
            this.message[i]=this.workshops[i].shortText;
            this.getMessage(i)
        },
        getMessage(i){return this.message[i]},
        scrollUp() {
          window.scrollTo({
            top: window.pageYOffset - (window.innerHeight * 4),
            behavior: 'smooth'
          });
        }
    }
  };
  
  </script>
  
  <style scoped>
  html { scroll-behavior: smooth; width: 100%}

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
  .workshops-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-educational-workshops {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: center;
  }
  .d-deep-learning {
    color: white;
    margin-bottom: 16px;
    /*@include inter-36-medium;*/
  }
  .d-deep-learning-1 {
    color: white;
    margin-bottom: 16px;
    margin-left: 20%;
    /*@include inter-36-medium;*/
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: auto;
    width: 80%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: justify;
  }
  .d-more {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: white;
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: auto;
    width: 80%;
    margin-left: 20%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: justify;
  }
  .d-want-to-attend-these {
    color: white;
    text-align: center;
    margin-bottom: 3vh;
    font-size: 3vw;
    margin-left: 0%;
    margin-top: 0%;
    /*@include inter-36-regular;*/
  }
}
@media (max-aspect-ratio: 1/1){
  .workshops-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-educational-workshops {
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 15%;
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur {
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: left;
  }
  .d-deep-learning {
    color: white;
    margin-bottom: 16px;
    margin-left: 5%;
    font-size: 7vw;
    font-weight: 500;
    /*@include inter-36-medium;*/
  }
  .d-deep-learning-1 {
    color: white;
    margin-bottom: 16px;
    margin-left: 5%;
    font-size: 7vw;
    font-weight: 500;
    /*@include inter-36-medium;*/
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: auto;
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgb(200, 200, 200);
    text-align: justify;
  }
  .d-more {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: white;
  }
  .d-lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: auto;
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: rgb(200,200,200);
    text-align: justify;
  }
  .d-want-to-attend-these {
    color: white;
    text-align: center;
    margin-bottom: 3vw;
    font-size: 5vw;
    margin-left: 0%;
    margin-top: 0%;
    /*@include inter-36-regular;*/
  }
}

@media (min-aspect-ratio: 1/1){
  .workshops-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media (min-aspect-ratio: 1/1){
    .educational-workshops {
      font-family: "Cinzel";
      font-size: 5vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .educational-workshops {
      font-family: "Cinzel";
      font-size: 5vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
      margin-top: 5%;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
      width: 100%;
      font-family: "Inter";
      font-size: 2vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
  }
  .relative-wrapper-one {
    position: relative;
  }
  .yes-i-do{
    width: 15%; 
    float: right; 
    margin-right: 10%
  }
  .eyes {
    right: 12%; 
    margin-top: 2%; 
    font-size: 2vw; 
    position: absolute
  }
  .dl {
    position: relative;
    margin-left: 11.5%;
    margin-top: 10%;
  }
  .rectangle-66 {
    width: 30%;
    margin-right: 5%;
    max-width: 476px;
    float: left;
  }
  @media (min-aspect-ratio: 1/1){
    .flex-wrapper-two {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .flex-wrapper-two {
      align-items: flex-start;
    }
  }
  .deep-learning {
    color: gray;
    margin-bottom: 16px;
    font-size: 1.5vh
    /*@include inter-36-medium;*/
  }
  .deep-learning-1 {
    color: gray;
    margin-bottom: 16px;
    font-size: 1.5vh;
    margin-left: 20%;
    /*@include inter-36-medium;*/
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: auto;
    width: 80%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: justify;
  }
  .rectangle-90 {
    background: linear-gradient(
      90deg,
      white 2%,
      white 100%
    );
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .more-two {
    display: flex;
    align-items: flex-start;
    position: absolute;
    right: 14%;
    bottom: -25%
  }
  .union {
    width: 17.17px;
    height: 9.59px;
    margin-top: 7.5px;
    margin-right: 4.83px;
  }
  .more {
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 200;
    line-height: normal;
    color: black;
  }
  .hpc {
    margin-top: 10%;
    margin-right: 10%;
    position: relative;
  }
  @media (min-aspect-ratio: 1/1){
    .flex-wrapper-three {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .flex-wrapper-three {
      align-items: flex-start;
    }
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: auto;
    width: 80%;
    margin-left: 20%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: justify;
  }
  .rectangle-67 {
    width: 30%;
    margin-left: 5%;
    float: right;
  }
  .more-three {
    display: flex;
    align-items: flex-start;
    position: absolute;
    right: 36%;
    bottom: -25%;
  }
  .more-ideas {
    margin-bottom: 164px;
    margin-left: 246px;
    display: flex;
    align-items: flex-start;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-four {
    width: 90%;
    font-family: "Inter";
    font-size: 24px;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .want-to-attend-these {
    color: gray;
    text-align: center;
    margin-bottom: 3vh;
    font-size: 3vw;
    margin-left: 0%;
    margin-top: 0%;
    /*@include inter-36-regular;*/
  }
  .backToTop {
    max-width: 5%;
    position: absolute;
    right: 5%; 
    cursor: pointer;
  }
}
@media (max-aspect-ratio: 1/1){
  .workshops-two {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .educational-workshops {
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 15%;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur {
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: left;
  }
  .relative-wrapper-one {
    position: relative;
    width: 100%;
  }
  .dl {
    position: relative;
    width: 100%;
  }
  .yes-i-do{
    width: 30%; 
    float: right; 
    margin-right: 10%
  }
  .eyes {
    right: 15%; 
    margin-top: 2%; 
    font-size: 4vw; 
    position: absolute
  }
  .rectangle-66 {
    width: 100%;
    float: left;
    margin-bottom: 2%;
  }
  .flex-wrapper-two {
    align-items: flex-start;
  }
  .deep-learning {
    color: black;
    margin-bottom: 16px;
    margin-left: 5%;
    font-size: 7vw;
    font-weight: 500;
    /*@include inter-36-medium;*/
  }
  .deep-learning-1 {
    color: black;
    margin-bottom: 16px;
    margin-left: 5%;
    font-size: 7vw;
    font-weight: 500;
    /*@include inter-36-medium;*/
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: auto;
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: justify;
  }
  .rectangle-90 {
    background: linear-gradient(
      90deg,
      white 2%,
      white 100%
    );
    position: absolute;
    right: 0;
    bottom: 6px;
  }
  .more-two {
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
    display: flex;
    align-items: flex-start;
    text-align: center;
  }
  .union {
    width: 100%;
    max-width: 17.17px;
    max-height: 9.59px;
    margin-top: 5%;
    margin-right: 5%;
  }
  .more {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 200;
    line-height: normal;
    color: black;
  }    
  .flex-wrapper-three {
    align-items: flex-start;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: auto;
    width: 80%;
    margin-left: 5%;
    margin-right: 15%;
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    text-align: justify;
  }
  .rectangle-67 {
    width: 100%;
    float: right;
    margin-bottom: 2%;
  }
  .more-two {
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
    display: flex;
    align-items: flex-start;
    text-align: center;
  }
  .more-three {
    width: 10%;
    margin-left: 45%;
    margin-right: 45%;
    display: flex;
    align-items: flex-start;
  }
  .more-ideas {
    display: flex;
    align-items: flex-start;
  }
  .lorem-ipsum-dolor-sit-amet-consectetur-four {
    width: 100%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: gray;
    display: flex;
  }
  .want-to-attend-these {
    color: gray;
    text-align: center;
    margin-bottom: 3vw;
    font-size: 5vw;
    margin-left: 10%;
    width: 80%;

    /*@include inter-36-regular;*/
  }
  .backToTop {
    max-width: 15%;
    position: absolute;
    right: 5%; 
    bottom: 10%;
    cursor: pointer;
  }
}
  </style>