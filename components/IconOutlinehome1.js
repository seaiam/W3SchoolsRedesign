import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IconOutlinehome1 = ({ style }) => {
  return (
    <View style={[styles.iconOutlinehomeView, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon2.png")}
      />
      <Text style={styles.homeText}>home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    height: "66.67%",
    width: "78.17%",
    top: "0%",
    right: "11.36%",
    bottom: "33.33%",
    left: "10.47%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  homeText: {
    position: "absolute",
    top: 33,
    left: 13,
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  iconOutlinehomeView: {
    position: "relative",
    width: 63.04,
    height: 50,
    overflow: "hidden",
  },
});

export default IconOutlinehome1;
