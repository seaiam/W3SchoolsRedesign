import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const Navigation1 = ({ style }) => {
  return (
    <View style={[styles.navigationView, style]}>
      <View style={styles.navView} />
      <View style={styles.iconSolidbookOpenView}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon8.png")}
        />
        <Text style={styles.coursesText}>courses</Text>
      </View>
      <View style={styles.iconOutlinepencilAltView}>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon4.png")}
        />
        <Text style={styles.agendaText}>agenda</Text>
      </View>
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
    position: "absolute",
    height: "88.71%",
    width: "12.88%",
    top: "1.61%",
    right: "62.3%",
    bottom: "9.68%",
    left: "24.82%",
    overflow: "hidden",
  },
  icon1: {
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
    position: "absolute",
    height: "80.65%",
    width: "11.71%",
    top: "12.9%",
    right: "45.2%",
    bottom: "6.45%",
    left: "43.09%",
    overflow: "hidden",
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

export default Navigation1;
