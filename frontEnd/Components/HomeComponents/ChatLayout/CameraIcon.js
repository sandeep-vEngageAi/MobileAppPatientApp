import React,{useState} from 'react';
import CameraRoll from '@react-native-community/cameraroll';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button
} from "react-native";


const CameraIcon = () => {
    const [photos,setPhotos] = useState([]);
    const handleButtonPress = () => {
        CameraRoll.getPhotos({
            first: 20,
            assetType: 'Photos',
          })
          .then(r => {
            setPhotos( r.edges);
          })
          .catch((err) => {
             //Error Loading Images
          });
        };
    return (
        <View>
     <Button title="Load Images" onPress={handleButtonPress} />
     <ScrollView>
       {photos.map((p, i) => {
       return (
         <Image
           key={i}
           style={{
             width: 300,
             height: 100,
           }}
           source={{ uri: p.node.image.uri }}
         />
       );
     })}
     </ScrollView>
   </View>
    )
}

export default CameraIcon;
