const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected:D ");

  socket.on("Chat message", (msg) => {
    let name = "";
    let checked = false;

    function contains(target, pattern) {
      var value = 0;
      pattern.forEach(function (word) {
        value = value + target.includes(word);
        if (value & !checked) {
          name = word;
          checked = true;
        }
      });
      return value === 1;
    }
    let greetingArr = ["HI", "Hi", "Hello", "hello"];
    let enquiryArr = ["Brain", "brain", "MRI","mri", "CT","ct","Ct", "Scan", "scan","SCAN", "chest","CHEST","Chest","Xray","xray"];
    let names = ["Sandeep","sandeep","rahul","Rahul","RAHUL","Shubham","shubham","Ayush","ayush","tapesh","Tapesh","TAPESH","Abhishek","abhishek",];
    const messageFromUser = JSON.parse(msg);
    if (contains(messageFromUser.message, greetingArr)) {
      const sentMessage = JSON.stringify({
        event_type: "BOT",
        message: " Hi, how may I assist you today? . Please specify your Name",
      });
      socket.emit("Chat message", sentMessage);
      console.log(sentMessage);
    } else if (contains(messageFromUser.message, enquiryArr)) {
      const sentMessage = JSON.stringify({
        event_type: "BOT",
        message:
          "We will soon connect you to our Doctor. ",
      });
      socket.emit("Chat message", sentMessage);
      console.log(sentMessage);
    } else if (contains(messageFromUser.message, names)) {
      const sentMessage = JSON.stringify({
        event_type: "BOT",
        message:
          `Hi, ${name} . Nice to see you Today. Hope you are happy today!`,
      });
      socket.emit("Chat message", sentMessage);
      console.log(sentMessage);
    } else {
      const sentMessage = JSON.stringify({
        event_type: "BOT",
        message:
          "Thanks for connecting with us. Be happy and stay healthy. Keep Smiling",
      });
      socket.emit("Chat message", sentMessage);
      console.log(sentMessage);
    }
  });
});

server.listen(port, () => console.log("server running on port: " + port));
