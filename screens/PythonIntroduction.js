import * as React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Pressable,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountDownTimer from '../components/timer';

const PythonIntroduction = () => {
const navigation = useNavigation();
const minSecs = {minutes: 0, seconds: 15}

  return (
    <View style={styles.pythonIntroduction}>
      <Text style={styles.pythonText}>Python</Text>
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
      <Pressable style={styles.annotatePressable}>
        <TouchableOpacity
          style={styles.pYTHONCOMMENTSTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonCOMMENTS")}
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
      </Pressable>
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
          <Text style={styles.profileText}>profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.courseTextScrollView}>
        <ImageBackground
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-374.png")}
        >
          <ScrollView style={{ maxHeight: 500, padding: 10,}}>
            <Text style={styles.titleText}>
              <Text style={styles.titleText}>What is Python?</Text>
            </Text>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
                Python is a popular programming language. It was created by
                Guido van Rossum, and released in 1991.
            </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              It is used for:
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              web development (server-side),
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              software development,
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>mathematics,</Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>system scripting.</Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Text style={styles.titleText}>What can Python do?</Text>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python can be used on a server to create web applications.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python can be used alongside software to create workflows and
              connect to database systems. It can also read and modify files.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python can be used to handle big data and perform complex
              mathematics.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python can be used for rapid prototyping, or for production-ready
              software development.
            </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Text style={styles.titleText}>Why Python?</Text>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python works on different platforms (Windows, Mac, Linux,
              Raspberry Pi, etc).
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
                Python has a simple syntax similar to the English language. Its
                syntax allows developers to write programs with fewer lines than
                some other programming languages.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python runs on an interpreter system, meaning that code can be
              executed as soon as it is written. This means that prototyping can
              be very quick.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python can be treated in a procedural way, an object-oriented way
              or a functional way.
            </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Text style={styles.titleText}>
              Python Syntax compared to other programming languages
            </Text>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
              Python was designed for readability, and has some similarities to
              the English language with influence from mathematics.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
                Python uses new lines to complete a command, as opposed to other
                programming languages which often use semicolons or parentheses.
            </Text>
            </Pressable>
            <Pressable  style = {({pressed}) => [{backgroundColor: pressed ? 'yellow' : ''}]}>
            <Text style={styles.normalText}>
                Python relies on indentation, using whitespace, to define scope;
                such as the scope of loops, functions and classes. Other
                programming languages often use curly-brackets for this purpose.
            </Text>
            </Pressable>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  pythonText: {
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
  pYTHONCOMMENTSTouchableOpacity: {
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
    top: "-10.28%",
    right: "74.87%",
    bottom: "10.28%",
    left: "0%",
    overflow: "hidden",
  },
  annotatePressable: {
    position: "absolute",
    top: 739,
    left: 14,
    width: 390,
    height: 107,
  },
  rectangleIcon: {
    position: "absolute",
    top: 20,
    left: 120,
    width: 150,
    height: 67,
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
    left: -1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 12,
    left: 0,
    width: 390,
    height: 500,
    overflow: "hidden",
  },
  blankLineText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  normalText: {
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Atkinson Hyperlegible",
    color: "#000",
    textAlign: "left",
  },
  blankLineText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  frameView: {
    position: "relative",
    width: 390,
    height: 509,
    flexShrink: 0,
  },
  courseTextScrollView: {
    position: "absolute",
    top: 201,
    left: 19,
    flex: 1,
  },
  pythonIntroduction: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default PythonIntroduction;
