import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IconOutlineacademicCap = ({ style }) => {
  return (
    <View style={[styles.iconOutlineacademicCapView, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon5.png")}
      />
      <Text style={styles.quizzesText}>quizzes</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    height: "67.27%",
    width: "78.64%",
    top: "9.09%",
    right: "12.27%",
    bottom: "23.64%",
    left: "9.09%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  quizzesText: {
    position: "absolute",
    top: "78.18%",
    left: "12.73%",
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  iconOutlineacademicCapView: {
    position: "relative",
    width: 55,
    height: 55,
    overflow: "hidden",
  },
});

export default IconOutlineacademicCap;
