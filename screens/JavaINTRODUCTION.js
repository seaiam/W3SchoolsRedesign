import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  Linking,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountDownTimer from '../components/timer';
const JavaINTRODUCTION = () => {
const navigation = useNavigation();
const minSecs = {minutes: 0, seconds: 15}
  return (
    <View style={styles.javaINTRODUCTION}>
      <Text style={styles.jAVAText}>JAVA</Text>
      <Text style={styles.introductionText}>Introduction</Text>
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
      <View style={styles.annotateView}>
        <TouchableOpacity
          style={styles.jAVACOMMENTSTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaCOMMENTS")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon18.png")}
          />
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cOURSESTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Courses")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={styles.previousText}>Previous</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.timerView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-38.png")}
        />
        <Text style={styles.timerText}>
          <CountDownTimer minSecs={minSecs}/>
          </Text>
      </View>
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
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/icon3.png")}
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
          <Text style={styles.profileText}>profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameView}>
        <ImageBackground
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-375.png")}
        >
          <ScrollView style={{ maxHeight: 500, paddingBottom: 80, paddingTop: 10, paddingHorizontal: 10, }}>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={styles.titleText}>{`What is Java?`}</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={styles.normalText}>
                {"\n"}Java is a popular programming language, created in 1995.{" "}
                {"\n"}
                It is owned by Oracle, and more than 3 billion devices run Java.
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={styles.normalText}>{"\n"}It is used for :</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={{ ...styles.normalText, marginLeft: 12 }}>
                {`\u2022 Mobile applications (specially Android apps)`}
                {"\n"}
                {`\u2022 Desktop applications`}
                {"\n"}
                {`\u2022 Web applications`}
                {"\n"}
                {`\u2022 Web servers and application servers`}
                {"\n"}
                {`\u2022 Games`}
                {"\n"}
                {`\u2022 Database connection`}
                {"\n"}
                {`\u2022 And much, much more!`}
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={styles.titleText}>
                {"\n"}
                {`Why use Java?`}
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.mobileApplicationsSpecially,
              ]}
            >
              <Text style={{ ...styles.normalText, marginLeft: 12 }}>
                {`\u2022 Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc.)`}
                {"\n"}
                {`\u2022 It is one of the most popular programming language in the world`}
                {"\n"}
                {`\u2022 It has a large demand in the current job market`}
                {"\n"}
                {`\u2022 It is easy to learn and simple to use`}
                {"\n"}
                {`\u2022 It is open-source and free`}
                {"\n"}
                {`\u2022  It is secure, fast and powerful `}
                {"\n"}
                {`\u2022 It has a huge community support (tens of millions of developers) !`}
                {"\n"}
                {`\u2022 Java is an object oriented language which gives a clear structure to programs and allows code to be reused, lowering development costs As Java is close to C++ and C#, it makes it easy for programmers to switch to Java or vice versa`}
              </Text>
            </Pressable>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleIcon: {
    position: "absolute",
    top: 20,
    left: 120,
    width: 150,
    height: 67,
  },
  timerText: {
    position: "absolute",
    top: 30,
    left: 165,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 130.59,
    height: 33,
  },
  normalText: {
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    fontWeight: "600"
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Atkinson Hyperlegible",
    color: "#000",
    textAlign: "left",
  },
  ml6: {
    marginLeft: 6,
  },
  jAVAText: {
    position: "absolute",
    top: 136,
    left: 10,
    fontSize: 20,
    textDecoration: "underline",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "left",
  },
  introductionText: {
    position: "absolute",
    top: 171,
    left: 10,
    fontSize: 20,
    fontStyle: "italic",
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
    height: "52.34%",
    width: "60.2%",
    top: "26.64%",
    right: "19.9%",
    bottom: "21.03%",
    left: "19.9%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon1: {
    position: "absolute",
    height: "55.14%",
    width: "63.27%",
    top: "24.3%",
    right: "25.51%",
    bottom: "20.56%",
    left: "11.22%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  nextText: {
    position: "absolute",
    top: 84,
    left: 20,
    fontSize: 20,
    letterSpacing: -0.24,
    fontFamily: "Raleway",
    color: "#e0292c",
    textAlign: "center",
  },
  jAVACOMMENTSTouchableOpacity: {
    position: "absolute",
    height: "100%",
    width: "25.13%",
    top: "-10.28%",
    right: "-4.36%",
    bottom: "10.28%",
    left: "79.23%",
    overflow: "hidden",
  },
  icon2: {
    position: "absolute",
    height: "55.14%",
    width: "63.27%",
    top: "22.43%",
    right: "18.37%",
    bottom: "22.43%",
    left: "18.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  previousText: {
    position: "absolute",
    top: "78.5%",
    left: "10.2%",
    fontSize: 20,
    letterSpacing: -0.24,
    fontFamily: "Raleway",
    color: "#e0292c",
    textAlign: "center",
  },
  cOURSESTouchableOpacity: {
    position: "absolute",
    height: "100%",
    width: "25.13%",
    top: "0%",
    right: "74.87%",
    bottom: "0%",
    left: "0%",
    overflow: "hidden",
  },
  annotateView: {
    position: "absolute",
    top: 739,
    left: 14,
    width: 390,
    height: 107,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 390,
    height: 500,
    overflow: "hidden",
  },
  leftText: {
    position: "absolute",
    top: 39,
    left: 0.69,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 130.59,
    height: 33,
  },
  rectangleView: {
    position: "absolute",
    top: 4,
    left: 200,
    backgroundColor: "#e0292c",
    width: 61,
    height: 19,
  },
  rectangleView1: {
    position: "absolute",
    top: 4,
    left: 129,
    backgroundColor: "#e0292c",
    width: 61,
    height: 19,
  },
  timerView: {
    position: "absolute",
    top: 120,
    left: 130,
    width: 275,
    height: 72,
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
    left: -2,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
  mobileApplicationsSpecially: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  desktopApplications: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  webApplicationsText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  webServersAnd: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  gamesText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  databaseConnectionText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  andMuchMuch: {
    margin: 0,
  },
  mobileApplicationsSpecially1: {
    position: "absolute",
    top: 190,
    left: 5,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 214,
  },
  javaIsA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsOwned: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsUsed: {
    margin: 0,
  },
  javaIsAPopularProgramming: {
    position: "absolute",
    top: 86,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 113,
  },
  whatIsJava: {
    position: "absolute",
    top: 42,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  javaWorksOnDifferentPlatfo: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsOneOfTheMostPopular: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itHasALargeDemandInTheC: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsEasyToLearnAndSimple: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsOpenSourceAndFree: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itIsSecureFastAndPowerfu: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  itHasAHugeCommunitySuppor: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  javaIsAnObjectOrientedLan: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  cText: {
    textDecoration: "underline",
  },
  cText1: {
    textDecoration: "underline",
  },
  asJavaIsCloseToCAndC: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  javaWorksOnDifferentPlatfo1: {
    position: "absolute",
    top: 350,
    left: 5,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 487,
  },
  whyUseJava: {
    position: "absolute",
    top: 300,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 145,
    height: 29,
  },
  frameView: {
    position: "absolute",
    top: 201,
    left: 19,
    flex: 1,
  },
  courseTextScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  courseTextScrollView: {
    position: "absolute",
    height: 500,
    top: 200,
    left: 23,
  },
  javaINTRODUCTION: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default JavaINTRODUCTION;
