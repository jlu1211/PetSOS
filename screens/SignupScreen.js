import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from "react-native";
import Colours from "../constants/colors";

export const SignupScreen = ({navigation}) => {
    return (
      <>
        <View style={{}}>
        <Image source={require('../assets/image1.png')} style={styles.imageTop}></Image>
        <Text style={styles.text}>or connect with</Text>
        <Text style={styles.textSignUp}>Sign Up</Text>
        <TextInput
        style={styles.textInputUsername}
          placeholder="  Username">
        </TextInput>
        <TextInput
        style = {styles.textInputPassword}
        placeholder= "  Password">
        </TextInput>
        <TextInput
        style = {styles.textInputConfirmPassword}
        placeholder= "  Confirm Password">
        </TextInput>
        <TouchableOpacity
            style={styles.signupButton} onPress={() => {
              navigation.navigate("Map");
            }}
          >
            <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        style={styles.buttonFacebook}>
          <Text style={styles.buttonTextFacebook}>FaceBook</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
        style={styles.buttonTwitter}>
          <Text style={styles.buttonTextTwitter}>Twitter</Text>
        </TouchableOpacity>
          {/*
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.pop()}
          >
            <Text style={styles.buttonText}>go back to init screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Map")}
          >
            <Text style={styles.buttonText}>go to map screen</Text>
          </TouchableOpacity>
           */}
        </View>
      </>
    );
  };

const styles = StyleSheet.create({
    buttonFacebook: {
      marginVertical: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: "40%",
      backgroundColor: '#0165E1',
      position: 'absolute',
      left: 30,
      top: 670,
    },
    buttonTextFacebook: {
      // color: Colors.secondary,
      fontSize: 18,
      fontWeight: "600",
      color: 'white',
    },
    buttonTwitter: {
      marginVertical: 50,
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      width: "40%",
      backgroundColor: '#1DA1F2',
      position: 'absolute',
      right: 30,
      top: 670,
    },
    buttonTextTwitter: {
      // color: Colors.secondary,
      fontSize: 18,
      fontWeight: "600",
      color: 'white',
    },
    imageTop: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 450,
      height: 650,
    },
    text: {
      marginTop: 20,
      alignSelf: 'center',
      fontSize: 18,
      fontWeight: '500',
      color: Colours.primary_variant,
    },
    textSignUp: {
      alignSelf: 'center',
      position: 'absolute',
      top: 150,
      fontSize: 36,
      fontWeight: '500',
    },
    textInputUsername: {
      position: 'absolute',
      top: 250,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    textInputPassword: {
      position: 'absolute',
      top: 320,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    textInputConfirmPassword: {
      position: 'absolute',
      top: 390,
      alignSelf: 'center',
      height: 40,
      width: 250,
      borderRadius: 20,
      backgroundColor: 'white',
    },
    signupButton: {
      borderRadius: 40,
      alignSelf: 'center',
      alignItems: 'center',
      padding: 10,
      width: '60%',
      backgroundColor: '#2D384C',
      position: 'absolute',
      top: 500,
    },
    signupButtonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#FFFFFF',
    },
  });