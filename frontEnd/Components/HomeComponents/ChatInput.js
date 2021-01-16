import { StatusBar } from "expo-status-bar";
import React,{useEffect,useState} from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {connect} from 'react-redux'
import io from "socket.io-client";

import {sendMessage ,receiveMessage} from '../../store/actions';
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

 function ChatInput(props) {

  const [chatMessage, setChatMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const socketLink = io("http://10.10.31.51:3000");
    setSocket(socketLink);
    socketLink.on("Chat message", (receivedMsg) => {
      const receivedChatMessage = JSON.parse(receivedMsg);

      props.messageReceiveFunc(receivedChatMessage);
      console.log("App.js", receivedChatMessage.message);
    });
  }, []);
  const submitChatMessage = () => {
    const sendMessage = {
      event_type: "USER",
      message: chatMessage,
    };

    props.messageSendFunc(sendMessage)

    const sendChatMessage = JSON.stringify(sendMessage);

    socket.emit("Chat message", sendChatMessage);
    setChatMessage("");
  };

  return (
    <View style={styles.chatInputLine}>
      <View style={styles.chatInput}>
        <TextInput
          style={{ textAlign: "left", paddingTop: 4, paddingLeft: 4 }}
          placeholder=" Let us know how are you feeling... "
          onChangeText={(text) => setChatMessage(text)}
          onSubmitEditing={()=>submitChatMessage()}
          value={chatMessage}
        />
      </View>
      <View style={styles.chatItem}>
        <Feather name="mic" size={22} color="black" />
        <Entypo name="camera" size={22} color="black" />
        <MaterialIcons name="attach-file" size={22} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chatInputLine: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    zIndex: 100,
    alignItems: "center",
    backgroundColor: "white",
  },
  chatInput: {
    flex: 1,
    borderWidth: 0.5,
    marginLeft: 10,
    borderRadius: 16,
    height: 40,
    backgroundColor: "#fff",
  },
  chatItem: {
    display: "flex",
    flex: 0.4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
  },
});
const mapDispatchToProps = dispatch=>{
  return{

    messageSendFunc:(data) =>dispatch(sendMessage(data)),
    messageReceiveFunc:(data)=>dispatch(receiveMessage(data))
  };
}
export default connect(null,mapDispatchToProps)(ChatInput);