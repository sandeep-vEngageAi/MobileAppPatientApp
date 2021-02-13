import React, { useState, useEffect, useRef } from "react";
import ChatDayDate from "./ChatDayDate/ChatDayDate";
import ChatBot from "./ChatLayout/ChatBot";
import ChatEmoji from "./ChatLayout/ChatEmoji";
import ChatUser from "./ChatLayout/ChatUser";
import { StyleSheet, Text, View, ScrollView, Button,RefreshControl } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  openSocketConnection,
  closeSocketConnection,
  dataRefreshedCompletely
} from "../../store/actions";

const wait = (timeout) =>{
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}


export default function ChatBody(props) {
  

  const dispatch = useDispatch();
  const scrollViewRef = useRef();

  //code for refreshing
  const [socketDisabled,setSocketDisabled] = useState(true);
  const [refreshing,setRefreshing] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
     
    wait(2000).then(() => setRefreshing(false));
    dispatch(dataRefreshedCompletely());
  }, []);

  const [messages, setMessages] = useState([]);
  const [convId, setConvId] = useState("");
  const state = useSelector((state) => state);
  let renderedMessages = state.messages;
  useEffect(() => {
    setConvId(state.convID);
    setMessages(state.messages);
  }, [renderedMessages]);
  const ChatMessagesRendered = messages.map((chatMsg) => {
    if (chatMsg.event_type == "USER") {
      return (
        <ChatUser
          key={Math.random(1, 1000)}
          message={chatMsg.message}
          presentTime={chatMsg.presentTime}
        />
      );
    } else if (chatMsg.event_type == "BOT") {
      return (
        <ChatBot
          key={Math.random(1000, 20000)}
          message={chatMsg.message}
          presentTime={chatMsg.presentTime}
        />
      );
    }
    console.log(chatMsg);
  });

  // maintaining socket Connection
  const openConnection = () => {
    setSocketDisabled(currState =>!currState);
    dispatch(openSocketConnection());}
    const closeConnection = () => {
      setSocketDisabled(currState =>!currState);
      dispatch(closeSocketConnection());
  }

 
  return (
    <ScrollView
      style={styles.scrollBody}
      // keyboardShouldPersistTaps='always'
      ref={scrollViewRef}
      onContentSizeChange={() =>
        scrollViewRef.current.scrollToEnd({ animated: true })
      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.body_header_title}>
        <View style={styles.body_header_chat}>
        <Text>{convId}</Text>
        </View>
        <View style={styles.body_header_title_buttons}>
          <Button
            style={{ marginRight: 10 }}
            onPress={closeConnection}
            title="closeSocket"
            color="red"
            disabled={socketDisabled}
          />
          <Button disabled ={!socketDisabled} onPress={openConnection} title="OpenSocket" color="green" />
        </View>
      </View>
      <View><Text></Text></View>

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
  body_header_title: {
    padding: 10,
    flexDirection: "row",
    // justifyContent: "space-around",
    // backgroundColor:"grey",
    alignItems:"center",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    color: "black",
    elevation: 2,

  },
  body_header_chat:{
    flex:0.5,
    flexGrow:0.5,
    marginRight:4,
  },
  body_header_title_buttons: {
    flexDirection: "row",
    flex: 0.5,
    flexGrow:1,
    justifyContent: "space-between",
    
  },
  scrollBody: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    color: "#000",
  },
});
