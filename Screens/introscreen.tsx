import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

type RootStackParamList = {
  Login: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const data = [
  {
    id: "1",
    text: "Discover Fixit, your gateway to seamless access and engagement with local service trades.",
    image: require("../assets/ad1.png"),
  },
  {
    id: "2",
    text: "Find reliable local professionals for repairs and maintenance, anytime.",
    image: require("../assets/ad2.png"),
  },
  {
    id: "3",
    text: "Experience the future of service trades with FixIt where efficiency meets excellence",
    image: require("../assets/ad3.png"),
  },
];

const IntroScreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigation = useNavigation<NavigationProp>();

  const handleSnapToItem = (index: number) => {
    setActiveSlide(index);

    // if (index === data.length - 1) {
    //   navigation.replace("GetStarted");
    // }
  };
  const handleNext = () => {
    // Navigate to the next screen (e.g., Login or Home)
    // navigation.navigate("Login");
    console.log("Next pressed");
  };

  const handleSignIn = () => {
    navigation.navigate("Login");
    console.log("Log In pressed");
  };

  const renderItem = ({ item }: any) => (
    <ImageBackground
      source={item.image}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>{item.text}</Text>
        <View style={styles.pagination}>
          {data.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                i === activeSlide ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
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

        <Text style={styles.signInText}>
          Already have an account?{" "}
          <TouchableOpacity onPress={handleSignIn}>
            <Text style={styles.signInLink}>Log in</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </ImageBackground>
  );

  return (
    <Carousel
      width={width}
      height={height}
      data={data}
      scrollAnimationDuration={1000}
      onSnapToItem={handleSnapToItem}
      renderItem={renderItem}
      loop={true}
    />
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 0,
    paddingTop: 500,
    height: "100%",
  },
  text: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    paddingRight: 24,
    paddingLeft: 24,
  },
  pagination: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 24,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#24798B",
    width: 30,
    height: 8,
  },
  inactiveDot: {
    backgroundColor: "#ccc",
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
    fontSize: 16,
    marginBottom: 40,
  },
  signInLink: {
    color: "#FF6B6B", // or any highlight color you'd like
    fontWeight: "800",
  },
});

export default IntroScreen;
