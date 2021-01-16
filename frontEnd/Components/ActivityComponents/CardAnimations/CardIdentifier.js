import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const ratio = 228 / 362;
export const CARD_WIDTH = width * 0.8;
export const CARD_HEIGHT = CARD_WIDTH * ratio;
import CardA1 from '../CardA1';


export default ({ type }) => {
  let cardStyle;
  switch (type) {
    case 0:
      cardStyle = {
        backgroundColor: "#D2E9F2",
        zIndex: "1",
        marginTop: "5",
        text: "Your Appointments",
      };
      break;
    case 1:
      cardStyle = {
        backgroundColor: "#D2E9F2",
        zIndex: "1",
        marginTop: "5",
        text: "Your Appointments",
      };
      break;
    case 2:
      cardStyle = {
        backgroundColor:"#798fb3", zIndex:"2", marginTop:"-15", text:"Plan your Diet"
      };
      break;
    case 3:
      cardStyle = {
        backgroundColor:"#496ba3", zIndex:"3", marginTop:"-15", text:"Plan your Exercise"
      };
      break;
    case 4:
      cardStyle = {
        backgroundColor:"#446191", zIndex:"4", marginTop:"-15", text:"Expected Symptoms"
      };
      break;
    case 5:
      cardStyle = {
        backgroundColor:"#4162cc",  zIndex:"5",marginTop:"-15" , text:"Self Help" 
      };
      break;
    case 6:
      cardStyle = {
        backgroundColor:"#8a58d6",  zIndex:"5", marginTop:"-15", text:"How are you doing"
      };
      break;
    case 6:
      cardStyle = {
        backgroundColor:"#8a58d6",  zIndex:"5", marginTop:"-15", text:"How are you doing"
      };
      break;
    case 6:
      cardStyle = {
        backgroundColor:"#632f87",  zIndex:"5", marginTop:"-15", text:"Know your Medication"
      };
      break;
   
  }
  return <CardA1  {...{ cardStyle }} />;
};
