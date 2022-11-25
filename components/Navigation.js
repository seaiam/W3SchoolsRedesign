import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const Navigation = ({ style }) => {
  return <View style={[styles.navigationView, style]} />;
};

const styles = StyleSheet.create({
  navigationView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
});

export default Navigation;
