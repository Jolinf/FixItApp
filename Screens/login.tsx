import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleGoogle = () => {
    // Navigate to the next screen (e.g., Login or Home)
    // navigation.navigate("Login");
    console.log("Google pressed");
  };

  const handleApple = () => {
    // Navigate to the next screen (e.g., Login or Home)
    // navigation.navigate("Login");
    console.log("Apple pressed");
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
    console.log("Sign In pressed");
  };

  const handlePassword = () => {
    navigation.navigate("Login");
    console.log("Forgotten password pressed");
  };

  const handleSignUp = () => {
    navigation.navigate("Login");
    console.log("Sign up pressed");
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo login.png")} // Replace with your logo
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome back</Text>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email or phone number"
          placeholderTextColor="#888"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />
        <TouchableOpacity
          onPress={handlePassword}
          style={styles.forgotPasswordContainer}
        >
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>
      </View>

      {/* Sign In Button */}
      <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
        <LinearGradient
          colors={["#333D47", "#24798B", "#10B19E"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.gradientButton}
        >
          <Text style={styles.signInText}>Sign in</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Social Buttons */}
      <TouchableOpacity onPress={handleGoogle} style={styles.socialButton}>
        <AntDesign name="google" size={20} color="green" />
        <Text style={styles.socialText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleApple}
        style={[styles.socialButton, styles.appleButton]}
      >
        <FontAwesome name="apple" size={20} color="white" />
        <Text style={[styles.socialText, { color: "white" }]}>
          Continue with Apple
        </Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 24,
  },
  logo: {
    width: 60,
    height: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 32,
  },
  inputContainer: {
    paddingHorizontal: 16,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#F15A29",
    marginTop: 8,
    fontSize: 14,
  },
  signInButton: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  gradientButton: {
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  signInText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  socialButton: {
    marginHorizontal: 16,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    gap: 10,
  },
  appleButton: {
    backgroundColor: "black",
    borderWidth: 0,
  },
  socialText: {
    fontSize: 16,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: "#444",
  },
  signUpText: {
    fontSize: 14,
    color: "#F15A29",
    fontWeight: "bold",
  },
});

export default LoginScreen;
