import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./Screens/splashscreen";
import IntroScreen from "./Screens/introscreen";
import LoginScreen from "./Screens/login";
// import GetStartedScreen from "./Screens/getstarted"; // Optional final screen

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // Show splash screen for 10 seconds

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return (
      <>
        <StatusBar style="light" />
        <SplashScreen />
      </>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="GetStarted" component={GetStartedScreen} /> */}
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
