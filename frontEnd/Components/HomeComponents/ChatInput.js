import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState,useRef } from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { connect } from "react-redux";
import { sendMessage, receiveMessage, updateConvId } from "../../store/actions";
import { StyleSheet, View,  TextInput, AppState,} from "react-native";

function ChatInput(props) {
  const [chatMessage, setChatMessage] = useState("");
  const [socketConnection, setSocketConnection] = useState(false);
  const [convId,setConvId] = useState("");
  const [presentTime,setPresentTime] = useState(new Date());
  const [previousState,setPreviousState] = useState(false);

  // for checking visibility of chat 
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };
  

  // websocket code...

  Date.prototype.hhmmss = function (delimiter = ":") {
    var hh = this.getHours(); // getMonth() is zero-based
    var am_pm = hh < 12 ? "AM" : "PM";
    hh = hh % 12 || 12;
    var mm = this.getMinutes();
    if (mm < 10) {
      mm = "0" + mm;
    }
    var ss = this.getSeconds();
    if (ss < 10) {
      ss = "0" + ss;
    }
    return [hh, mm, ss].join(delimiter) + " " + am_pm;
  };
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  var uid = "app-" + getRndInteger(1, 100000);
  
  // socket declaration
  function InitializeSocket() {
    // var socket = new WebSocket( `${process.env.REACT_APP_API_URL}/api/chatter`);
    var socket = new WebSocket( `wss://staging.vengage.ai/api/chatter`);
    console.log("CONNECTIONSTATUS_CHATINPUT",(props.connectionStatus))
    socket.onopen = function (e) {
      console.log("connected");
      socket.send(JSON.stringify({ "event": "CONNECTED", "uid": uid }))
      setSocketConnection(socket);
      setConvId(uid);
      props.updateConvIdFunc(uid);
      setPreviousState(true);
    };
    socket.onmessage = function (event) {
      console.log(event)
      setPresentTime(new Date().hhmmss());
      const receivedChatMessage = {
        event_type: "BOT",
        message: event.data,
        presentTime:presentTime,
      } 
      // updating redux store 
      props.messageReceiveFunc(receivedChatMessage);
     
    };
    socket.onclose = function (event) {
      console.log("CLOSED",event)
      socket.close();
    }
  }
  const PresentConnectionState = props.connectionStatus;
  useEffect(()=>{

    if(appStateVisible && props.connectionStatus){
      console.log("SOCKET OPENED!");
      InitializeSocket();
    }else if(!appStateVisible || (props.connectionStatus == false)){
      if(previousState){
        socketConnection.close();
        setPreviousState(false);
        console.log("previousState disconnected");
      }
      else{
        console.log("CONNECTION not active, it is already closed! ")
      }
    }
  },[appStateVisible,PresentConnectionState])

 
  
  const submitChatMessage = (e) => {
    e.preventDefault();
    setPresentTime( new Date().hhmmss())
    const sendMessage = {
      event_type: "USER",
      message: chatMessage,
      presentTime:presentTime,
    };
    // updating to store
    if(chatMessage.trim().length !==0){
      props.messageSendFunc(sendMessage);

    }
    
    
    // sending to websocket
    const message ={
      event:"DATA",
      uid:convId,
      data:chatMessage
    }
    
    const sendChatMessage = JSON.stringify(message);
    if(PresentConnectionState && chatMessage.trim().length !== 0){
     socketConnection.send(sendChatMessage);
     if(e.keyCode === 13 && chatMessage.trim().length !== 0 ){
       socketConnection.send(sendChatMessage);
     }
    //  inputRef.current.focus();

   }
    setChatMessage("");
  };
  useEffect(()=>{
    if(appStateVisible ==="background" && previousState)
    socketConnection.close()
  },[appStateVisible])
  
  let inputRef = useRef();

  return (
    <View style={styles.chatInputLine}>
      <View style={styles.chatInput}>
        <TextInput
          style={{ textAlign: "left", paddingTop: 4, paddingLeft: 4 }}
          placeholder=" Let us know how are you feeling... "
          onChangeText={(text) => setChatMessage(text)}
          onSubmitEditing={(e) => submitChatMessage(e)}
          value={chatMessage}
          blurOnSubmit={false}
          ref={inputRef}
          // returnKeyType="none"
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
const mapStateToProps = (state) =>{
  return{
    connectionStatus :state.connectionStatus

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    messageSendFunc: (data) => dispatch(sendMessage(data)),
    messageReceiveFunc: (data) => dispatch(receiveMessage(data)),
    updateConvIdFunc :(convId) =>dispatch(updateConvId(convId)),


  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);

