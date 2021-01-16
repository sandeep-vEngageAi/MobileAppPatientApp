import React, { useState, useEffect,useRef } from "react";
import ChatDayDate from "./ChatDayDate/ChatDayDate";
import ChatLeft from "./ChatLayout/ChatLeft";
import ChatEmoji from "./ChatLayout/ChatEmoji";
import ChatRight from "./ChatLayout/ChatRight";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import {useSelector} from 'react-redux';


  export default function ChatBody(props) {
    const scrollViewRef = useRef();
 const [messages,setMessages] = useState([]);
 const state = useSelector((state) => state);
 let renderedMessages = state.messages;
 useEffect(()=>{
  setMessages(state.messages);
 },[renderedMessages])
  const ChatMessagesRendered = messages.map((chatMsg) => {
    if (chatMsg.event_type == "USER") {
      return <ChatRight key={Math.random(1,1000)} message={chatMsg.message} />;
    } else if(chatMsg.event_type=="BOT") {
      return <ChatLeft key={Math.random(1000,20000)} message={chatMsg.message} />;
    }
    console.log(chatMsg);
  });

  return (
    <ScrollView style={styles.scrollBody}
    ref={scrollViewRef}
    onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      <ChatDayDate name="today" />
      <ChatEmoji />
      {ChatMessagesRendered}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: "white",
    color: "black",
    padding: 10,
  },

  scrollBody: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    color: "#000",
  },
});
