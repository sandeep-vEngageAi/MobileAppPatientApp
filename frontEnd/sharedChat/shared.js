import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import io from "socket.io-client";
export default function App() {
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const socketLink = io("http://192.168.88.163:3000");
    setSocket(socketLink);
    socketLink.on("Chat message", (receivedMsg) => {
      const receivedChatMessage = JSON.parse(receivedMsg);

      setChatMessages((currentMsg) => [...currentMsg, receivedChatMessage]);
      console.log("App.js", receivedChatMessage.message);
    });
  }, []);
  const submitChatMessage = () => {
    const receivedChatMessage = {
      event_type: "USER",
      message: chatMessage,
    };

    setChatMessages((currentMsg) => [...currentMsg, receivedChatMessage]);

    const sendChatMessage = JSON.stringify({
      event_type: "USER",
      message: chatMessage,
    });

    socket.emit("Chat message", sendChatMessage);
    setChatMessage("");
  };

  const ChatMessagesRendered = chatMessages.map((chatMsg) => {
    if (chatMsg.event_type == "USER") {
      return (
        <Text style={{ backgroundColor: "red" }} key={Math.floor(Math.random(1,10000))}>
          {chatMsg.message}
        </Text>
      );
    } else {
      return (
        <Text style={{ backgroundColor: "blue" }} key={Math.floor(Math.random(-100000,1))}>
          {chatMsg.message}
        </Text>
      );
    }
    console.log(chatMsg);
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderWidth: 2 }}
        autoCorrect={false}
        value={chatMessage}
        onSubmitEditing={() => submitChatMessage()}
        onChangeText={(chatMessage) => setChatMessage(chatMessage)}
      />
      {ChatMessagesRendered}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});
