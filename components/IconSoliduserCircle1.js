import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IconSoliduserCircle2 = ({ style }) => {
  return (
    <View style={[styles.iconSoliduserCircleView, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon6.png")}
      />
      <Text style={styles.profileText}>profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    height: "76.36%",
    width: "76.36%",
    top: "0%",
    right: "14.55%",
    bottom: "23.64%",
    left: "9.09%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  profileText: {
    position: "absolute",
    top: "78.18%",
    left: "20%",
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  iconSoliduserCircleView: {
    position: "relative",
    width: 55.39,
    height: 55,
    overflow: "hidden",
  },
});

export default IconSoliduserCircle2;
