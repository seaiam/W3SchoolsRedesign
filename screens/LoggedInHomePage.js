import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoggedInHomePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loggedInHomePage}>
      <Text style={styles.welcomeBackToW3Schools}>
        Welcome back to W3Schools!
      </Text>
      <Text style={styles.w3SchoolsText}>W3Schools</Text>
      <View style={styles.searchFieldView}>
        <Image
          style={styles.iconMagnifyingglass}
          resizeMode="cover"
          source={require("../assets/icon--magnifyingglass.png")}
        />
        <Text style={[styles.placeholderText, styles.ml6]}>Search</Text>
        <Image
          style={[styles.sFSymbolMicrophone, styles.ml6]}
          resizeMode="cover"
          source={require("../assets/sf-symbol--microphone.png")}
        />
      </View>
      <View style={styles.pYTHONCOURSEView1}>
        <View style={styles.rectangleView} />
        <ImageBackground
          style={styles.pythonIcon}
          resizeMode="cover"
          source={require("../assets/python.png")}
        />
        <TouchableOpacity
          style={styles.pYTHONQUIZTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonQuiz")}
        >
          <View style={styles.pYTHONQUIZView} />
          <Text style={styles.tryQuizText}>Try Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.pYTHONCOURSETouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonIntroduction")}
        >
          <View style={styles.pYTHONCOURSEView} />
          <Text style={styles.continuePYTHONCourse}>
            Continue PYTHON Course
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.jAVACOURSEView1}>
        <View style={styles.rectangleView1} />
        <ImageBackground
          style={styles.jAVAIcon}
          resizeMode="cover"
          source={require("../assets/java1.png")}
        />
        <TouchableOpacity
          style={styles.jAVAQUIZTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaQuiz")}
        >
          <View style={styles.jAVAQUIZView} />
          <Text style={styles.tryQuizText1}>Try Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.jAVACOURSETouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaINTRODUCTION")}
        >
          <View style={styles.jAVACOURSEView} />
          <Text style={styles.continueJAVACourse}>Continue JAVA Course</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navigationView}>
        <View style={styles.navView} />
        <TouchableOpacity
          style={styles.iconOutlinehomeTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoggedInHomePage")}
        >
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon2.png")}
          />
          <Text style={styles.homeText}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconSolidbookOpenTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Courses")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon8.png")}
          />
          <Text style={styles.coursesText}>courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconOutlinepencilAltTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("StudyPlan")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon4.png")}
          />
          <Text style={styles.agendaText}>agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconOutlineacademicCapTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Quizzes")}
        >
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/icon5.png")}
          />
          <Text style={styles.quizzesText}>quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconSoliduserCircleTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={styles.profileText}>profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  welcomeBackToW3Schools: {
    position: "absolute",
    top: 136,
    left: 10,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "left",
  },
  w3SchoolsText: {
    position: "absolute",
    top: 59,
    left: 10,
    fontSize: 35,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "left",
    width: 194,
    height: 44,
  },
  iconMagnifyingglass: {
    position: "relative",
    width: 15.63,
    height: 15.78,
    flexShrink: 0,
  },
  placeholderText: {
    flex: 1,
    position: "relative",
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "Atkinson Hyperlegible",
    color: "rgba(60, 60, 67, 0.6)",
    textAlign: "left",
  },
  sFSymbolMicrophone: {
    position: "relative",
    width: 11.88,
    height: 17.68,
    flexShrink: 0,
  },
  searchFieldView: {
    position: "absolute",
    top: 67,
    left: 209,
    borderRadius: 10,
    backgroundColor: "rgba(118, 118, 128, 0.12)",
    width: 211,
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: -0.5,
    left: -0.5,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "rgba(224, 41, 44, 0.75)",
    borderWidth: 1,
    width: 411,
    height: 183,
  },
  pythonIcon: {
    position: "absolute",
    top: 23,
    left: 240,
    width: 148,
    height: 137,
  },
  pYTHONQUIZView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 35,
    backgroundColor: "#e33b3d",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 204,
    height: 61,
  },
  tryQuizText: {
    position: "absolute",
    top: 20,
    left: 68,
    fontSize: 18,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "left",
  },
  pYTHONQUIZTouchableOpacity: {
    position: "absolute",
    top: 97,
    left: 12,
    width: 204,
    height: 61,
  },
  pYTHONCOURSEView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 35,
    backgroundColor: "#e33b3d",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 204,
    height: 61,
  },
  continuePYTHONCourse: {
    position: "absolute",
    top: 10,
    left: 21,
    fontSize: 18,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
    width: 152,
  },
  pYTHONCOURSETouchableOpacity: {
    position: "absolute",
    top: 23,
    left: 12,
    width: 204,
    height: 61,
  },
  pYTHONCOURSEView1: {
    position: "absolute",
    top: 491,
    left: 12,
    width: 410,
    height: 182,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 410,
    height: 182,
  },
  jAVAIcon: {
    position: "absolute",
    top: 23,
    left: 242,
    width: 148,
    height: 137,
  },
  jAVAQUIZView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 35,
    backgroundColor: "#e33b3d",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 204,
    height: 61,
  },
  tryQuizText1: {
    position: "absolute",
    top: 20,
    left: 68,
    fontSize: 18,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "left",
  },
  jAVAQUIZTouchableOpacity: {
    position: "absolute",
    top: 97,
    left: 14,
    width: 204,
    height: 61,
  },
  jAVACOURSEView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 35,
    backgroundColor: "#e33b3d",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 204,
    height: 61,
  },
  continueJAVACourse: {
    position: "absolute",
    top: 20,
    left: 9,
    fontSize: 18,
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "left",
  },
  jAVACOURSETouchableOpacity: {
    position: "absolute",
    top: 23,
    left: 14,
    width: 204,
    height: 61,
  },
  jAVACOURSEView1: {
    position: "absolute",
    top: 253,
    left: 10,
    width: 410,
    height: 182,
  },
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
  iconOutlinehomeTouchableOpacity: {
    position: "absolute",
    top: 11,
    left: 23,
    width: 63.04,
    height: 50,
    overflow: "hidden",
  },
  icon1: {
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
  iconSolidbookOpenTouchableOpacity: {
    position: "absolute",
    height: "88.71%",
    width: "12.88%",
    top: "1.61%",
    right: "62.3%",
    bottom: "9.68%",
    left: "24.82%",
    overflow: "hidden",
  },
  icon2: {
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
  iconOutlinepencilAltTouchableOpacity: {
    position: "absolute",
    height: "80.65%",
    width: "11.71%",
    top: "12.9%",
    right: "45.2%",
    bottom: "6.45%",
    left: "43.09%",
    overflow: "hidden",
  },
  icon3: {
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
  iconOutlineacademicCapTouchableOpacity: {
    position: "absolute",
    top: 3,
    left: 263,
    width: 55,
    height: 55,
    overflow: "hidden",
  },
  icon4: {
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
  iconSoliduserCircleTouchableOpacity: {
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
    position: "absolute",
    top: 868,
    left: 2,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
  loggedInHomePage: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
  },
});

export default LoggedInHomePage;
