<template>
  <div>
    <div v-if="!darkMode" class="chat-box-page">
        <div class="bg-blur" v-if="showLegalStuff">
          <div class="legal-text">
            <div class="terms-of-use">Terms of Use</div>
            <div class="the-terms">
              1. Acceptance of Terms: By using the website, the user agrees to the terms and conditions outlined in the Terms of Use. <br>
              2. User Conduct: Users must agree to use the website only for lawful purposes and must not engage in any behavior that could damage, disable, overburden, or impair the website's functionality. <br>
              3. Intellectual Property: All text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations on the website are the property of the website owner or its content suppliers and are protected by copyright laws. <br>
              4. Disclaimer of Warranties: The website owner makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website. <br>
              5. Limitation of Liability: The website owner shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the website. <br>
              6. Indemnification: Users agree to indemnify and hold harmless the website owner, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, actions, suits, or proceedings, as well as any and all losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with the user's use of the website. <br>
              7. Termination: The website owner may terminate a user's access to the website at any time and for any reason, without prior notice. <br>
              8. Governing Law: The Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which the website owner is located.
            </div>
            <b-button class="i-understand" @click="showLegalStuff=false">I understand.</b-button>
          </div>      
        </div>
        <div style="padding-top: 0%; width: 100%; height: 100%; ">
          <img
            @click="showMenu=true"
            class="menuButton"
            v-if="!showMenu"
            src="../assets/menu button (2).png"
          >
          <div class="flex-wrapper-two" style="position:fixed">
            <b-container @click="newChat()" style="z-index: 1; width: 80%; margin-right: 15%; height: auto" fluid class="flex-wrapper-three">
                <p class="new-chat">&#43; New Chat</p>
            </b-container>
            <b-container fluid style="width: 15%; position: fixed; height: 80%; overflow-y: auto; padding-top: 5%; background-color: rgba(244, 244, 244, 1);">
              <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                <div class="flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="$store.commit('setCurrentHistory', i-1)">
                  <div class="flex-wrapper-six">
                    <img
                      v-if="historyTitles[i-1]" 
                      alt=""
                      class="vector-5"
                      src="https://static.overlay-tech.com/assets/bec070a2-32be-494f-8efb-c9c72322c75e.svg"
                    />
                    <p style="width:100%" class="python-code">{{ historyTitles[i-1] }}</p>
                  </div>
                </div>
              </div>
            </b-container>
            <b-container fluid style="position: fixed; bottom: 0; background-color: rgba(244, 244, 244, 1); width: 15%; max-height: 40%">
              <div class="split-line"></div>
              <div @click="$store.commit('clearChats')" class="clear-chats-two">
                  <p class="clear-chats">🚮&nbsp;</p>
                  <p class="clear-chats">Clear chats</p>
              </div>
              <div v-if="chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Turn off flirty mode</p>
              </div>
              <div v-if="!chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Turn on flirty mode</p>
              </div>
              <div v-if="isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">Switch to GPT-3.5</p>
              </div>
              <div v-if="!isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">Switch to GPT-4</p>
              </div>
              <!--<div class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">FAQs</p>
              </div>-->
              <router-link to="/contactUs" class="clear-chats-two">
                  <p class="clear-chats">📬&nbsp;</p>
                  <p class="clear-chats">Contact Us</p>
              </router-link>
            </b-container>
          </div>
          <div v-if="showMenu" class="m-flex-wrapper-two" style="position:fixed">
            <img
              @click="showMenu=false"
              style="position: absolute; right: 0%; top: 45%; width: 20%"
              v-if="showMenu"
              src="../assets/close button (1).png"
            >
            <b-container fluid style="width: 70%; position: fixed; height: 70%; overflow-y: auto; padding-top: 5%; background-color: rgba(244, 244, 244, 1);">
              <b-container @click="newChat()" style="z-index: 1; width: 60%; height: auto; float: left; position: fixed;" fluid class="flex-wrapper-three">
                <p class="new-chat">&#43; New Chat</p>
              </b-container>
              <div style="margin-top: 35%;">
                <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                  <div class="flex-wrapper-five" style="width: 100%; cursor: pointer; z-index: 2;" @click="$store.commit('setCurrentHistory', i-1)">
                    <div class="flex-wrapper-six">
                      <img
                        v-if="historyTitles[i-1]" 
                        alt=""
                        class="vector-5"
                        src="https://static.overlay-tech.com/assets/bec070a2-32be-494f-8efb-c9c72322c75e.svg"
                      />
                      <p style="width:100%" class="python-code">{{ historyTitles[i-1] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-container>
            <b-container fluid style="position: fixed; bottom: 0; background-color: rgba(244, 244, 244, 1); width: 70%; height: 30%">
              <div class="split-line"></div>
              <div @click="$store.commit('clearChats')" class="clear-chats-two">
                  <p class="clear-chats">🚮&nbsp;</p>
                  <p class="clear-chats">Clear chats</p>
              </div>
              <div v-if="chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Turn off flirty mode</p>
              </div>
              <div v-if="!chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Turn on flirty mode</p>
              </div>
              <div v-if="isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">Switch to GPT-3.5</p>
              </div>
              <div v-if="!isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">Switch to GPT-4</p>
              </div>
              <!--<div class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">FAQs</p>
              </div>-->
              <router-link to="/contactUs" class="clear-chats-two">
                  <p class="clear-chats">📬&nbsp;</p>
                  <p class="clear-chats">Contact Us</p>
              </router-link>
            </b-container>
          </div>
          <b-container class="chat" style="width: 70%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==1" fluid class="group-38">
                <b-row align-h="center"><p class="su-chat">ChatSU</p></b-row>
                <b-row>
                    <div class="group-25">
                        <p class="capabilities">Capabilities</p>
                        <p class="emoji">💪</p>
                          <p
                          style="margin-left: 4%; width: 100%;"
                          class="remembers-what-user-said-earlier-in-the"
                          >
                            Remembers what user said earlier in the
                            conversation, allows them to provide follow-up
                            corrections, and declines inappropriate
                            requests.
                          </p>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="capabilities">Examples</p>
                      <p class="emoji">💬</p>
                      <div style="margin-left: 4%; width: 100%;" class="explain-eigenvalues-in-simple-terms">
                        <div class="bubble" @click="prompt='Explain Eigenvalues in simple terms.'; submitPrompt()" style="display:inline">“Explain Eigenvalues in simple terms.”</div> 
                        <div class="bubble" @click="prompt='What are the best python libraries for AI?'; submitPrompt()" style="display:inline; margin-left: 1%">“What are the best python libraries for AI?”</div><br><br> 
                        <div class="bubble" @click="prompt='Write me an apple pie recipe.'; submitPrompt()" style="display: inline; max-width: 40.62774088%; margin-top: 10%">“Write me an apple pie recipe.”</div>
                      </div>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="capabilities">Limitations</p>
                      <p class="emoji">❗</p>
                      <p style="margin-left: 4%; width: 100%;" class="explain-eigenvalues-in-simple-terms">
                        May produce inaccurate information, or provide
                        unclear instructions due to limited knowledge.
                        Proceed with caution.
                      </p>
                  </div>
                </b-row>
                
            </b-container>
            <b-container v-else fluid class="chatbox" ref="message" @scroll="onScroll">
              <div class="message" v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%" vue-smooth-scroll>
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="message.role=='assistant'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1 && i" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
              </div>
              <div ref="bottom"></div>
            </b-container>
            <b-container fluid>
              <div style="width: 100%; margin-left: 10%">
                <div class="type-box">
                  <input @keyup.enter="submitPrompt()" type="text" v-model="prompt" style="width: 95%; height: 100%" />
                  <img
                        @click="submitPrompt()"
                        alt=""
                        class="polygon-1"
                        src="https://static.overlay-tech.com/assets/2589b0fe-03a3-4694-9b00-04e2d21bbe50.svg"
                    />
                </div>
              </div>
              <div @click="showLegalStuff=true" class="some-disclaimers-and-such-legal-stuff" style="text-align: center; cursor: pointer;"><p style="display: inline">Some disclaimers and such&nbsp;</p><p style="text-decoration: underline; display: inline">legal stuff</p><p style="display: inline">.</p></div>
            </b-container>
            
          </b-container>
          <b-container class="m-chat" style="width: 100%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==1" fluid class="group-38">
                <p class="su-chat" style="margin-bottom: 0;">ChatSU</p>
                <b-row>
                    <div class="group-25">
                          <p class="capabilities">💪 Capabilities</p>
                          <p
                          class="remembers-what-user-said-earlier-in-the"
                          >
                            Remembers what user said earlier in the
                            conversation, allows them to provide follow-up
                            corrections, and declines inappropriate
                            requests.
                          </p>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="capabilities">💬 Examples</p>
                      <p class="emoji"></p>
                      <div class="explain-eigenvalues-in-simple-terms">
                        <div class="bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='Explain Eigenvalues in simple terms.'; submitPrompt()" >“Explain Eigenvalues in simple terms.”</div> 
                        <div class="bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='What are the best python libraries for AI?'; submitPrompt()">“What are the best python libraries for AI?”</div>
                        <div class="bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='Write me an apple pie recipe.'; submitPrompt()">“Write me an apple pie recipe.”</div>
                      </div>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="capabilities">❗ Limitations</p>
                      <p style="margin-left: 4%; width: 100%;" class="explain-eigenvalues-in-simple-terms">
                        May produce inaccurate information, or provide
                        unclear instructions due to limited knowledge.
                        Proceed with caution.
                      </p>
                  </div>
                </b-row>
                
            </b-container>
            <b-container v-else fluid class="chatbox" ref="message2" @scroll="onScroll">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%; overflow-anchor: auto; bottom: 1px">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="message.role=='assistant'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1 && i" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
              </div>
            </b-container>
            <b-container fluid style="bottom: 10%; position: fixed; padding: 0 0 0 0">
              <div style="width: 100%; margin-left: 0; padding: 0 0 0 0">
                <div class="type-box">
                  <input @keyup.enter="submitPrompt()" type="text" v-model="prompt" style="width: 95%; height: 100%" />
                  <img
                        @click="submitPrompt()"
                        alt=""
                        class="polygon-1"
                        src="https://static.overlay-tech.com/assets/2589b0fe-03a3-4694-9b00-04e2d21bbe50.svg"
                    />
                </div>
              </div>
              <div @click="showLegalStuff=true" class="some-disclaimers-and-such-legal-stuff" style="text-align: center; cursor: pointer;"><p style="display: inline">Some disclaimers and such&nbsp;</p><p style="text-decoration: underline; display: inline">legal stuff</p><p style="display: inline">.</p></div>
            </b-container>
            
          </b-container>
        </div>
    </div>
    <div v-else class="d-chat-box-page" style="min-height: 100vh">
        <div class="d-bg-blur" v-if="showLegalStuff">
          <div class="d-legal-text">
            <div class="d-terms-of-use">Terms of Use</div>
            <div class="d-the-terms">
              1. Acceptance of Terms: By using the website, the user agrees to the terms and conditions outlined in the Terms of Use. <br>
              2. User Conduct: Users must agree to use the website only for lawful purposes and must not engage in any behavior that could damage, disable, overburden, or impair the website's functionality. <br>
              3. Intellectual Property: All text, graphics, logos, button icons, images, audio clips, digital downloads, and data compilations on the website are the property of the website owner or its content suppliers and are protected by copyright laws. <br>
              4. Disclaimer of Warranties: The website owner makes no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on the website. <br>
              5. Limitation of Liability: The website owner shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of the website. <br>
              6. Indemnification: Users agree to indemnify and hold harmless the website owner, its affiliates, and their respective officers, directors, employees, agents, licensors, and suppliers from and against any and all claims, actions, suits, or proceedings, as well as any and all losses, liabilities, damages, costs, and expenses (including reasonable attorneys' fees) arising out of or in connection with the user's use of the website. <br>
              7. Termination: The website owner may terminate a user's access to the website at any time and for any reason, without prior notice. <br>
              8. Governing Law: The Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which the website owner is located.
            </div>
            <b-button class="d-i-understand" @click="showLegalStuff=false">I understand.</b-button>
          </div>      
        </div>
        <div style="padding-top: 0%; width: 100%; height: 100%; ">
          <img
            @click="showMenu=true"
            class="menuButton"
            v-if="!showMenu"
            src="../assets/menu button (1).png"
          >
          <div class="d-flex-wrapper-two" style="position:fixed; background-color: #282828;">
            <b-container @click="newChat()" style="z-index: 1; width: 80%; margin-right: 15%; height: auto" fluid class="flex-wrapper-three">
                <p class="d-new-chat">&#43; New Chat</p>
            </b-container>
            <b-container fluid style="width: 15%; position: fixed; height: 80%; overflow-y: auto; padding-top: 5%; background-color: #282828">
              <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                <div style="width: 100%; cursor: pointer;" @click="$store.commit('setCurrentHistory', i-1)">
                  <div class="d-flex-wrapper-six">
                    <img
                      v-if="historyTitles[i-1]" 
                      alt=""
                      class="vector-5"
                      src="../assets/Vector 7 (1).png"
                    />
                    <p style="width:100%" class="d-python-code">{{ historyTitles[i-1] }}</p>
                  </div>
                </div>
              </div>
            </b-container>
            <b-container fluid style="position: fixed; bottom: 0; background-color: #282828; width: 15%; max-height: 40%">
              <div class="d-split-line"></div>
              <div @click="$store.commit('clearChats')" class="clear-chats-two">
                  <p class="d-clear-chats">🚮&nbsp;</p>
                  <p class="d-clear-chats">Clear chats</p>
              </div>
              <div v-if="chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Turn off flirty mode</p>
              </div>
              <div v-if="!chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Turn on flirty mode</p>
              </div>
              <div v-if="isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">Switch to GPT-3.5</p>
              </div>
              <div v-if="!isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">Switch to GPT-4</p>
              </div>
              <!--<div class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">FAQs</p>
              </div>-->
              <router-link to="/contactUs" class="clear-chats-two">
                  <p class="d-clear-chats">📬&nbsp;</p>
                  <p class="d-clear-chats">Contact Us</p>
              </router-link>
            </b-container>
          </div>
          <div v-if="showMenu" class="d-m-flex-wrapper-two" style="position:fixed">
            <img
              @click="showMenu=false"
              style="position: absolute; right:0%; top: 45%; width: 20%"
              v-if="showMenu"
              src="../assets/close button (1).png"
            >
            <b-container fluid style="width: 70%; position: fixed; height: 70%; overflow-y: auto; padding-top: 5%; background-color: #242424;">
              <b-container @click="newChat()" style="z-index: 1; width: 60%; height: auto; float: left; position: fixed;" fluid class="d-flex-wrapper-three">
                <p class="d-new-chat">&#43; New Chat</p>
              </b-container>
              <div style="margin-top: 35%;">
                <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                  <div class="d-flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="$store.commit('setCurrentHistory', i-1)">
                    <div class="flex-wrapper-six">
                      <img
                        v-if="historyTitles[i-1]" 
                        alt=""
                        class="vector-5"
                        src="../assets/Vector 7 (1).png"
                      />
                      <p style="width:100%" class="d-python-code">{{ historyTitles[i-1] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </b-container>
            <b-container fluid style="position: fixed; bottom: 0; background-color: #242424; width: 70%; height: 30%">
              <div class="split-line"></div>
              <div @click="$store.commit('clearChats')" class="clear-chats-two">
                  <p class="d-clear-chats">🚮&nbsp;</p>
                  <p class="d-clear-chats">Clear chats</p>
              </div>
              <div v-if="chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Turn off flirty mode</p>
              </div>
              <div v-if="!chatHornyMode" @click="$store.commit('toggleHornyMode')" style="cursor: pointer;" class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Turn on flirty mode</p>
              </div>
              <div v-if="isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">Switch to GPT-3.5</p>
              </div>
              <div v-if="!isGPT4" @click="$store.commit('toggleGPT4')" style="cursor: pointer;" class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">Switch to GPT-4</p>
              </div>
              <!--<div class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">FAQs</p>
              </div>-->
              <router-link to="/contactUs" class="clear-chats-two">
                  <p class="d-clear-chats">📬&nbsp;</p>
                  <p class="d-clear-chats">Contact Us</p>
              </router-link>
            </b-container>
          </div>
          <b-container class="chat" style="width: 70%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==1" fluid class="group-38">
                <b-row align-h="center"><p class="d-su-chat">ChatSU</p></b-row>
                <b-row>
                    <div class="group-25">
                        <p class="d-capabilities">Capabilities</p>
                        <p class="d-emoji">💪</p>
                          <p
                          style="margin-left: 4%; width: 100%;"
                          class="d-remembers-what-user-said-earlier-in-the"
                          >
                            Remembers what user said earlier in the
                            conversation, allows them to provide follow-up
                            corrections, and declines inappropriate
                            requests.
                          </p>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="d-capabilities">Examples</p>
                      <p class="d-emoji">💬</p>
                      <div style="margin-left: 4%; width: 100%;" class="d-explain-eigenvalues-in-simple-terms">
                        <div class="d-bubble" @click="prompt='Explain Eigenvalues in simple terms.'; submitPrompt()" style="display:inline">“Explain Eigenvalues in simple terms.”</div> 
                        <div class="d-bubble" @click="prompt='What are the best python libraries for AI?'; submitPrompt()" style="display:inline; margin-left: 1%">“What are the best python libraries for AI?”</div><br><br> 
                        <div class="d-bubble" @click="prompt='Write me an apple pie recipe.'; submitPrompt()" style="display: inline; max-width: 40.62774088%; margin-top: 10%">“Write me an apple pie recipe.”</div>
                      </div>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="d-capabilities">Limitations</p>
                      <p class="d-emoji">❗</p>
                      <p style="margin-left: 4%; width: 100%;" class="d-explain-eigenvalues-in-simple-terms">
                        May produce inaccurate information, or provide
                        unclear instructions due to limited knowledge.
                        Proceed with caution.
                      </p>
                  </div>
                </b-row>
                
            </b-container>
            <b-container v-else fluid class="chatbox" ref="message3" @scroll="onScroll">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white; white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="message.role=='assistant'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white; white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1 && i" style="border: 1px solid rgba(255, 255, 255 0.5); width: 100%; margin-top: 5%"></div>
              </div>
            </b-container>
            <b-container fluid>
              <div style="width: 100%; margin-left: 10%">
                <div class="d-type-box">
                  <input @keyup.enter="submitPrompt()" type="text" v-model="prompt" style="width: 95%; height: 100%; background-color: #181818; color: white" />
                  <img
                        @click="submitPrompt()"
                        alt=""
                        class="polygon-1"
                        src="https://static.overlay-tech.com/assets/2589b0fe-03a3-4694-9b00-04e2d21bbe50.svg"
                    />
                </div>
              </div>
              <div @click="showLegalStuff=true" class="d-some-disclaimers-and-such-legal-stuff" style="text-align: center; cursor: pointer;"><p style="display: inline">Some disclaimers and such&nbsp;</p><p style="text-decoration: underline; display: inline">legal stuff</p><p style="display: inline">.</p></div>
            </b-container>
          </b-container>
          <b-container class="m-chat" style="width: 100%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==1" fluid class="group-38">
                <p class="d-su-chat" style="margin-bottom: 0;">ChatSU</p>
                <b-row>
                    <div class="group-25">
                          <p class="d-capabilities">💪 Capabilities</p>
                          <p
                          class="d-remembers-what-user-said-earlier-in-the"
                          >
                            Remembers what user said earlier in the
                            conversation, allows them to provide follow-up
                            corrections, and declines inappropriate
                            requests.
                          </p>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="d-capabilities">💬 Examples</p>
                      <p class="d-emoji"></p>
                      <div class="d-explain-eigenvalues-in-simple-terms">
                        <div class="d-bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='Explain Eigenvalues in simple terms.'; submitPrompt()" >“Explain Eigenvalues in simple terms.”</div> 
                        <div class="d-bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='What are the best python libraries for AI?'; submitPrompt()">“What are the best python libraries for AI?”</div>
                        <div class="d-bubble" style="width: 70%; margin-left: 15%; margin-right: 15%;" @click="prompt='Write me an apple pie recipe.'; submitPrompt()">“Write me an apple pie recipe.”</div>
                      </div>
                  </div>
                </b-row>
                <b-row>
                  <div class="group-25">
                      <p class="d-capabilities">❗ Limitations</p>
                      <p style="margin-left: 4%; width: 100%;" class="d-explain-eigenvalues-in-simple-terms">
                        May produce inaccurate information, or provide
                        unclear instructions due to limited knowledge.
                        Proceed with caution.
                      </p>
                  </div>
                </b-row>
                
            </b-container>
            <b-container v-else fluid class="chatbox" ref="message4" @scroll="onScroll">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white; white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="message.role=='assistant'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white; white-space: pre-line">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1 && i" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
              </div>
            </b-container>
            <b-container fluid style="bottom: 10%; position: fixed; padding: 0 0 0 0; background-color: #242424;">
              <div style="width: 100%; margin-left: 0; padding: 0 0 0 0;">
                <div class="d-type-box">
                  <input @keyup.enter="submitPrompt()" type="text" v-model="prompt" style="width: 95%; height: 100%; background-color: #121212;" />
                  <img
                        @click="submitPrompt()"
                        alt=""
                        class="polygon-1"
                        src="https://static.overlay-tech.com/assets/2589b0fe-03a3-4694-9b00-04e2d21bbe50.svg"
                    />
                </div>
              </div>
              <div @click="showLegalStuff=true" class="d-some-disclaimers-and-such-legal-stuff" style="text-align: center; cursor: pointer;"><p style="display: inline">Some disclaimers and such&nbsp;</p><p style="text-decoration: underline; display: inline">legal stuff</p><p style="display: inline">.</p></div>
            </b-container>
            
          </b-container>
        </div>
    </div>
  </div>
</template>

<script>
//import "firebase/functions";


// Get a reference to your Firebase Function
//const myFunction = firebase.functions().httpsCallable("myFunction");
const http = require('http');
const OPENAI_API_KEY = process.env.VUE_APP_OPENAI_API_KEY
const ORG_ID = process.env.VUE_APP_ORG_ID;
const axios = require('axios');
const dotenv = require("dotenv")
dotenv.config()
const OpenAI = require('openai-api');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()
import { ref, onMounted, nextTick, defineExpose, reactive } from 'vue';
//let messagesRef = ref(null);
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);
const fixedElement = document.querySelector('.fixed-element');
const scrollToElement = document.querySelector('.scroll-to-element');



export default {
    setup() {
      const fixedElementScrollTop = ref(0);

      const scrollToElement = () => {
        // get reference to the element to scroll to
        const scrollToElement = ref.value.scrollToElement;

        // get the offset of the element to scroll to relative to the top of the page
        const offsetTop = scrollToElement.value.offsetTop;

        // update the scrollTop property of the fixed element
        fixedElementScrollTop.value = offsetTop;
      }

      return { fixedElementScrollTop, scrollToElement };
    },
    data(){
        return{
            prompt: "",
            result: "",
            showLegalStuff: true,
            canSendPrompt: true,
            showMenu: false,
            lastScrollTop: 0,
            autoScroll: true,
            aspectRatio: window.innerWidth / window.innerHeight,
        }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
    computed: {
      darkMode: function() {
        return this.$store.state.darkMode;
      },
      history: function() {
        return this.$store.state.history;
      },
      historyTitles: function() {
        return this.$store.state.historyTitles;
      },
      currentHistory: function() {
        return this.$store.state.currentHistory;
      },
      chatHornyMode: function() {
        return this.$store.state.chatHornyMode;
      },
      isGPT4: function() {
        return this.$store.state.isGPT4;
      },
    },
    methods: {
        newChat(){
          if(this.history[this.currentHistory].length>1 && this.history[0].length>1){ 
            this.$store.commit('addHistory')
            this.$store.commit('setCurrentHistory', 0)
            this.$store.commit('addHistoryTitle', 'New Chat') 
          } else if (this.history[0].length==1){this.$store.commit('setCurrentHistory', 0)}
        },
        submitPrompt(){
          if(this.prompt && this.canSendPrompt){
              
              this.canSendPrompt=false;
              if(this.currentHistory==-1){
                this.$store.commit('addHistory')
                this.$store.commit('setCurrentHistory', 0)
                this.$store.commit('addHistoryTitle', 'New Chat');
              }
              if(this.history[this.currentHistory].length==1){
                  
                  (async () => {try {
                      let promptCopy = this.prompt
                      //console.log("aaaa")
                      while(this.historyTitles[this.currentHistory] == "New Chat"){
                        const completion = await openai.createChatCompletion({
                          model: "gpt-3.5-turbo",
                          messages: [{role: "user", content: "Summarize the following in a single sentence '" + promptCopy + "', only respond with the summary."}],
                          temperature: 1,
                        });
                        const completion_text = completion.data.choices[0].message.content;
                        //console.log(completion_text.length)
                        if(completion_text.length < 60){this.$store.commit('changeHistoryTitle', completion_text)}
                      }} catch (error) {
                        if (error.response) {
                          console.log(error.response.status);
                          console.log(error.response.data);
                        } else {
                          console.log(error.message);
                        }
                    }
                  })() 
              }
              
              
              (async () => {
                  const currHistory = this.currentHistory;
                  const messages = []
                  let strMessages = ""
                  this.$store.commit('addPrompt', this.prompt);
                  this.prompt=""
                  for (let i = 0; i < this.history[this.currentHistory].length; i+=2){
                    strMessages+= "user^&*()"+this.history[this.currentHistory][i].content+"!@#$%";
                    if(i+1<this.history[this.currentHistory].length){strMessages+= "assistant^&*()"+this.history[this.currentHistory][i+1].content+"!@#$%";}
                    messages.push({ role: "user", content: this.history[this.currentHistory][i].content });
                    if(i+1<this.history[this.currentHistory].length){messages.push({ role: "assistant", content: this.history[this.currentHistory][i+1].content });}
                  }
                  console.log(this.history)
                  this.$store.commit('initResponse')
                  //console.log(this.history[this.currentHistory])
                  /*const socket = new WebSocket('127.0.0.1:4400');

                  socket.addEventListener('open', (event) => {
                    console.log('WebSocket connection opened');
                  });

                  socket.addEventListener('message', (event) => {
                    if(JSON.parse(event.data)!="[object Object]"){this.$store.commit('appendResponse', JSON.parse(event.data))}
                    else{this.canSendPrompt=true}
                    console.log('Received message from server:', event.data);
                    
                  });
                  
                  socket.onopen = function(){
                    console.log(strMessages)
                    socket.send(JSON.stringify(strMessages));
                  }*/
                  /*
                  const res = await fetch("http://localhost:3000/completion",
                  {
                    mode: 'no-cors',
                    method: 'POST',
                    headers: {
                      "Content-Type": 'application/x-www-form-urlencoded'
                    },
                    body: JSON.stringify(strMessages)
                  })
                  .then(response => response.json())
                  .then(data => {
                    // store the data in the array
                    this.$store.commit('appendResponse', data)
                    // do something with the updated data on the frontend
                  })
                  .catch(error => {
                    console.error(error);
                  });
                  messages.push({role: "user", content: this.prompt})
                  strMessages+="user:"+this.prompt+",";
                  this.prompt="";
                  */
                  //console.log(messages)
                  /*try {
                    console.log("aaaa")
                    const response = openai.createChatCompletion({
                        model: "gpt-3.5-turbo",
                        messages: messages,
                        stream: true,
                    }, { responseType: 'stream' });
                    //console.log(response+ "1")
                    response.then((resp) => {
                        resp.data.on('data', data => {
                            const lines = data.toString().split('\n').filter(line => line.trim() !== '');
                            for (const line of lines) {
                                const message = line.replace(/^data: /, '');
                                if (message === '[DONE]') {
                                    //ws.send(JSON.stringify({ done: true }));
                                    return;
                                }
                                const parsed = JSON.parse(message);
                                //ws.send(JSON.stringify(parsed.choices[0].delta.content));
                                console.log(parsed);
                                this.$store.commit('appendResponse', JSON.stringify(parsed.choices[0].delta.content))
                            }
                        });
                    });*/
                    
                    //const completion_text = completion.data.choices[0].message.content;
                    //console.log(completion_text)
                    //this.history[this.currentHistory].push({message: completion_text, isUser: false})
                    //this.$store.commit('appendResponse', completion_text)
                    try {
                        const url = 'https://api.openai.com/v1/chat/completions';
                        let requestBody;
                        if(this.isGPT4){
                          requestBody = {
                            model: 'gpt-4',
                            //model_name: "ChatSU",
                            messages: messages,
                            stream: true,
                          }
                        }
                        else{
                          requestBody = {
                            model: 'gpt-3.5-turbo',
                            //model_name: "ChatSU",
                            messages: messages,
                            stream: true,
                          }
                        }
                        const headers = {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${OPENAI_API_KEY}`
                        };
                        const response = await fetch(url, {
                          method: 'POST',
                          headers,
                          body: JSON.stringify(requestBody)
                        })
                        if (!response.ok) {
                          throw new Error(`Failed to fetch API: ${response.statusText}`);
                        }
                        const reader = response.body.getReader();
                        const decoder = new TextDecoder();
                        let result = '';
                        while (true) {
                          const { done, value } = await reader.read();
                          if (done) {
                            break;
                          }
                          result += decoder.decode(value);
                          let output = decoder.decode(value);
                          //output = output.replaceAll('data: {"id":"chatcmpl-6xLRrywJwIieJ71Bfkw0MaAzRvzZB","object":"chat.completion.chunk","created":1679601819,"model":"gpt-3.5-turbo-0301","choices":[{"delta":{"content"', "")
                          /*let startI = output.indexOf("{\"content\":\"")+"{\"content\":\"".length;
                          let endI = output.lastIndexOf("\"},\"index\":0,\"finish_reason\":null}]}") 
                          */
                          // Process the response in chunks here
                          //const parsed = JSON.parse(decoder.decode(value).data);
                          this.addToResponse(output, currHistory);
                          //this.$store.commit('appendResponse', JSON.stringify(decoder.decode(value).choices[0].delta.content))
                        }
                  } catch (error) {
                    if (error.response) {
                      console.log(error.response.status);
                      console.log(error.response.data);
                    } else {
                      console.log(error.message);
                    }
                  }
                  /*const gptResponse = await openai.complete({
                      engine: 'davinci',
                      prompt: this.prompt,
                      maxTokens: 200,
                      temperature: 1,
                      topP: 1,
                      presencePenalty: 0,
                      frequencyPenalty: 0,
                      bestOf: 1,
                      n: 1,
                      stream: false,
                      stop: ['\n', "testing"]
                  });
                  let beginning = this.prompt;
                  this.result = beginning + " " + gptResponse.data.choices[0].text;
                  this.history[this.currentHistory].push({message: this.result, isUser: false})
                  */
                  
                  this.canSendPrompt=true
                  this.autoScroll = true
              })();
          }
        },
        addToResponse(output, currHistory){
            let outputs = output.split("data: ")
            outputs.shift();
            for(let i = 0; i < outputs.length; i++){
              outputs[i] = JSON.parse(outputs[i])
            }
            for(let i = 0; i < outputs.length; i++){
              if(outputs[i].choices[0].delta.content=="```"){outputs[i].choices[0].delta.content="\n"}
              if(outputs[i].choices[0].delta.content!=undefined){this.$store.commit('appendResponse', [outputs[i].choices[0].delta.content, currHistory])}
            }
            this.scrollElement();
        },
        scrollElement: function() {
          let myElement;
          if(!this.darkMode)
            if(this.aspectRatio>1){
              myElement = this.$refs.message
              if(this.autoScroll){myElement.scrollTop += 10000}
            }
            else{
              myElement = this.$refs.message2
              if(this.autoScroll){myElement.scrollTop += 10000}
            }
          else{
            if(this.aspectRatio>1){
              myElement = this.$refs.message3
              if(this.autoScroll){myElement.scrollTop += 10000}
            }
            else{
              myElement = this.$refs.message4
              if(this.autoScroll){myElement.scrollTop += 10000}
            }
          }
        },
        onScroll() {
          let el;
          if(!this.darkMode){
            if(this.aspectRatio>1){
              el = this.$refs.message;
              if (el.scrollHeight - el.scrollTop - el.clientHeight <= 100) {
                this.autoScroll = true;
              }
              if (el.scrollTop < this.lastScrollTop) {
                this.autoScroll = false;
              }
              this.lastScrollTop = el.scrollTop;
            }
            else{
              el = this.$refs.message2;
              if (el.scrollHeight - el.scrollTop - el.clientHeight <= 100) {
                this.autoScroll = true;
              }
              if (el.scrollTop < this.lastScrollTop) {
                this.autoScroll = false;
              }
              this.lastScrollTop = el.scrollTop;
            }
          }
          else{
            if(this.aspectRatio>1){
              el = this.$refs.message3;
              if (el.scrollHeight - el.scrollTop - el.clientHeight <= 100) {
                this.autoScroll = true;
              }
              if (el.scrollTop < this.lastScrollTop) {
                this.autoScroll = false;
              }
              this.lastScrollTop = el.scrollTop;
            }
            else{
              el = this.$refs.message4;
              if (el.scrollHeight - el.scrollTop - el.clientHeight <= 100) {
                this.autoScroll = true;
              }
              if (el.scrollTop < this.lastScrollTop) {
                this.autoScroll = false;
              }
              this.lastScrollTop = el.scrollTop;
            }
          }
        },
        handleResize() {
          this.aspectRatio = window.innerWidth / window.innerHeight;
        },
    }
}
</script>

<style scoped>
input {border:0;outline:0;}
input:focus {outline:none!important;}
html { 
    scroll-behavior: smooth;
    overflow-y: hidden; /* Hide vertical scrollbar */
    overflow-x: hidden; /* Hide horizontal scrollbar */
}
.btn { text-transform: unset !important; }

.polygon-1 {
  max-width: 100%;
  max-height: 15px;
  cursor: pointer;
}

#anchor {
  overflow-anchor: auto;
  height: 1px;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 3px;
}

/* Scroll to the bottom of the div when it overflows */
.chatbox:after {
  content: "";
  display: block;
  height: 1px;
  margin-top: -1px;
  visibility: hidden;
}

.chatbox > *:last-child {
  margin-bottom: 0;
}

.chatbox:after,
.chatbox > *:last-child {
  margin-bottom: 1px;
}


@media (min-aspect-ratio: 1/1){
  .d-bg-blur{
    position: fixed;
    width: 100%;
    height: 100%;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
}
  .d-legal-text{
    width: 80%; 
    margin: 5% 10% 10% 10%; 
    height: 80%; 
    background: #242424; 
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
  }
  .d-terms-of-use{
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    padding-top: 5%;
  }
  .d-the-terms{
    width: 80%;
    margin: 5% 10% 10% 10%;
    font-size: 1.75vh;
    color: white;
  }
  .d-i-understand{
    background: #363636; 
    border-radius: 20px;
    position: absolute; 
    bottom: 10%; 
    left: 45%; 
    width: auto; 
    font-size: 2.5vh
  }
  .d-flex-wrapper-three {
    background-color: #363636;
    border-radius: 15px;
    padding: 5% 0% 0% 0%;
    margin-top: 15%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .d-flex-wrapper-three:hover {
    background-color: rgb(75, 74, 74);
    transition: background-color 0.5s;
    border-radius: 15px;
    padding: 5% 0% 0% 0%;
    margin-top: 15%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .d-chat-box-page {
    background-color: #242424;
    padding: 0 45px 0 0;
    display: flex;
    align-items: flex-start;
  }
  .d-emoji{
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0; 
    font-size: 3vh; 
    float: left;

    color: white;

    text-shadow: 0px 5px 8px white;
  }
  .d-flex-wrapper-two {
    background-color: rgba(244, 244, 244, 1);
    float: left;
    width: 15%;
    height: 100%;
    padding: 3% 0 0%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .d-flex-wrapper-six {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 0px;
    display: flex;
    align-items: center;
  }
  .d-flex-wrapper-six:hover {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 21px;
    display: flex;
    background-color: #444444;
    align-items: center;
  }
  @media (min-height: 1000px){
    .d-python-code {
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 400;
      line-height: normal;
      color: white;
    }
  }
  @media (max-height: 1000px) and (min-height: 700px){
    .d-python-code {
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 400;
      line-height: normal;
      color: white;
    }
  }
  @media (max-height: 700px){
    .d-python-code {
      font-family: "Inter";
      font-size: 2.5vh;
      font-weight: 400;
      line-height: normal;
      color: white;
    }
  }
  .d-new-chat {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
  }
  .d-split-line {
    width: 100%;
    height: 1px;
    background-color: rgba(38, 38, 38, 1);
    margin-bottom: 19px;
  }
  .d-clear-chats {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    float: left;
  }
  .d-su-chat {
    font-family: "Cinzel";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    
  }
  .d-capabilities {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: white;
  }
  .d-remembers-what-user-said-earlier-in-the {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white
  }
  .d-examples {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
  }
  .d-explain-eigenvalues-in-simple-terms {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    margin-left: 4%;
  }
  .d-bubble{
    background: #383838;
    border-radius: 20px;
    cursor: pointer;
  }
  .d-bubble:hover{
    background: #383838;
    box-shadow: 0px 5px 10px rgba(255, 255, 255, 0.17);
    border-radius: 20px;
    cursor: pointer;
  }
  .d-limitations {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    display: flex;
    text-align: center;
  }
  .d-type-box {
    background-color: #181818;
    border-radius: 14px;
    padding: 0.2% 0% 0.2% 0.2%;
    left: 20%;
    margin-right: 0%;
    height: 5%;
    width: 70%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12) inset;
    color: white;
    position: fixed;
    bottom: 10%
  }
  .d-some-disclaimers-and-such-legal-stuff {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    margin-left: 0%;
    width: 70%;
    margin-right: 0%;
    color: white;
    position: fixed;
    bottom: 2%;
    left: 17%;
  }
}
@media (max-aspect-ratio: 1/1){
  
  .d-bg-blur{
    position: fixed;
    width: 100%;
    height: 100%;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
}
  .d-legal-text{
    width: 80%; 
    margin: 5% 10% 10% 10%; 
    height: 80%; 
    background: #242424; 
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
  }
  .d-terms-of-use{
    font-family: "Cinzel";
    font-size: 8vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    padding-top: 5%;
  }
  .d-the-terms{
    color: white;
    width: 80%;
    margin: 5% 10% 10% 10%;
    font-size: 1.125vh;
  }
  .d-i-understand{
    background: #363636; 
    border-radius: 20px;
    position: absolute; 
    bottom: 17%; 
    left: 40%; 
    width: auto; 
    font-size: 2.5vw
  }
  .d-flex-wrapper-three {
    background-color: #363636;
    border-radius: 5px;
    padding: 5% 0% 0% 0%;
    margin-top: 5%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .d-flex-wrapper-three:hover {
    background-color: #444444;
    transition: background-color 0.5s;
    border-radius: 5px;
    padding: 5% 0% 0% 0%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .d-chat-box-page {
    background-color: #242424;
    padding: 0 45px 0 0;
    display: flex;
    align-items: flex-start;
  }
  .d-emoji{
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0; 
    font-size: 3vw; 
    float: left;

    color: #000000;

    text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  }
  .d-flex-wrapper-two{
    display: none;
  }
  .d-m-flex-wrapper-two {
    background-color: #363636;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
  }
  .d-python-code {
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: white;

  }
  .d-new-chat {
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 10%;
  }
  .d-flex-wrapper-five {
    background: linear-gradient(
      90deg,
      rgba(244, 244, 244, 0) 71%,
      rgba(244, 244, 244, 0) 100%
    );
    padding: 5% 0% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .d-split-line {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin-bottom: 19px;
  }
  .d-clear-chats {
    font-family: "Inter";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    float: left;
  }
  .d-su-chat {
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    margin-top: 20%;
  }
  .d-capabilities {
    font-family: "Inter";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    color: white;
    margin-top: 5%;
  }
  .d-remembers-what-user-said-earlier-in-the {
    font-family: "Inter";
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 3.5vw;
    font-weight: 100;
    line-height: normal;
    text-align: center;
    color: white;
  }

  .d-examples {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
  }
  .d-explain-eigenvalues-in-simple-terms {
    font-family: "Inter";
    width: 100%;
    font-size: 3.5vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    text-align: center;
    margin-bottom: 5%;
  }
  .d-limitations {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    display: flex;
    text-align: center;
  }
  .d-type-box {
    background-color: #121212;
    border-radius: 14px;
    padding: 1% 3% 1% 1%;
    margin-left: 5%;
    margin-right: 5%;
    color: white;
    width: 80%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12) inset;
    position: fixed;
    bottom: 5%;
  }
  .d-some-disclaimers-and-such-legal-stuff {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    position: absolute;
    width: 70%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 13%;
  }
  .d-bubble{
    background: #484848;
    width: auto;
    height: auto;
    margin-top: 5%;
    font-size: 3.5vw;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
  }
  .d-bubble:hover{
    background: #484848;
    width: auto;
    height: auto;
    font-size: 3.5vw;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
  }
}

@media (min-aspect-ratio: 1/1){
  .m-flex-wrapper-two{
    display: none;
  }
  .m-chat{
    display: none;
  }
  .bg-blur{
    position: fixed;
    width: 100%;
    height: 100%;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
}
  .legal-text{
    width: 80%; 
    margin: 5% 10% 10% 10%; 
    height: 80%; 
    background: #F8F8F8; 
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
  }
  .terms-of-use{
    font-family: "Cinzel";
    font-size: 5vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    padding-top: 5%;
  }
  .the-terms{
    width: 80%;
    margin: 5% 10% 10% 10%;
    font-size: 1.75vh;
  }
  .i-understand{
    background: #363636; 
    border-radius: 20px;
    position: absolute; 
    bottom: 10%; 
    left: 45%; 
    width: auto; 
    font-size: 2.5vh
  }
  .chatbox{
    position: absolute; 
    margin-top: 3%; 
    left: 20%;
    width: 70%; 
    height: 70%; 
    overflow-y: auto;
    overflow-anchor: auto;
    flex: 1;
  }
  .message:last-child {
    animation: scrollDown .3s ease-out forwards;
  }

  @keyframes scrollDown {
    from { transform: translateY(-10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  .message {
    margin-bottom: 10px;
  }
  .menuButton{
    display: none;
  }
  .flex-wrapper-three {
    background-color: #363636;
    border-radius: 15px;
    padding: 5% 0% 0% 0%;
    margin-top: 15%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
    position: relative;
  }
  .flex-wrapper-three:hover {
    background-color: rgb(75, 74, 74);
    transition: background-color 0.5s;
    border-radius: 15px;
    padding: 5% 0% 0% 0%;
    margin-top: 15%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .chat-box-page {
    background-color: white;
    padding: 0 45px 0 0;
    display: flex;
    align-items: flex-start;
  }
  .emoji{
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0; 
    font-size: 3vh; 
    float: left;

    color: #000000;

    text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  }
  .flex-wrapper-two {
    background-color: rgba(244, 244, 244, 1);
    float: left;
    width: 15%;
    height: 100%;
    padding: 3% 0 0%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .m-flex-wrapper-two {
    display: none;
  }
  .flex-wrapper-six {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 0px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-six:hover {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 21px;
    display: flex;
    background-color: #E1E1E1;
    align-items: center;
  }
  .vector-5 {
      width: 100%;
      max-width: 18px;
      max-height: 15.43px;
      margin-right: 10%;
      margin-bottom: 10%;
    }
  @media (min-height: 1000px){
    .python-code {
      font-family: "Inter";
      font-size: 1.5vh;
      font-weight: 400;
      line-height: normal;
      color: rgba(56, 56, 56, 1);
    }
  }
  @media (max-height: 1000px) and (min-height: 700px){
    .python-code {
      font-family: "Inter";
      font-size: 2vh;
      font-weight: 400;
      line-height: normal;
      color: rgba(56, 56, 56, 1);
    }
  }
  @media (max-height: 700px){
    .python-code {
      font-family: "Inter";
      font-size: 2.5vh;
      font-weight: 400;
      line-height: normal;
      color: rgba(56, 56, 56, 1);
    }
  }
  .new-chat {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
  }
  .flex-wrapper-five {
    padding: 5% 0% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    min-width: 100%;
  }

  .split-line {
    width: 100%;
    height: 1px;
    background-color: rgba(56, 56, 56, 1);
    margin-bottom: 19px;
  }
  .clear-chats-two {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .clear-chats {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    float: left;
  }
  .flex-wrapper-fifteen {
    padding: 0 0 0 0px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-sixteen {
    padding: 0 0 0 0px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-fourteen {
    padding: 45px 3% 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .su-chat {
    font-family: "Cinzel";
    font-size: 6vh;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    
  }
  .group-38 {
    padding: 0 0 0px;
    align-items: center;
    margin-left: 10%;
    margin-top: 10%;
    margin-bottom: 10%;
    width: 100%
  }
  .relative-wrapper-one {
    position: relative;
    left: 0%
  }
  .group-25 {
    border-radius: 30px;
    padding: 3% 0% 3% 0%;
    align-items: flex-start;
    position: relative;
    left: 5%;
  }
  .capabilities {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
  }
  .remembers-what-user-said-earlier-in-the {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
  }
  .examples {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    text-align: left;
  }
  .explain-eigenvalues-in-simple-terms {
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    margin-left: 4%;
  }
  .bubble{
    background: #F3F3F3;
    border: 1px solid #D3D3D3;
    border-radius: 20px;
    cursor: pointer;
  }
  .bubble:hover{
    background: #F3F3F3;
    border: 1px solid #D3D3D3;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 20px;
    cursor: pointer;
  }
  .group-28 {
    border-radius: 30px;
    padding: 3% 0% 3% 0%;
    align-items: flex-start;
    position: relative;
    left: 0%;
  }
  .limitations {
    font-family: "Inter";
    font-size: 3vh;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    display: flex;
    text-align: center;
  }
  .type-box {
    background-color: white;
    border-radius: 14px;
    padding: 0.2% 0% 0.2% 0.2%;
    left: 20%;
    margin-right: 0%;
    height: 5%;
    width: 70%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12) inset;
    position: fixed;
    bottom: 10%
  }
  .some-disclaimers-and-such-legal-stuff {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    margin-left: 0%;
    width: 70%;
    margin-right: 0%;
    color: black;
    position: fixed;
    bottom: 2%;
    left: 17%;
  }
}
@media (max-aspect-ratio: 1/1){
  .bg-blur{
    position: fixed;
    width: 100%;
    height: 100%;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
}
  .legal-text{
    width: 80%; 
    margin: 5% 10% 10% 10%; 
    height: 80%; 
    background: #F8F8F8; 
    box-shadow: 0px 4px 15px 3px rgba(0, 0, 0, 0.4); 
    border-radius: 20px;
  }
  .terms-of-use{
    font-family: "Cinzel";
    font-size: 8vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    padding-top: 5%;
  }
  .the-terms{
    width: 80%;
    margin: 5% 10% 10% 10%;
    font-size: 1.125vh;
  }
  .i-understand{
    background: #363636; 
    border-radius: 20px;
    position: absolute; 
    bottom: 17%; 
    left: 40%; 
    width: auto; 
    font-size: 2.5vw
  }

  .chatbox{
    position: fixed; 
    top: 10%; 
    left: 15%;
    width: 85%; 
    height: 70%; 
    overflow-y: auto;
  }
  .chat{
    display: none;
  }
  .menuButton {
    width: 20%;
    position: absolute;
    left: 0%;
    top: 40%;
    z-index: 5;
  }
  .flex-wrapper-three {
    background-color: #363636;
    border-radius: 5px;
    padding: 5% 0% 0% 0%;
    margin-top: 5%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .flex-wrapper-three:hover {
    background-color: rgb(151, 151, 151);
    transition: background-color 0.5s;
    border-radius: 5px;
    padding: 5% 0% 0% 0%;
    align-items: center;
    width: 95%;
    height: 5%;
    text-align: center;
    cursor: pointer;
  }
  .chat-box-page {
    background-color: white;
    padding: 0 45px 0 0;
    display: flex;
    align-items: flex-start;
  }
  .emoji{
    font-family: 'Alata';
    font-style: normal;
    font-weight: 400;
    display: flex;
    align-items: center;
    text-align: center;
    margin: 0; 
    font-size: 3vw; 
    float: left;

    color: #000000;

    text-shadow: 0px 5px 8px rgba(0, 0, 0, 0.25);
  }
  .flex-wrapper-two{
    display: none
  }
  .m-flex-wrapper-two {
    background-color: rgba(244, 244, 244, 1);
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    text-shadow: 0px 2px 7px rgba(0, 0, 0, 0.12);
    background: rgba(19, 19, 19, 0.2);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.13);
    backdrop-filter: blur(10px);
    z-index: 10;
  }
  .flex-wrapper-six {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 21px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-six:hover {
    margin-bottom: 0%;
    width: 100%;
    height: 50%;
    border-radius: 10px;
    padding: 14px 0px 15px 21px;
    display: flex;
    background-color: #E1E1E1;
    align-items: center;
  }
  .vector-5 {
    width: 18px;
    height: 15.43px;
    margin-right: 14px
  }
  .python-code {
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(56, 56, 56, 1);

  }
  .new-chat {
    font-family: "Inter";
    font-size: 4vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 10%;
  }
  .flex-wrapper-five {
    background: linear-gradient(
      90deg,
      rgba(244, 244, 244, 0) 71%,
      rgba(244, 244, 244, 1) 100%
    );
    padding: 5% 0% 0%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .split-line {
    width: 100%;
    height: 1px;
    background-color: rgba(56, 56, 56, 1);
    margin-bottom: 19px;
  }
  .clear-chats-two {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .clear-chats {
    font-family: "Inter";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    float: left;
  }
  .flex-wrapper-fifteen {
    padding: 0 0 0 0px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-sixteen {
    padding: 0 0 0 0px;
    display: flex;
    align-items: center;
  }
  .flex-wrapper-fourteen {
    padding: 45px 3% 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .su-chat {
    font-family: "Cinzel";
    font-size: 7vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    margin-top: 20%
  }
  .group-38 {
    padding: 0 0 0px;
    align-items: center;
    margin-left: 5%;
  }
  .relative-wrapper-one {
    position: relative;
  }
  .group-25 {
    border-radius: 30px;
    align-items: flex-start;
    position: relative;
  }
  .capabilities {
    font-family: "Inter";
    font-size: 5vw;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    color: rgba(40, 40, 40, 1);
    margin-top: 5%;
  }
  .remembers-what-user-said-earlier-in-the {
    font-family: "Inter";
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 3.5vw;
    font-weight: 100;
    line-height: normal;
    text-align: center;
    color: rgba(40, 40, 40, 1);
  }

  .examples {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    text-align: left;
  }
  .explain-eigenvalues-in-simple-terms {
    font-family: "Inter";
    width: 100%;
    font-size: 3.5vw;
    font-weight: 200;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    text-align: center;
    margin-bottom: 5%;
  }
  .group-28 {
    border-radius: 30px;
    padding: 3% 3% 3% 25%;
    align-items: flex-start;
  }
  .limitations {
    font-family: "Inter";
    font-size: 3vw;
    font-weight: 400;
    line-height: normal;
    color: rgba(40, 40, 40, 1);
    display: flex;
    text-align: center;
    padding-top: 15%;
  }
  .type-box {
    background-color: white;
    border-radius: 14px;
    padding: 1% 3% 1% 1%;
    margin-left: 5%;
    margin-right: 5%;
    width: 80%;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.12) inset;
    position: fixed;
    bottom: 5%;
  }
  .some-disclaimers-and-such-legal-stuff {
    text-align: center;
    font-family: "Inter";
    font-size: 1.5vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    position: absolute;
    width: 70%;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 13%;
  }
  .bubble{
    background: #F3F3F3;
    width: auto;
    height: auto;
    margin-top: 5%;
    font-size: 3.5vw;
    border: 1px solid #D3D3D3;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
  }
  .bubble:hover{
    background: #F3F3F3;
    width: auto;
    height: auto;
    font-size: 3.5vw;
    border: 1px solid #D3D3D3;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.17);
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
  }
}
</style>