import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import splashlogo from "../assets/fixit splashscreen logo.png";

const SplashScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={splashlogo} // adjust path based on location
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.footerText}>Powered by TELDEV TECHNOLOGIES</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 50,
  },
  centerContent: {
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
  footerText: {
    fontSize: 12,
    color: "#888",
    marginBottom: 10,
  },
});

export default SplashScreen;
