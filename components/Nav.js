import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

const Nav = ({ style }) => {
  return <View style={[styles.navView, style]} />;
};

const styles = StyleSheet.create({
  navView: {
    position: "relative",
    backgroundColor: "#e33b3d",
    width: 430,
    height: 62,
  },
});

export default Nav;
