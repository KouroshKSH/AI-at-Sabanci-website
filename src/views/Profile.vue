<template>
    <div style="min-height: 100vh" :class="{ 'dark-background': darkMode }" id="profile">
      <b-container fluid class="flex-wrapper-four" style="margin-bottom: 0">
        <router-link v-if="$store.state.user.admin" style="margin-top: 5%; margin-right: 3%" to="/adminPage">Admin page</router-link>
        <div style="cursor: pointer; margin-top: 5%; width: 10%; margin-left: 0%;" :class="{ 'white-text': darkMode }"  @click="logout()" >Logout</div>
      </b-container>
      <b-container fluid class="flex-wrapper-four">
        <p :class="{ 'white-text': darkMode }" class="your-profile" style="margin-top: 5%">Welcome back {{$store.state.user.firstName}}</p>
      </b-container>
      <b-container fluid align-h="center" class="flex-wrapper-five">
        <b-col class="events-two">
            <p class="registered-events">Registered Events</p>
            <div class="flex-wrapper-one">
              <p
                class="you-can-check-your-upcoming-events-from"
              >
                You can check your upcoming events from here,
                and don’t forget to check future events.
              </p>

            <div class="events-arrow-two">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/e651871b-f595-4234-9112-ca50a105f867.svg"
              />
            </div>
          </div>
        </b-col>
        <b-col class="certs">
          <p class="registered-events">Certificates</p>
          <div class="flex-wrapper-one">
            <p
              class="see-all-the-certificates-youve-acquired"
            >
              See all the certificates you’ve acquired in the
              club.
            </p>
            <div class="events-arrow-three">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/3abc951c-645c-4751-80a6-cbad50d6b7c0.svg"
              />
            </div>
          </div>
        </b-col>
        <b-col class="sub">
          <p class="registered-events">Submissions</p>
          <div class="flex-wrapper-one">
            <p
              class="see-all-the-certificates-youve-acquired"
            >
              Upload, edit, and submit your code for the
              projects or competitions that you’ve joined.
            </p>
            <div class="events-arrow-four">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/5496900b-64bd-49bd-917e-d9c4fb2c73d5.svg"
              />
            </div>
          </div>
        </b-col>
      </b-container>
      <b-container fluid class="flex-wrapper-six">
        <b-col class="props">
          <p class="registered-events">
            Pending Project Proposals
          </p>
          <div class="flex-wrapper-one">
            <p
              class="see-all-the-certificates-youve-acquired"
            >
              Follow up with your project proposals from here.
            </p>
            <div class="events-arrow-five">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/5cdcf0c9-e53a-4ecd-9c6f-b4ca366f9536.svg"
              />
            </div>
          </div>
        </b-col>
        <b-col class="join">
          <p class="registered-events">
            Project Join Requests
          </p>
          <div class="flex-wrapper-one">
            <p
              class="see-all-the-certificates-youve-acquired"
            >
              Request to join whatever project you’re
              interested in.
            </p>
            <div class="events-arrow-six">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/6810c840-5662-45f5-aef3-c40e51208c37.svg"
              />
            </div>
          </div>
        </b-col>
        <b-col class="settings">
          <p class="registered-events">Profile Settings</p>
          <div class="flex-wrapper-one">
            <p
              class="see-all-the-certificates-youve-acquired"
            >
              You can view and edit your profile information
              from here.
            </p>
            <div class="events-arrow-five">
              <img
                alt=""
                class="events-arrow"
                src="https://static.overlay-tech.com/assets/43511f7f-77f7-4eab-955e-f146b8338187.svg"
              />
            </div>
          </div>
        </b-col>
      </b-container>
    </div>
</template>
  
  <script>
  import store from '@/store/index';
  export default {
    name: "ProfilePageDefault",
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      }
    },
    methods: {
      logout(){
        store.dispatch('logout')
      }
    },
  };
  
  </script>
  
  <style scoped>
  .dark-background {
    background-color: #242424;
  }
  .white-text {
    color: white !important;
  }
  .profile-page-default {
    background-color: white;
    padding: 32px 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .flex-wrapper-four {
    margin-bottom: 5%;
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .your-profile {
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
  }
  .flex-wrapper-five {
    margin-bottom: 3%;
    width: 80%;
    height: 50%;
    display: flex;
    align-items: flex-start;
  }
  .relative-wrapper-four {
    margin-right: 99px;
    position: relative;
  }
  .events-two {
    background: linear-gradient(
      122deg,
      rgba(232, 123, 77, 1) 0%,
      rgba(231, 80, 15, 1) 100%
    );
    border-radius: 15px;
    height: 100%;
    padding: 3% 7% 1.3% 7%;
    margin-right: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .registered-events {
    font-family: "Inter";
    font-size: 2.5vh;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 100%;
    color: white;
    margin-bottom: 2vh;
  }
  .you-can-check-your-upcoming-events-from {
    height: 100%;
    width: 100%;
    margin-bottom: 20%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
  }
  .events-arrow-two {
    padding: 1% 1% 1% 1%;
    display: flex;
    align-items: center;
    position: absolute;
    right: -25%;
    bottom: 5%;
  }
  .events-arrow {
    width: 100%;
    max-width: 26px;
    max-height: 16px;
  }
  .certs {
    background: linear-gradient(
      122deg,
      rgba(112, 227, 94, 1) 0%,
      rgba(53, 158, 36, 1) 100%
    );
    border-radius: 15px;
    padding: 3% 7% 3% 7%;
    margin-right: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .flex-wrapper-one {
    position: relative;
  }
  .see-all-the-certificates-youve-acquired {
    height: 100%;
    width: 100%;
    margin-bottom: 20%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    position: relative;
  }
  .events-arrow-three {
    padding: 1% 1% 1% 1%;
    display: flex;
    align-items: center;
    position: absolute;
    right: -25%;
    bottom: -15%;
  }
  .sub {
    background: linear-gradient(
      122deg,
      rgba(57, 166, 227, 1) 0%,
      rgba(24, 104, 149, 1) 100%
    );
    border-radius: 15px;
    padding: 3% 7% 1.3% 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .events-arrow-four {
    padding: 1% 1% 1% 1%;
    display: flex;
    align-items: center;
    position: absolute;
    right: -25%;
    bottom: 5%;
  }
  .flex-wrapper-six {
    margin-bottom: 3%;
    width: 80%;
    display: flex;
    align-items: flex-start;
  }
  .props {
    background: linear-gradient(
      122deg,
      rgba(100, 126, 220, 1) 0%,
      rgba(32, 30, 129, 1) 100%
    );
    border-radius: 15px;
    padding: 3% 7% 1% 7%;
    margin-right: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .events-arrow-five {
    padding: 1% 1% 1% 1%;
    display: flex;
    align-items: center;
    position: absolute;
    right: -25%;
    bottom: 5%;
  }
  .join {
    background: linear-gradient(
      122deg,
      rgba(216, 93, 93, 1) 0%,
      rgba(166, 14, 14, 1) 100%
    );
    border-radius: 15px;
    padding: 3% 7% 1% 7%;
    margin-right: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .events-arrow-six {
    padding: 1% 1% 1% 1%;
    display: flex;
    align-items: center;
    position: absolute;
    right: -25%;
    bottom: 5%;
  }
  .settings {
    background: linear-gradient(
      122deg,
      rgba(205, 105, 240, 1) 0%,
      rgba(110, 19, 153, 1) 100%,
      rgba(103, 25, 140, 1) 100%
    );
    border-radius: 15px;
    padding: 3% 7% 3% 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  </style>