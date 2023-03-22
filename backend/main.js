const express = require('express');
const axios = require('axios')
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const http = require('http');
const app = express();

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(bodyParser.urlencoded({ extended: true }));

wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    let strMessages = message;
    console.log(strMessages)
    //strMessages = Object.keys(strMessages)[0]
    let messages = [];
    
    strMessages = strMessages.substring(1, strMessages.length-6)
    strMessages = strMessages.split("!@#$%")
    for(let i = 0; i < strMessages.length; i++){
        strMessages[i] = strMessages[i].split("^&*()")
        messages.push({role: strMessages[i][0], content: strMessages[i][1]})
    }
    console.log(messages)
    const response = openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: messages,
        stream: true,
    }, { responseType: 'stream' });
    response.then((resp) => {
        resp.data.on('data', data => {
            const lines = data.toString().split('\n').filter(line => line.trim() !== '');
            for (const line of lines) {
                const message = line.replace(/^data: /, '');
                if (message === '[DONE]') {
                    ws.send(JSON.stringify({ done: true }));
                    return;
                }
                const parsed = JSON.parse(message);
                ws.send(JSON.stringify(parsed.choices[0].delta.content));
            }
        });
    });
  });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
