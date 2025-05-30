import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const GetStartedScreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the next screen (e.g., Login or Home)
    // navigation.navigate("Login");
    console.log("Next pressed");
  };

  const handleSignIn = () => {
    // navigation.navigate("Login");
    console.log("Sign In pressed");
  };

  return (
    <ImageBackground
      source={require("../assets/ad3.png")} // replace with your actual image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>
          Experience the future of service trades with{" "}
          <Text style={styles.brand}>FixIt</Text>,{"\n"}where efficiency meets
          excellence
        </Text>

        <TouchableOpacity onPress={handleNext} style={styles.buttonWrapper}>
          <LinearGradient
            colors={["#333D47", "#24798B", "#10B19E"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <Text style={styles.signInLink}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 24,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 24,
    lineHeight: 36,
  },
  brand: {
    color: "#10B19E",
    fontWeight: "bold",
  },
  buttonWrapper: {
    marginBottom: 24,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 50,
    width: width - 48,
    alignSelf: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  signInText: {
    textAlign: "center",
    color: "white",
    fontSize: 14,
    marginBottom: 40,
  },
  signInLink: {
    color: "#FF6B6B", // or any highlight color you'd like
    fontWeight: "600",
  },
});

export default GetStartedScreen;
