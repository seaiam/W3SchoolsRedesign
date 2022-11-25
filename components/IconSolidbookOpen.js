import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IconSolidbookOpen = ({ style }) => {
  return (
    <View style={[styles.iconSolidbookOpenView, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon8.png")}
      />
      <Text style={styles.coursesText}>courses</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    height: "56.92%",
    width: "72.73%",
    top: "20%",
    right: "17.27%",
    bottom: "23.08%",
    left: "10%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  coursesText: {
    position: "absolute",
    width: "123.64%",
    top: "81.82%",
    left: "-10.91%",
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  iconSolidbookOpenView: {
    position: "relative",
    width: 55.39,
    height: 55,
    overflow: "hidden",
  },
});

export default IconSolidbookOpen;
