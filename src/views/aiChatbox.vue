<template>
    <!--<div>
        <label style="margin-top: 3%" for="prompt">Enter your prompt </label><span style="color: red">*</span><span>:</span>
        <input type="text" id="prompt" v-model="prompt" /><br>
        <b-button @click="submitPrompt()">Submit</b-button>
        <h1 v-if="result!=''">Result: {{ result }}</h1>
    </div> -->
    <!--<div class="chat-box-page">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Michroma">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Cinzel">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <b-container style="margin-top: 3%">
            <p class="su-chat">SU Chat</p>
        </b-container>
        <b-container fluid class="relative-wrapper-one">
            <b-row align-h="center">
                <b-col align-h="center">
                    <div style="width: 60%; margin-left: 20%; margin-right: 20%;">
                        <p class="arm">💪</p>
                        <div class="group-25">
                            <p class="capabilities">Capabilities</p>
                            <p class="lorem-ipsum-dolor-sit-amet-consectetur"> 
                                GPT-3.5-Turbo can perform a wide range of language tasks, including language translation, summarization, question-answering, and content creation. 
                                It can also generate creative writing, poetry, and even code.
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col align-h="center">
                    <div style="width: 60%; margin-left: 20%; margin-right: 20%;">
                        <p class="chat">💬</p>
                        <div class="group-27">
                            <p class="examples">Examples</p>
                            <p
                                @click="prompt='Write a song about the passage of time.'; submitPrompt()"
                                class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                            >
                                Write a song about the passage of time.
                            </p>
                            <p
                                @click="prompt='What is the optimal way to solve a rubik\'s cube?'; submitPrompt()"
                                class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                            >
                                What is the optimal way to solve a rubik's cube?
                            </p>
                            <p
                                @click="prompt='Write a program that takes the height, width, length and shape of the figure and calculates the volume.'; submitPrompt()"
                                class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                            >
                                Write a program that takes the height, width, length and shape of the figure and calculates the volume.
                            </p>
                            <p
                                @click='prompt="Translate \"Hey, how are you?\" to french."; submitPrompt()'
                                class="lorem-ipsum-dolor-sit-amet-consectetur-two"
                            >
                                Translate "Hey, how are you?" to french.
                            </p>
                        </div>
                    </div>
                </b-col>
                <b-col align-h="center">
                    <div style="width: 60%; margin-left: 20%; margin-right: 20%;">
                        <p class="alert">⚠️</p>
                        <div class="group-28">
                            <p class="limitations">Limitations</p>
                            <p
                            class="lorem-ipsum-dolor-sit-amet-consectetur-three"
                            >
                            While GPT-3 API is an incredibly powerful language model that can generate coherent text, it still has some limitations. 
                            One of the main limitations is that it is not capable of true understanding or reasoning, and can sometimes produce nonsensical or inaccurate responses. 
                            </p>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <b-container fluid class="flex-wrapper-one" style="margin-top: 5%;">
            <input type="text" v-model="prompt" class="the-i-thingy-flashing-character" />
            <img
                @click="submitPrompt()"
                alt=""
                class="polygon-1"
                src="https://static.overlay-tech.com/assets/2589b0fe-03a3-4694-9b00-04e2d21bbe50.svg"
            />
        </b-container>
        <b-container v-if="result!=''" fluid class="flex-wrapper-one" style="margin-top: 5%;">
            {{ result }}
        </b-container>
        <b-container>
            <p style="text-align:left; margin-top: 5%; text-decoration: underline; cursor: pointer" @click="showMore=true; window.scrollTo('0', '100%')" class="some-disclaimers-and-such-legal-stuff">
                Regarding the usage of GPT-3.
            </p>
            <p v-if="showMore" style="text-align:left; margin-top: 5%" class="some-disclaimers-and-such-legal-stuff">
                Accuracy and Reliability: While GPT-3 can generate text that may appear to be accurate, it should not be relied upon as a source of truth or factual information. The accuracy and reliability of the generated text can vary based on a number of factors, including the quality and relevance of the input provided to the model.<br><br>

                Ownership and Liability: The ownership and liability of the generated text may be a complex legal issue. It is important to consider who owns the intellectual property rights to the text generated by the model and who is responsible for any legal consequences that may arise from its use.<br><br>

                Misuse and Abuse: GPT-3 can be used to generate a wide range of content, including fake news, misinformation, and propaganda. It is important to use the tool responsibly and ethically, and to be aware of the potential for misuse and abuse.<br><br>

                Privacy and Security: When using GPT-3, it is important to be aware of the privacy and security implications of the data that is being provided to the model. GPT-3 may have access to sensitive information, and there is a risk of data breaches or other security vulnerabilities.<br><br>

                Regulatory Compliance: Depending on the context in which GPT-3 is being used, there may be regulatory requirements or legal obligations that need to be met. It is important to be aware of these requirements and to ensure that they are being met.<br><br>
            </p>
        </b-container>
    </div>-->
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
                <div class="flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="currentHistory=i-1">
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
              <div @click="clearChats()" class="clear-chats-two">
                  <p class="clear-chats">🚮&nbsp;</p>
                  <p class="clear-chats">Clear chats</p>
              </div>
              <div class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">FAQs</p>
              </div>
              <div class="clear-chats-two">
                  <p class="clear-chats">📬&nbsp;</p>
                  <p class="clear-chats">Contact Us</p>
              </div>
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
              <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                <div class="flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="currentHistory=i-1">
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
            <b-container fluid style="position: fixed; bottom: 0; background-color: rgba(244, 244, 244, 1); width: 70%; height: 30%">
              <div class="split-line"></div>
              <div @click="$state.commit('clearChats')" class="clear-chats-two">
                  <p class="clear-chats">🚮&nbsp;</p>
                  <p class="clear-chats">Clear chats</p>
              </div>
              <div class="flex-wrapper-fifteen">
                  <p class="clear-chats">🛫&nbsp;</p>
                  <p class="clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="clear-chats">FAQs</p>
              </div>
              <div class="clear-chats-two">
                  <p class="clear-chats">📬&nbsp;</p>
                  <p class="clear-chats">Contact Us</p>
              </div>
            </b-container>
          </div>
          <b-container class="chat" style="width: 70%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==0" fluid class="group-38">
                <b-row align-h="center"><p class="su-chat">SU Chat</p></b-row>
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
            <b-container v-else fluid class="chatbox">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div>{{ message.content }}</div>
                </div>
                <div v-else style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div>{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
              </div>
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
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==0" fluid class="group-38">
                <p class="su-chat" style="margin-bottom: 0;">SU Chat</p>
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
            <b-container v-else fluid class="chatbox">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div>{{ message.content }}</div>
                </div>
                <div v-else style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div>{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
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
            <b-container @click="newChat()" style="z-index: 1; width: 80%; margin-right: 15%" fluid class="d-flex-wrapper-three">
                <p class="d-new-chat">&#43; New Chat</p>
            </b-container>
            <b-container fluid style="width: 15%; position: fixed; height: 80%; overflow-y: auto; padding-top: 5%; background-color: #282828">
              <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                <div class="d-flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="$state.commit('setCurrentHistory', i-1)">
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
            <b-container fluid style="position: fixed; bottom: 0; background-color: #282828; width: 10%; max-height: 40%">
              <div class="d-split-line"></div>
              <div @click="$state.commit('clearChats')" class="clear-chats-two">
                  <p class="d-clear-chats">🚮&nbsp;</p>
                  <p class="d-clear-chats">Clear chats</p>
              </div>
              <div class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">FAQs</p>
              </div>
              <div class="clear-chats-two">
                  <p class="d-clear-chats">📬&nbsp;</p>
                  <p class="d-clear-chats">Contact Us</p>
              </div>
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
              <div v-for="i in historyTitles.length" :key="i" class="relative-wrapper-three">
                <div class="d-flex-wrapper-five" style="width: 100%; cursor: pointer;" @click="currentHistory=i-1">
                  <div class="d-flex-wrapper-six">
                    <img
                      v-if="historyTitles[i-1]" 
                      alt=""
                      class="vector-5"
                      src="https://static.overlay-tech.com/assets/bec070a2-32be-494f-8efb-c9c72322c75e.svg"
                    />
                    <p style="width:100%" class="d-python-code">{{ historyTitles[i-1] }}</p>
                  </div>
                </div>
              </div>
            </b-container>
            <b-container fluid style="position: fixed; bottom: 0; background-color: #242424; width: 70%; height: 30%">
              <div class="split-line"></div>
              <div @click="clearChats()" class="clear-chats-two">
                  <p class="d-clear-chats">🚮&nbsp;</p>
                  <p class="d-clear-chats">Clear chats</p>
              </div>
              <div class="flex-wrapper-fifteen">
                  <p class="d-clear-chats">🛫&nbsp;</p>
                  <p class="d-clear-chats">Upgrade</p>
              </div>
              <div class="flex-wrapper-sixteen">
                  <p class="d-clear-chats">❓&nbsp;&nbsp;&nbsp;</p>
                  <p class="d-clear-chats">FAQs</p>
              </div>
              <div class="clear-chats-two">
                  <p class="d-clear-chats">📬&nbsp;</p>
                  <p class="d-clear-chats">Contact Us</p>
              </div>
            </b-container>
          </div>
          <b-container class="chat" style="width: 70%">
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==0" fluid class="group-38">
                <b-row align-h="center"><p class="d-su-chat">SU Chat</p></b-row>
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
            <b-container v-else fluid class="chatbox">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white">{{ message.content }}</div>
                </div>
                <div v-else style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 3%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1" style="border: 1px solid rgba(255, 255, 255 0.5); width: 100%; margin-top: 5%"></div>
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
            <b-container v-if="currentHistory==-1 || history[currentHistory].length==0" fluid class="group-38">
                <p class="d-su-chat" style="margin-bottom: 0;">SU Chat</p>
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
            <b-container v-else fluid class="chatbox">
              <div v-for="(message, i) in history[currentHistory]" :key="message" style="margin-top: 5%">
                <div v-if="message.role=='user'" style="display: flex; width: 100%;">
                  <img
                    src="../assets/user-icon.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white">{{ message.content }}</div>
                </div>
                <div v-else style="display: flex; width: 100%;">
                  <img
                    src="../assets/avatar.png"
                    style="max-width: 9%; height: 3%; margin-right: 3%"
                  >
                  <div style="color: white">{{ message.content }}</div>
                </div>
                <div v-if="i!=history[currentHistory].length-1" style="border: 1px solid rgba(22, 22, 22, 0.5); width: 100%; margin-top: 5%"></div>
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
const OPENAI_API_KEY = process.env.VUE_APP_OPENAI_API_KEY
console.log(OPENAI_API_KEY)
const ORG_ID = process.env.VUE_APP_ORG_ID;
const axios = require('axios');
const dotenv = require("dotenv")
dotenv.config()
const OpenAI = require('openai-api');
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

export default {
    data(){
        return{
            prompt: "",
            result: "",
            showLegalStuff: true,
            canSendPrompt: true,
            showMenu: false,
        }
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
    },
    /*
    addHistory(state){state.history.unshift([])},
    addPrompt(state, prompt){state.history[state.currentHistory].unshift({role: 'user', content: prompt})},
    initResponse(state){state.history[state.currentHistory].unshift({role: 'assistant', content: ''})},
    appendResponse(state, content){state.history[state.currentHistory][state.history[state.currentHistory].length-1].content+=content;},
    addHistoryTitle(state, title){state.historyTitles.unshift(title)},
    changeHistoryTitle(state, title){state.historyTitles[state.currentHistory]=title},
    setCurrentHistory(state, currHist){state.currentHistory=currHist;},
    clearChats(state){
      state.history=[],
      state.historyTitles=[],
      state.currentHistory=-1
    },
    */
    methods: {
        newChat(){
          if(this.history[this.currentHistory].length && this.history[0].length){ 
            this.$store.commit('addHistory')
            this.$store.commit('setCurrentHistory', 0)
            this.$store.commit('addHistoryTitle', 'New Chat') 
          } else if (!this.history[0].length){this.$store.commit('setCurrentHistory', 0)}
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
                if(this.prompt.length<16){this.$store.commit('changeHistoryTitle', this.prompt)}
                else{
                  this.$store.commit('changeHistoryTitle', this.prompt.slice(0, 14)+"...")
                }
              }
              
              const configuration = new Configuration({
                apiKey: OPENAI_API_KEY,
              });
              const openai = new OpenAIApi(configuration);
              
              (async () => {
                  const messages = []
                  let strMessages = ""
                  this.$store.commit('addPrompt', this.prompt);
                  this.prompt=""
                  for (let i = 0; i < this.history[this.currentHistory].length && i < 6; i+=2){
                    strMessages+= "user^&*()"+this.history[this.currentHistory][i].content+"!@#$%";
                    if(i+1<this.history[this.currentHistory].length){strMessages+= "assistant^&*()"+this.history[this.currentHistory][i+1].content+"!@#$%";}
                    messages.push({ role: "user", content: this.history[this.currentHistory][i].content });
                    if(i+1<this.history[this.currentHistory].length){messages.push({ role: "assistant", content: this.history[this.currentHistory][i+1].content });}
                  }
                  this.$store.commit('initResponse')
                  console.log(this.history[this.currentHistory])
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
                  try {
                    console.log("aaaa")
                    const completion = await openai.createChatCompletion({
                      model: "gpt-3.5-turbo",
                      messages: messages,
                      temperature: 1,
                    });

                    const completion_text = completion.data.choices[0].message.content;
                    console.log(completion_text)
                    //this.history[this.currentHistory].push({message: completion_text, isUser: false})
                    this.$store.commit('appendResponse', completion_text)
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
                  this.history[this.currentHistory].push({message: this.result, isUser: false})*/
                  
                  this.canSendPrompt=true
              })();
          }
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
    overflow-x: hidden; /* Hide horizontal scrollbar */}
.btn { text-transform: unset !important; }
/*
@media (min-aspect-ratio: 1/1){
    .chat-box-page {
    background-color: white;
    padding: 0 0 0;
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
    .flex-wrapper-four {
    display: flex;
    align-items: flex-start;
    }
    .arm {
    font-family: "Alata";
    font-size: 8vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    }
    .chat {
    font-family: "Alata";
    font-size: 8vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    }
    .alert {
    font-family: "Alata";
    font-size: 8vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    padding: 0 0 0 0;
    }
    .relative-wrapper-one {
    position: relative;
    width: 70%;
    margin-right: 15%;
    margin-left: 15%;
    }
    .flex-wrapper-two {
    display: flex;
    align-items: flex-start;
    position: relative;
    }
    .group-25 {
    background: linear-gradient(
        221deg,
        rgba(119, 146, 236, 1) 0%,
        rgba(253, 69, 204, 1) 96%
    );
    border-radius: 30px;
    padding: 41px 51px 37.72px;
    box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-right: 0%;
    }
    .capabilities {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    display: flex;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .group-27 {
    background: linear-gradient(
        222deg,
        rgba(79, 168, 245, 1) 3%,
        rgba(213, 92, 214, 1) 96%
    );
    border-radius: 30px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    }
    .examples {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .group-28 {
    background: linear-gradient(
        221deg,
        rgba(39, 191, 255, 1) 3%,
        rgba(171, 116, 224, 1) 96%
    );
    border-radius: 30px;
    box-shadow: -1px 1px 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    }
    .limitations {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: white;
    display: flex;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .flex-wrapper-one {
        padding: 0% 0% 0% 0%;
        display: flex;
        align-items: center;
        border: 2px solid rgba(225, 225, 225, 1);
        margin-top: 2%;
        max-width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        height: 10vh;
    }
    .the-i-thingy-flashing-character {
    width: 100%;
    height: 9.5vh;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 200;
    line-height: normal;
    color: rgba(0, 0, 0, 0.75);
    text-align: center;
    }
    .polygon-1 {
    cursor: pointer;
    }
    .some-disclaimers-and-such-legal-stuff {
    text-align: center;
    font-family: "Inter";
    font-size: 2vh;
    font-weight: 400;
    line-height: normal;
    color: black;
    }
}
@media (max-aspect-ratio: 1/1){
    .chat-box-page {
    background-color: white;
    padding: 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    }
    .su-chat {
    font-family: "Cinzel";
    font-size: 6vw;
    font-weight: 400;
    line-height: normal;
    color: gray;
    text-align: center;
    }
    .flex-wrapper-four {
    display: flex;
    align-items: flex-start;
    }
    .arm {
    font-family: "Alata";
    font-size: 8vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    }
    .chat {
    font-family: "Alata";
    font-size: 8vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    }
    .alert {
    font-family: "Alata";
    font-size: 8vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    text-align: center;
    text-shadow: 0 5px 8px rgba(0, 0, 0, 0.25);
    padding: 0 0 0 0;
    }
    .relative-wrapper-one {
    position: relative;
    width: 70%;
    margin-right: 15%;
    margin-left: 15%;
    }
    .flex-wrapper-two {
    display: flex;
    align-items: flex-start;
    position: relative;
    }
    .group-25 {
    background: linear-gradient(
        221deg,
        rgba(119, 146, 236, 1) 0%,
        rgba(253, 69, 204, 1) 96%
    );
    border-radius: 30px;
    padding: 41px 51px 37.72px;
    box-shadow: 1px 1px 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-right: 0%;
    }
    .capabilities {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    display: flex;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .group-27 {
    background: linear-gradient(
        222deg,
        rgba(79, 168, 245, 1) 3%,
        rgba(213, 92, 214, 1) 96%
    );
    border-radius: 30px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    }
    .examples {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur-two {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .group-28 {
    background: linear-gradient(
        221deg,
        rgba(39, 191, 255, 1) 3%,
        rgba(171, 116, 224, 1) 96%
    );
    border-radius: 30px;
    box-shadow: -1px 1px 7px 0 rgba(0, 0, 0, 0.25) inset;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    }
    .limitations {
    margin-top: 15%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: white;
    display: flex;
    text-align: center;
    }
    .lorem-ipsum-dolor-sit-amet-consectetur-three {
    height: 80%;
    width: 80%;
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 200;
    line-height: normal;
    color: white;
    display: flex;
    }
    .flex-wrapper-one {
        padding: 0% 0% 0% 0%;
        display: flex;
        align-items: center;
        border: 2px solid rgba(225, 225, 225, 1);
        margin-top: 2%;
        max-width: 70%;
        margin-left: 15%;
        margin-right: 15%;
        height: 10vw;
    }
    .the-i-thingy-flashing-character {
        width: 100%;
        height: 9.5vw;
        font-family: "Inter";
        font-size: 2vw;
        font-weight: 200;
        line-height: normal;
        color: rgba(0, 0, 0, 0.75);
        text-align: center;
    }
    .polygon-1 {
    cursor: pointer;
    }
    .some-disclaimers-and-such-legal-stuff {
    font-family: "Inter";
    font-size: 2vw;
    font-weight: 400;
    line-height: normal;
    color: black;
    }
}*/
.polygon-1 {
  max-width: 100%;
  max-height: 15px;
  cursor: pointer;
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
    position: fixed; 
    margin-top: 3%; 
    left: 20%;
    width: 70%; 
    height: 70%; 
    overflow-y: auto;
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