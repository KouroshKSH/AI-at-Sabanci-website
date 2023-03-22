<template>
  <div id="aboutUs">
    <div v-if="!darkMode" class="our-team-three">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <b-container style="margin-top: 3%" class="flex-wrapper-three">
        <div style="margin-left: 5%;">
          <p class="our-team-two">Our Team</p>
          <div style="width: 80%; margin-left: 10%; margin-right: 10%">
            <div class="frame">
              <!--<img
                alt=""
                style="margin: 0; display:inline;"
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/6c07ba1d-0e46-4f7c-bed6-7fa69e6d7515.svg"
                @click="flipBackward()"
              />-->
              <img
                alt=""
                style="display:inline; margin-left: 5%;"
                class="rectangle-32"
                :src=currentImg
              />
              <!--<img
                alt=""
                style="margin: 0; display:inline;"
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/1a565dfe-3cde-4e60-93b1-3b242ecbf376.svg"
                @click="flipForward()"
              />-->
            </div>
          </div>
        </div>
      </b-container>
      <!--<b-container class="flex-wrapper-one">
        <b-row>
          <div class="rectangle-49">
            <img
              alt=""
              style="max-width: 100%; max-height: 90%;"
              :src=images[0]
              @click="currentImg=images[0]" 
            />
          </div>
          <div class="rectangle-49">
            <img
              alt=""
              style="max-width: 100%;"
              :src=images[1]
              @click="currentImg=images[1]" 
            />
          </div>
          <img
            alt=""
            class="rectangle-49"
            :src=images[2]
            @click="currentImg=images[2]" 
          />
          <img
            alt=""
            class="rectangle-49"
            :src=images[3]
            @click="currentImg=images[3]" 
          />
          <img
            alt=""
            class="rectangle-49"
            :src=images[4]
            @click="currentImg=images[4]" 
          />
          <div class="group-8">
            <div class="rectangle-56"></div>
            <div @click="currentImg=images[1]" class="rectangle-56"></div>
            <div @click="currentImg=images[2]" class="rectangle-56"></div>
            <div @click="currentImg=images[3]" class="rectangle-56"></div>
            <div @click="currentImg=images[4]" class="rectangle-56"></div>
          </div>
      </b-row>
      </b-container>-->
      <b-container fluid><b-row align-h="center"><div class="line-12"></div></b-row></b-container>
      <b-container>
        <p class="who-are-we">Who are We?</p>
        <p class="a-group-of-sabanci-university-students">
          A group of Sabanci University students, who are
          interested in Artificial Intelligence and want to have
          an impact on the world around them using AI.
        </p>
      </b-container>
      <b-container>
        <p class="meet-the-members">Meet the Members</p>
        <div class="members">
            <b-row class="flex-wrapper-four">
                <b-col>
                  <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.serhan_yilmaz 
                  />
                  <p class="name">Serhan Yilmaz</p>
                  <p class="name" style="font-size: 1.5vh">Club President</p>
                </b-col>
              </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    :src=memberPics.kourosh_sharifi
                  />
                  <p class="name">Kourosh Sharifi</p>
                  <p class="name" style="font-size: 1.5vh; margin-bottom: 10%">Vice President</p>
                </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.sadiq_qara
                />
                <p class="name">Sadiq Qara</p>
                <p class="name" style="font-size: 1.5vh; margin-bottom: 10%">Web Developer</p>
              </b-col> 
            </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
              <b-col align-h="center">  
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.furkan_eris
                />
                <p class="name">Furkan Eris</p>
                <p class="name" style="font-size: 1.5vh">Student Advisor</p>
              </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.ege_kaan_okalp
                />
                <p class="name">Ege Kaan Okalp</p>
                <p class="name" style="font-size: 1.5vh">Student Advisor</p>
              </b-col>
            </b-row> 
        </div><!--For wide view-->
        <div class="m-members">
            <b-row class="flex-wrapper-four">
                <b-col>
                  <img
                  alt=""
                  style="width: 40%"
                  class="ellipse-1"
                  :src=memberPics.serhan_yilmaz
                  />
                  <p class="name">Serhan Yilmaz</p>
                  <p class="name" style="font-size: 1.5vw">Club President</p>
                </b-col>
              </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    :src=memberPics.kourosh_sharifi
                  />
                  <p class="name">Kourosh Sharifi</p>
                  <p class="name" style="font-size: 1.5vw; margin-bottom: 10%">Vice President</p>
                </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.sadiq_qara
                />
                <p class="name">Sadiq Qara</p>
                <p class="name" style="font-size: 1.5vw; margin-bottom: 10%">Web Developer</p>
              </b-col> 
            </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
              <b-col align-h="center">  
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.furkan_eris
                />
                <p class="name">Furkan Eris</p>
                <p class="name" style="font-size: 1.5vw">Student Advisor</p>
              </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.ege_kaan_okalp
                />
                <p class="name">Ege Kaan Okalp</p>
                <p class="name" style="font-size: 1.5vw">Student Advisor</p>
              </b-col>
            </b-row> 
        </div><!--For mobile view-->
      </b-container>
      <b-container fluid><b-row align-h="center"><div class="line-12"></div></b-row></b-container>
      <b-container class="sponsors">
        <p class="our-sponsors">Our Sponsors</p>
        <div class="nvidia-two">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/9c709ae1-092d-46a1-b98a-ac9b39ccf93f.png"
          />
          <div class="flex-wrapper-eight-1">
            <p class="nvidia">NVIDIA</p>
            <p class="nvidia-is-a-leading-manufacturer-of-high">
              Nvidia is a leading manufacturer of high-end
              graphics processing units (GPUs) headquartered in
              Santa Clara, California.
            </p>
          </div>
        </div>
        <div class="sabanci">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/dece59b2-fe28-4231-86e5-e5dfbb56fd0b.png"
          />
          <div class="flex-wrapper-eight-1">
            <p class="nvidia">Sabancı University</p>
            <p class="sabanci-is-one-of-the-highest-ranked-uni">
              Sabanci is one of the highest ranked universities
              in Turkey, which offers courses in natural
              sciences &amp; engineering, management, and
              humanities.
            </p>
          </div>
        </div>
      </b-container><!--For wide view-->
      <b-container fluid class="m-sponsors" style="padding: 0 0 0 0">
        <p class="our-sponsors">Our Sponsors</p>
        <div class="nvidia-two">
            <p class="nvidia">NVIDIA</p>
            <img
              alt=""
              class="rectangle-59"
              src="https://static.overlay-tech.com/assets/9c709ae1-092d-46a1-b98a-ac9b39ccf93f.png"
            />
            <p class="nvidia-is-a-leading-manufacturer-of-high">
              Nvidia is a leading manufacturer of high-end
              graphics processing units (GPUs) headquartered in
              Santa Clara, California.
            </p>
        </div>
        <div class="sabanci">
          <p class="nvidia">Sabancı University</p>
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/dece59b2-fe28-4231-86e5-e5dfbb56fd0b.png"
          />
          <p class="sabanci-is-one-of-the-highest-ranked-uni">
            Sabanci is one of the highest ranked universities
            in Turkey, which offers courses in natural
            sciences &amp; engineering, management, and
            humanities.
          </p>
        </div>
      </b-container><!--For mobile view-->
    </div>
    <div v-else class="d-our-team-three">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
      <b-container style="margin-top: 3%" class="flex-wrapper-three">
        <div style="margin-left: 5%">
          <p class="d-our-team-two">Our Team</p>
          <div style="width: 80%; margin-left: 10%; margin-right: 10%">
            <div class="frame">
              <!--<img
                alt=""
                style="margin: 0; display:inline;"
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/6c07ba1d-0e46-4f7c-bed6-7fa69e6d7515.svg"
                @click="flipBackward()"
              />-->
              <img
                alt=""
                style="display:inline; margin-left: 5%"
                class="rectangle-32"
                :src=currentImg
              />
              <!--<img
                alt=""
                style="margin: 0; display:inline;"
                class="back-to-top-arrow"
                src="https://static.overlay-tech.com/assets/1a565dfe-3cde-4e60-93b1-3b242ecbf376.svg"
                @click="flipForward()"
              />-->
            </div>
          </div>
        </div>
      </b-container>
      <!--<b-container class="flex-wrapper-one">
        <b-row>
          <div class="rectangle-49">
            <img
              alt=""
              style="max-width: 100%; max-height: 90%;"
              :src=images[0]
              @click="currentImg=images[0]" 
            />
          </div>
          <div class="rectangle-49">
            <img
              alt=""
              style="max-width: 100%;"
              :src=images[1]
              @click="currentImg=images[1]" 
            />
          </div>
          <img
            alt=""
            class="rectangle-49"
            :src=images[2]
            @click="currentImg=images[2]" 
          />
          <img
            alt=""
            class="rectangle-49"
            :src=images[3]
            @click="currentImg=images[3]" 
          />
          <img
            alt=""
            class="rectangle-49"
            :src=images[4]
            @click="currentImg=images[4]" 
          />
          <div class="group-8">
            <div class="rectangle-56"></div>
            <div @click="currentImg=images[1]" class="rectangle-56"></div>
            <div @click="currentImg=images[2]" class="rectangle-56"></div>
            <div @click="currentImg=images[3]" class="rectangle-56"></div>
            <div @click="currentImg=images[4]" class="rectangle-56"></div>
          </div>
      </b-row>
      </b-container>-->
      <b-container fluid><b-row align-h="center"><div class="d-line-12"></div></b-row></b-container>
      <b-container>
        <p class="d-who-are-we">Who are We?</p>
        <p class="d-a-group-of-sabanci-university-students">
          A group of Sabanci University students, who are
          interested in Artificial Intelligence and want to have
          an impact on the world around them using AI.
        </p>
      </b-container>
      <b-container>
        <p class="d-meet-the-members">Meet the Members</p>
        <div class="members">
            <b-row class="flex-wrapper-four">
                <b-col>
                  <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.serhan_yilmaz
                  />
                  <p class="d-name">Serhan Yilmaz</p>
                  <p class="d-name" style="font-size: 1.5vh">Club President</p>
                </b-col>
              </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    :src=memberPics.kourosh_sharifi
                  />
                  <p class="d-name">Kourosh Sharifi</p>
                  <p class="d-name" style="font-size: 1.5vh; margin-bottom: 10%">Vice President</p>
                </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.sadiq_qara
                />
                <p class="d-name">Sadiq Qara</p>
                <p class="d-name" style="font-size: 1.5vh; margin-bottom: 10%">Web Developer</p>
              </b-col> 
            </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
              <b-col align-h="center">  
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.furkan_eris
                />
                <p class="d-name">Furkan Eris</p>
                <p class="d-name" style="font-size: 1.5vh">Student Advisor</p>
              </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.ege_kaan_okalp
                />
                <p class="d-name">Ege Kaan Okalp</p>
                <p class="d-name" style="font-size: 1.5vh">Student Advisor</p>
              </b-col>
            </b-row> 
        </div><!--For wide view-->
        <div class="m-members">
            <b-row class="flex-wrapper-four">
                <b-col>
                  <img
                  alt=""
                  style="width: 40%"
                  class="ellipse-1"
                  :src=memberPics.serhan_yilmaz
                  />
                  <p class="d-name">Serhan Yilmaz</p>
                  <p class="d-name" style="font-size: 1.5vw">Club President</p>
                </b-col>
              </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
                <b-col align-h="center">
                  <img
                    alt=""
                    class="ellipse-1"
                    :src=memberPics.kourosh_sharifi
                  />
                  <p class="d-name">Kourosh Sharifi</p>
                  <p class="d-name" style="font-size: 1.5vw; margin-bottom: 30%">Vice President</p>
                </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.sadiq_qara
                />
                <p class="d-name">Sadiq Qara</p>
                <p class="d-name" style="font-size: 1.5vw; margin-bottom: 30%">Web Developer</p>
              </b-col> 
            </b-row>
            <b-row align-h="center" class="flex-wrapper-six">
              <b-col align-h="center">  
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.furkan_eris
                />
                <p class="d-name">Furkan Eris</p>
                <p class="d-name" style="font-size: 1.5vw">Student Advisor</p>
              </b-col>
              <b-col align-h="center">
                <img
                  alt=""
                  class="ellipse-1"
                  :src=memberPics.ege_kaan_okalp
                />
                <p class="d-name">Ege Kaan Okalp</p>
                <p class="d-name" style="font-size: 1.5vw">Student Advisor</p>
              </b-col>
            </b-row> 
        </div><!--For mobile view-->
      </b-container>
      <b-container fluid><b-row align-h="center"><div class="d-line-12"></div></b-row></b-container>
      <b-container class="sponsors">
        <p class="d-our-sponsors">Our Sponsors</p>
        <div class="nvidia-two">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/9c709ae1-092d-46a1-b98a-ac9b39ccf93f.png"
          />
          <div class="flex-wrapper-eight-1">
            <p class="d-nvidia">NVIDIA</p>
            <p class="d-nvidia-is-a-leading-manufacturer-of-high">
              Nvidia is a leading manufacturer of high-end
              graphics processing units (GPUs) headquartered in
              Santa Clara, California.
            </p>
          </div>
        </div>
        <div class="sabanci">
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/dece59b2-fe28-4231-86e5-e5dfbb56fd0b.png"
          />
          <div class="flex-wrapper-eight-1">
            <p class="d-nvidia">Sabancı University</p>
            <p class="d-sabanci-is-one-of-the-highest-ranked-uni">
              Sabanci is one of the highest ranked universities
              in Turkey, which offers courses in natural
              sciences &amp; engineering, management, and
              humanities.
            </p>
          </div>
        </div>
      </b-container><!--For wide view-->
      <b-container fluid class="m-sponsors" style="padding: 0 0 0 0">
        <p class="d-our-sponsors">Our Sponsors</p>
        <div class="nvidia-two">
            <p class="d-nvidia">NVIDIA</p>
            <img
              alt=""
              class="rectangle-59"
              src="https://static.overlay-tech.com/assets/9c709ae1-092d-46a1-b98a-ac9b39ccf93f.png"
            />
            <p class="d-nvidia-is-a-leading-manufacturer-of-high">
              Nvidia is a leading manufacturer of high-end
              graphics processing units (GPUs) headquartered in
              Santa Clara, California.
            </p>
        </div>
        <div class="sabanci">
          <p class="d-nvidia">Sabancı University</p>
          <img
            alt=""
            class="rectangle-59"
            src="https://static.overlay-tech.com/assets/dece59b2-fe28-4231-86e5-e5dfbb56fd0b.png"
          />
          <p class="d-sabanci-is-one-of-the-highest-ranked-uni">
            Sabanci is one of the highest ranked universities
            in Turkey, which offers courses in natural
            sciences &amp; engineering, management, and
            humanities.
          </p>
        </div>
      </b-container><!--For mobile view-->
    </div>
    <b-container style="padding-bottom: 5%" fluid class="bottom-bar">
        <div class="flex-wrapper-seven-1">
              <router-link to="/contactUs"><div style="width: 100%; padding-top: 15%;"><p class="contact-us">Contact Us</p></div></router-link>
        </div>
        <a href="#aboutUs">  
          <img
            style="max-width:5%; position: absolute; right: 5%; cursor: pointer;"
            src="../assets/back to top.png"
          >
        </a>
    </b-container>
  </div>
  </template>
  
  <script>
  const groupImage = require('../assets/group image.jpeg')
  export default {
    name: "OurTeam",
    data(){
        return{
            images: [ groupImage,
                     "https://www.english.com/blog/wp-content/uploads/2019/12/digital-literacy-post.jpg",
                     "https://static.overlay-tech.com/assets/6bdae15c-7548-442c-8b45-8cd815939497.png",
                     "https://cdn.theatlantic.com/media/img/photo/2020/08/minnesota-photos/a01_1538737424-1/original.jpg",
                     "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg",
                     "https://www.english.com/4aJpzQe5ynumrv3j/assets/2018/10/academic-1132x670.jpg"
                    ],
            memberPics: {
              serhan_yilmaz: require('../assets/Serhan YILMAZ profile.jpg'),
              kourosh_sharifi: require('../assets/Kourosh Sharifi.jpg'),
              sadiq_qara: require('../assets/Sadiq Qara.jpg'),
              furkan_eris: '',
              ege_kaan_okalp: require('../assets/Ege Kaan Ozalp.jpg'),
            },
            currentImg: "",
            currentImgIdx: 0,
        }
    },
    mounted() {
        this.currentImg = this.images[0]
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
    methods: {
        flipForward(){
            this.currentImgIdx++;
            if(this.currentImgIdx==this.images.length){this.currentImgIdx=0}
            this.currentImg=this.images[this.currentImgIdx]
        },
        flipBackward(){
            this.currentImgIdx--;
            if(this.currentImgIdx==-1){this.currentImgIdx=this.images.length-1}
            this.currentImg=this.images[this.currentImgIdx]
        }
    }
  };
  </script>
  
  <style scoped>
  @media (min-aspect-ratio: 10001/10000){
    .contact-us {
      font-family: "Inter";
      font-size: 4vh;
      font-weight: 200;
      line-height: normal;
      color: rgba(255, 255, 255, 1);
      text-align: center;
    }
    .flex-wrapper-seven-1 {
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
    .flex-wrapper-seven-1 {
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

  @media (min-aspect-ratio: 10001/10000){
    .d-our-team-three {
      height: 100%;
      width: 100%;
      background-color: #242424;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .d-our-team-two {
      font-family: "Cinzel";
      font-size: 6vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
      margin-bottom: 49px;
    }
    .d-line-12 {
      width: 60%;
      height: 1px;
      background-color: white;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .d-who-are-we {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-a-group-of-sabanci-university-students {
      height: 0%;
      width: 100%;
      margin-bottom: 5%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
      text-align: center;
    }
    .d-meet-the-members {
      font-family: "Cinzel";
      font-size: 3.5vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-name {
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-our-sponsors {
      font-family: "Cinzel";
      font-size: 3.5vh;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-nvidia {
      color: white;
      margin-bottom: 13px;
    }
    .d-nvidia-is-a-leading-manufacturer-of-high {
      height: 7%;
      width: 100%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
    .d-sabanci-is-one-of-the-highest-ranked-uni {
      height: 9%;
      width: 100%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .d-our-team-three {
      height: 100%;
      width: 100%;
      background-color: #242424;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .d-our-team-two {
      font-family: "Cinzel";
      font-size: 6vw;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
      margin-bottom: 49px;
      margin-top: 15%;
    }
    .d-line-12 {
      width: 60%;
      height: 1px;
      background-color: white;
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .d-who-are-we {
      font-family: "Cinzel";
      font-size: 4vw;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-a-group-of-sabanci-university-students {
      height: 0%;
      width: 100%;
      margin-bottom: 5%;
      font-family: "Inter";
      font-size: 2vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
      text-align: center;
    }
    .d-meet-the-members {
      font-family: "Cinzel";
      font-size: 3.5vw;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-name {
      font-family: "Inter";
      font-size: 2vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-our-sponsors {
      font-family: "Cinzel";
      font-size: 3.5vw;
      font-weight: 400;
      line-height: normal;
      color: white;
      text-align: center;
    }
    .d-nvidia {
      color: white;
      margin-bottom: 1%;
      margin-left: 10%;
      font-size: 7vw
    }
    .d-nvidia-is-a-leading-manufacturer-of-high {
      height: 7%;
      width: 70%;
      margin-left: 15%;
      margin-right: 15%;
      margin-top: 5%;
      font-family: "Inter";
      font-size: 4vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
    .d-sabanci-is-one-of-the-highest-ranked-uni {
      height: 9%;
      width: 70%;
      margin-left: 15%;
      margin-right: 15%;
      margin-top: 5%;
      margin-bottom: 10%;
      font-family: "Inter";
      font-size: 4vw;
      font-weight: 200;
      line-height: normal;
      color: white;
      display: flex;
    }
  }

  @media (min-aspect-ratio: 10001/10000){
    .m-sponsors{
      display: none;
    }
    .frame{
      position: relative;
      margin: 0 auto;
      width: 100%;
      margin-left: 5%;
      margin-right: 5%;
    }
    .our-team-three {
      height: 100%;
      width: 100%;
      background-color: white;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .our-team-two {
      font-family: "Cinzel";
      font-size: 6vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
      margin-bottom: 49px;
    }
    .flex-wrapper-three {
      margin-bottom: 1%;
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
    }
    .back-to-top-arrow {
      width: 36px;
      height: 18px;
    }
    .rectangle-32 {
      width:80%;
      height:100%;
      max-width: 1011px;
      max-height: 1011px;
      margin: 0 0 0 0;
    }
    .flex-wrapper-one {
      height: 100%;
      position: relative;
    }
    .rectangle-49 {
      width: 18%;
      height: 100%;
      position: relative;
      object-fit: fill;
      margin-left: 1%;
    }
    .group-8 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .rectangle-56 {
      width: 18.5%;
      height: 100%;
      background-color: rgba(217, 217, 217, 0.5);
      margin-left: 0;
    }
    .line-12 {
      width: 60%;
      height: 1px;
      background-color: rgba(54, 54, 54, 0.5);
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .who-are-we {
      font-family: "Cinzel";
      font-size: 4vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .a-group-of-sabanci-university-students {
      height: 0%;
      width: auto;
      margin-bottom: 5%;
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
      text-align: center;
    }
    .meet-the-members {
      font-family: "Cinzel";
      font-size: 3.5vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .members {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .m-members{
      display: none;
    }
    .flex-wrapper-four {
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
      width: 100%;
    }
    .ellipse-1 {
      width: 100%;
      height: 100%;
      max-width: 198px;
      max-height: 198px;
      border-radius: 50%;
      margin: auto; 
      margin-bottom: 2%;
      display: block;
    }
    .flex-wrapper-five {
      width: 200%;
      margin-bottom: 75px;
      padding: 0 0 0 22px;
      display: flex;
      align-items: flex-start;
    }
    .name {
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .flex-wrapper-six {
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
      width: 100%;
    }
    .flex-wrapper-seven {
      padding: 0 0 0 29px;
      display: flex;
      align-items: flex-start;
    }
    .our-sponsors {
      font-family: "Cinzel";
      font-size: 3.5vh;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .nvidia-two {
      display: flex;
      align-items: flex-start;
    }
    .rectangle-59 {
      width: 100%;
      height: 100%;
      max-width: 361px;
      max-height: 164px;
      margin-right: 5%;
    }
    .flex-wrapper-eight-1 {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .nvidia {
      color: gray;
      margin-bottom: 13px;
    }
    .nvidia-is-a-leading-manufacturer-of-high {
      height: 7%;
      width: 100%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
    .sabanci {
      margin-top: 2%;
      margin-bottom: 5%;
      display: flex;
      align-items: flex-start;
    }
    .sabanci-is-one-of-the-highest-ranked-uni {
      height: 9%;
      width: 100%;
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
  }
  @media (max-aspect-ratio: 1/1){
    .sponsors{
      display: none;
    }
    .our-team-three {
      height: 100%;
      width: 100%;
      background-color: white;
      padding: 32px 0 0;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
    .our-team-two {
      font-family: "Cinzel";
      font-size: 6vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
      margin-bottom: 49px;
      margin-top: 15%;
    }
    .flex-wrapper-three {
      margin-bottom: 1%;
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
    }
    .back-to-top-arrow {
      width: 30;
      height: 15px;
    }
    .rectangle-32 {
      width:80%;
      height:80%;
      max-width: 1011px;
      max-height: 1011px;
      margin-left: 6%;
      margin-right: 6%;
    }
    .flex-wrapper-one {
      height: 100%;
      position: relative;
    }
    .rectangle-49 {
      width: 0px;
      height: 0px;
      position: relative;
      margin-left: 1%;
      overflow: hidden;
    }
    .group-8 {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-start;
      position: relative;
    }
    .rectangle-56 {
      width: 18.5%;
      height: 100%;
      background-color: rgba(217, 217, 217, 0.5);
      margin-left: 0;
    }
    .line-12 {
      width: 60%;
      height: 1px;
      background-color: rgba(54, 54, 54, 0.5);
      margin-top: 3%;
      margin-bottom: 3%;
    }
    .who-are-we {
      font-family: "Cinzel";
      font-size: 4vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .a-group-of-sabanci-university-students {
      height: 0%;
      width: 100%;
      margin-bottom: 5%;
      font-family: "Inter";
      font-size: 2vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
      text-align: center;
    }
    .meet-the-members {
      font-family: "Cinzel";
      font-size: 3.5vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .members {
      display: none
    }
    .m-members{
      width: 80%;
      margin-left: 15%;
      margin-right: 5%;
    }
    .flex-wrapper-four {
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
      width: 90%;
    }
    .ellipse-1 {
      width: 80%;
      height: 80%;
      max-width: 198px;
      max-height: 198px;
      border-radius: 50%;
      margin: auto; 
      margin-bottom: 2%;
      display: block;
    }
    .flex-wrapper-five {
      width: 200%;
      margin-bottom: 75px;
      padding: 0 0 0 22px;
      display: flex;
      align-items: flex-start;
    }
    .name {
      font-family: "Inter";
      font-size: 2vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .flex-wrapper-six {
      padding: 0 0 0 0px;
      display: flex;
      align-items: flex-start;
      width: 90%;
    }
    .flex-wrapper-seven {
      padding: 0 0 0 29px;
      display: flex;
      align-items: flex-start;
    }
    .our-sponsors {
      font-family: "Cinzel";
      font-size: 3.5vw;
      font-weight: 400;
      line-height: normal;
      color: gray;
      text-align: center;
    }
    .nvidia-two {
    }
    .rectangle-59 {
      width: 100%;
      height: 100%;
      padding: 0 0 0 0;
    }
    .flex-wrapper-eight-1 {

    }
    .nvidia {
      color: black;
      margin-bottom: 1%;
      margin-left: 10%;
      font-size: 7vw
    }
    .nvidia-is-a-leading-manufacturer-of-high {
      height: 7%;
      width: 70%;
      margin-left: 15%;
      margin-right: 15%;
      margin-top: 5%;
      font-family: "Inter";
      font-size: 4vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
    .sabanci {
      margin-top: 10%;
      margin-bottom: 5%;
    }
    .sabanci-is-one-of-the-highest-ranked-uni {
      height: 9%;
      width: 70%;
      margin-left: 15%;
      margin-right: 15%;
      margin-top: 5%;
      margin-bottom: 10%;
      font-family: "Inter";
      font-size: 4vw;
      font-weight: 200;
      line-height: normal;
      color: gray;
      display: flex;
    }
  }
  </style>