import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const IconOutlinepencilAlt2 = ({ style }) => {
  return (
    <View style={[styles.iconOutlinepencilAltView, style]}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon4.png")}
      />
      <Text style={styles.agendaText}>agenda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    height: "68%",
    width: "73.97%",
    top: "0%",
    right: "6.01%",
    bottom: "32%",
    left: "20.01%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  agendaText: {
    position: "absolute",
    top: "70%",
    left: "10%",
    fontSize: 12,
    letterSpacing: -0.24,
    lineHeight: 12,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  iconOutlinepencilAltView: {
    position: "relative",
    width: 50.35,
    height: 50,
    overflow: "hidden",
  },
});

export default IconOutlinepencilAlt2;
