import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  StyleSheet,
  View,
  Image,
  Text,
} from "react-native";

const Navigation2 = ({ style }) => {
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
      <View style={styles.iconOutlineacademicCapView}>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/icon5.png")}
        />
        <Text style={styles.quizzesText}>quizzes</Text>
      </View>
      <View style={styles.iconSoliduserCircleView}>
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require("../assets/icon6.png")}
        />
        <Text style={styles.profileText}>profile</Text>
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
    position: "absolute",
    top: 3,
    left: 263,
    width: 55,
    height: 55,
    overflow: "hidden",
  },
  icon2: {
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
    position: "absolute",
    height: "88.71%",
    width: "12.88%",
    top: "8.06%",
    right: "5.85%",
    bottom: "3.23%",
    left: "81.26%",
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

export default Navigation2;
