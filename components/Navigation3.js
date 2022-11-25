import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const Navigation3 = ({ style }) => {
  return (
    <View style={[styles.navigationView, style]}>
      <View style={styles.navView} />
    </View>
  );
};

const styles = StyleSheet.create({
  navView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#e33b3d",
    width: 430,
    height: 62,
  },
  navigationView: {
    position: "relative",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
});

export default Navigation3;
