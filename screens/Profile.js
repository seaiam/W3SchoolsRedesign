import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profileView}>
      <Text style={styles.profileText}>Profile</Text>
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
      <View style={styles.profileInfoView}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon56.png")}
        />
        <View style={styles.rectangleView} />
        <View style={styles.rectangleView1} />
        <Text style={styles.normalText}>John Smith</Text>
        <Text style={styles.normalText}>Member since 2022</Text>
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </View>
      <View style={styles.streakView}>
        <Image
          style={styles.iconOutlinefire}
          resizeMode="cover"
          source={require("../assets/iconoutlinefire.png")}
        />
        <Text style={styles.streakText}>Streak</Text>
        <View style={styles.rectangleView2} />
        <Text style={styles.dayText}>5-day</Text>
        <Text style={styles.youreOnFire}>you’re on fire !</Text>
      </View>
      <TouchableOpacity
        style={styles.coursesTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Courses")}
      >
        <Image
          style={styles.iconOutlinelightningBolt}
          resizeMode="cover"
          source={require("../assets/iconoutlinelightningbolt.png")}
        />
        <View style={styles.rectangleView3} />
        <Text style={styles.noneText}>none</Text>
        <Text style={styles.youCanDoIt}>you can do it!</Text>
        <Text style={styles.completedCoursesText}>Completed Courses</Text>
      </TouchableOpacity>
      <View style={styles.inProgressView}>
        <View style={styles.rectangleView4} />
        <TouchableOpacity
          style={styles.javaTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaINTRODUCTION")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/java2.png")}
          />
        </TouchableOpacity>
        <Text style={styles.coursesInProgress}>
          <Text style={styles.coursesIn}>{`Courses in `}</Text>
          <Text style={styles.progressText}>Progress</Text>
        </Text>
        <TouchableOpacity
          style={styles.pythonTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonIntroduction")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/python2.png")}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.quizzesTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("Quizzes")}
      >
        <View style={styles.iconView} />
        <Text style={styles.completedQuizzesText}>Completed Quizzes</Text>
        <View style={styles.rectangleView5} />
        <Text style={styles.noneText1}>none</Text>
      </TouchableOpacity>
      <View style={styles.navigationView}>
        <View style={styles.navView} />
        <TouchableOpacity
          style={styles.iconOutlinehomeTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoggedInHomePage")}
        >
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/icon57.png")}
          />
          <Text style={styles.homeText}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconSolidbookOpenTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Courses")}
        >
          <Image
            style={styles.icon4}
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
            style={styles.icon5}
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
            style={styles.icon6}
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
            style={styles.icon7}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={styles.profileText1}>profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  profileText: {
    position: "absolute",
    top: 137,
    left: 159,
    fontSize: 34,
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
  icon: {
    position: "absolute",
    height: "64.29%",
    width: "29.02%",
    top: "17.58%",
    right: "62.93%",
    bottom: "18.13%",
    left: "8.05%",
    borderRadius: 35,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 410,
    height: 182,
  },
  rectangleView1: {
    position: "absolute",
    top: 112,
    left: 211,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 158,
    height: 47,
  },
  editProfileText: {
    position: "absolute",
    top: 128,
    left: 233,
    fontSize: 24,
    letterSpacing: -0.24,
    lineHeight: 24,
    fontFamily: "Raleway",
    color: "black",
    textAlign: "center",
  },
  profileInfoView: {
    position: "absolute",
    height: "19.57%",
    width: "95.35%",
    top: "21.51%",
    right: "2.33%",
    bottom: "58.92%",
    left: "2.33%",
  },
  iconOutlinefire: {
    position: "absolute",
    top: 50,
    left: 53,
    width: 57,
    height: 51,
    overflow: "hidden",
  },
  streakText: {
    position: "absolute",
    top: 0,
    left: 57,
    fontSize: 20,
    letterSpacing: -0.24,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  rectangleView2: {
    position: "absolute",
    top: 21,
    left: 0,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 169,
    height: 108,
  },
  dayText: {
    position: "absolute",
    top: 35,
    left: 61,
    fontSize: 18,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  youreOnFire: {
    position: "absolute",
    top: 101,
    left: 47,
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontStyle: "italic",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  streakView: {
    position: "absolute",
    top: 417,
    left: 21,
    width: 169,
    height: 129,
  },
  iconOutlinelightningBolt: {
    position: "absolute",
    height: "42.54%",
    width: "33.73%",
    top: "39.55%",
    right: "34.91%",
    bottom: "17.91%",
    left: "31.36%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView3: {
    position: "absolute",
    top: 26,
    left: 0,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 169,
    height: 108,
  },
  noneText: {
    position: "absolute",
    top: 36,
    left: 63,
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  youCanDoIt: {
    position: "absolute",
    top: "79.85%",
    left: "27.22%",
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontStyle: "italic",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  completedCoursesText: {
    position: "absolute",
    top: 0,
    left: 11,
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  coursesTouchableOpacity: {
    position: "absolute",
    height: "14.41%",
    width: "39.3%",
    top: "59.89%",
    right: "55.81%",
    bottom: "25.7%",
    left: "4.88%",
  },
  rectangleView4: {
    position: "absolute",
    top: 35,
    left: 0,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 169,
    height: 397,
  },
  icon1: {
    width: "100%",
    height: "100%",
  },
  javaTouchableOpacity: {
    position: "absolute",
    left: 22,
    top: 92,
    width: 129,
    height: 114,
  },
  coursesIn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  progressText: {
    margin: 0,
  },
  coursesInProgress: {
    position: "absolute",
    top: -5,
    left: 38,
    fontSize: 20,
    letterSpacing: -0.24,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  icon2: {
    width: "100%",
    height: "100%",
  },
  pythonTouchableOpacity: {
    position: "absolute",
    left: 22,
    top: 269,
    width: 129,
    height: 114,
  },
  inProgressView: {
    position: "absolute",
    top: 403,
    left: 234,
    width: 169,
    height: 432,
  },
  iconView: {
    position: "absolute",
    height: "45.38%",
    width: "34.91%",
    top: "35.38%",
    right: "34.91%",
    bottom: "19.23%",
    left: "30.18%",
    borderRadius: 1,
    borderStyle: "solid",
    borderColor: "#e0292c",
    borderWidth: 2,
  },
  completedQuizzesText: {
    position: "absolute",
    top: 0,
    left: 12,
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  rectangleView5: {
    position: "absolute",
    top: 22,
    left: 0,
    borderRadius: 35,
    backgroundColor: "rgba(254, 207, 114, 0.3)",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 169,
    height: 108,
  },
  noneText1: {
    position: "absolute",
    top: 31,
    left: 63,
    fontSize: 16,
    letterSpacing: -0.24,
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "center",
  },
  quizzesTouchableOpacity: {
    position: "absolute",
    height: "13.98%",
    width: "39.3%",
    top: "75.81%",
    right: "55.81%",
    bottom: "10.22%",
    left: "4.88%",
  },
  navView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#e33b3d",
    width: 430,
    height: 62,
  },
  icon3: {
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
  icon4: {
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
  icon5: {
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
  icon6: {
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
  icon7: {
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
  profileText1: {
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
    left: 0,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
  profileView: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 930,
  },
  normalText: {
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    position: "relative",
    fontSize: 20,
    lineHeight: 25,
    fontFamily: "Raleway",
    top: 30,
    left:100,
    textAlign: "center",
  },
});

export default Profile;
