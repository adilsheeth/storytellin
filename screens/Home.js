import React, { Component } from 'react';

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { RFValue } from "react-native-responsive-fontsize";
import {  View,  Text,  StyleSheet,  SafeAreaView,  Platform,  StatusBar,  Image} from "react-native";

let customFonts = {
    "Bubblegum-Sans": require('../assets/fonts/BubblegumSans-Regular.ttf'),
}

class Home extends Component {
    state = {
        fontsLoaded: false,
    }

    async _loadFonts() {
        await Font.loadAsync(customFonts);
        this.setState({
            fontsLoaded: true
        });
    }

    componentDidMount(){
        this._loadFonts();
    }

    render() { 
        if(!this.state.fontsLoaded){   
            return (
                <AppLoading />
            );
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.appTitleTextContainer}>
                      <Text style={styles.appTitleText}>Welcome To Storytelling App</Text>
                    </View>
                  <View style={styles.cardContainer}>
                      <Image
                      source={require("../assets/story_image_1.png")}
                      style={styles.storyImage}
                    ></Image>
                    
                  </View>
                  <View style={styles.textContainer}>
                    <Text>
                       Note: Use the navigation to read stories.
                    </Text>
                  </View>
                  
                  <View style={{ flex: 0.08 }} />
                </View>
              );
        }
    }
}
 
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c"
    },
    appTitleTextContainer: {
      flex: 0.7,
      justifyContent: "center",
      textAlign:"center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans"
    },
    storyImage:{
      width:"90%",
      height: RFValue(250),
      alignSelf: "center",
      
    },
    textContainer:{
      paddingTop:RFValue(20),
      color: "white",
      fontSize: RFValue(28),
      fontFamily: "Bubblegum-Sans",
      textAlign:"center"
    }
  });