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
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CountDownTimer from '../components/timer';

const PythonCOMMENTS = () => {
const navigation = useNavigation();
const minSecs = {minutes: 0, seconds: 15}

return (
    <View style={styles.pythonCOMMENTS}>
      <Text style={styles.pythonText}>Python</Text>
      <Text style={styles.commentsText}>Comments</Text>
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
          style={styles.qUIZPYTHONTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonQuiz")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon18.png")}
          />
          <Text style={styles.quizText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iNTROPYHTONTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("PythonIntroduction")}
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
      <View style={styles.frameView}>
        <ImageBackground
          style={styles.rectangleIcon1}
          resizeMode="cover"
          source={require("../assets/rectangle-372.png")}
        >
          <ScrollView
            style={{
              maxHeight: 500,
              paddingTop: 10,
              paddingHorizontal: 10,
            }}
            contentContainerStyle={styles.courseTextScrollViewContent}
          >
            <Text style={styles.titleText}>Python Comments{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Comments can be used to explain Python code. Comments can be
                used to make the code more readable. Comments can be used to
                prevent execution when testing code.
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.titleText}>Creating a comment</Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Comments starts with a #, and Python will ignore them on
                execution:
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../assets/randomcommentpy.png")}
            />
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Comments can be placed at the end of a line, and Python will
                ignore the rest of the line:
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../assets/eolpython.png")}
            />
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                A comment does not have to be text that explains the code, it
                can also be used to prevent Python from executing code:
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={require("../assets/pythonCodeComment.png")}
            />
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.titleText}>Python Multi-line comments</Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Python does not really have a syntax for multi line comments. To
                add a multiline comment you could insert a # for each line:
              </Text>
            </Pressable>
            <Image
              style={{ ...styles.image }}
              resizeMode="cover"
              source={require("../assets/pythonml.png")}
            />
            <Text>{"\n"}</Text>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Or, not quite as intended, you can use a multiline string. Since
                Python will ignore string literals that are not assigned to a
                variable, you can add a multiline string (triple quotes) in your
                code, and place your comment inside it:
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Image
              style={{ ...styles.image }}
              resizeMode="cover"
              source={require("../assets/pythonquotecomment.png")}
            />
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                As long as the string is not assigned to a variable, Python will
                read the code, but then ignore it, and you have made a multiline
                comment.
              </Text>
            </Pressable>
            <Text>{"\n"}</Text>
            <Text>{"\n"}</Text>
            <Text style={styles.titleText}>KNOWLEDGE CHECK !</Text>
            <Text
              style={styles.normalText}
            >{`Is this (//) the character you use you mark a single-line comment ? `}</Text>

            <View style={styles.rowContainer}>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "red" : "transparant",
                    marginRight: 100,
                    marginLeft: 60,
                    padding: 20,
                  },
                  styles.javaCommentsText,
                ]}
              >
                <Text style={styles.normalText}>Yes</Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "green" : "transparant",
                    padding: 20,
                  },
                  styles.javaCommentsText,
                ]}
              >
                <Text style={styles.normalText}>No</Text>
              </Pressable>
            </View>
            <Text style={styles.blankLineText12}> </Text>
            <Text style={styles.blankLineText12}> </Text>
            <Text style={styles.blankLineText12}> </Text>
            <Text style={styles.blankLineText12}> </Text>
            <Text style={styles.blankLineText12}> </Text>
          </ScrollView>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: "center",
  },
  frameView: {
    position: "absolute",
    top: 201,
    left: 19,
    flex: 1,
  },
  codeText: {
    fontSize: 20,
    fontFamily: "Source Code",
    color: "#ff4f00",
    textAlign: "center",
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
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 7,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-center",
  },
  ml6: {
    marginLeft: 6,
  },
  courseTextScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
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
  commentsText: {
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
  quizText: {
    position: "absolute",
    top: 84,
    left: 21,
    fontSize: 20,
    letterSpacing: -0.24,
    fontFamily: "Raleway",
    color: "#e0292c",
    textAlign: "center",
  },
  qUIZPYTHONTouchableOpacity: {
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
  iNTROPYHTONTouchableOpacity: {
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
    left: -6,
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
  screenshot20221117At1115: {
    position: "absolute",
    top: 1176,
    left: 66,
    width: 233,
    height: 138,
  },
  screenshot20221117At1114: {
    position: "absolute",
    top: 638,
    left: 81,
    width: 218,
    height: 51,
  },
  screenshot20221117At1113: {
    position: "absolute",
    top: 493,
    left: 3,
    width: 383,
    height: 33,
  },
  screenshot20221117At11151: {
    position: "absolute",
    top: 885,
    left: 73,
    width: 233,
    height: 95,
  },
  screenshot20221117At1112: {
    position: "absolute",
    top: 331,
    left: 83,
    width: 213,
    height: 51,
  },
  answerTextInput: {
    position: "absolute",
    top: 1556,
    left: 13,
    width: 336,
    height: 37,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 117,
    height: 39,
  },
  confirmText: {
    position: "absolute",
    top: 8,
    left: 22,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  confirmationPressable: {
    position: "absolute",
    top: 1618,
    left: 237,
    width: 117,
    height: 39,
  },
  pythonCommentsText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    margin: 0,
  },
  pythonCommentsText1: {
    position: "absolute",
    top: 7,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 19,
  },
  commentsCanBe: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  commentsCanBe1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  commentsCanBe2: {
    margin: 0,
  },
  commentsCanBeUsedToExplai: {
    position: "absolute",
    top: 42,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 148,
  },
  creatingAComment: {
    position: "absolute",
    top: 197,
    left: 12,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 22,
  },
  commentsStartsWithAAnd: {
    position: "absolute",
    top: 237,
    left: 14,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 47,
  },
  aCommentDoesNotHaveToBe: {
    position: "absolute",
    top: 542,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 111,
  },
  multiLineComments: {
    position: "absolute",
    top: 705,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 111,
  },
  pythonDoesNot: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  toAddA: {
    margin: 0,
  },
  pythonDoesNotReallyHaveA: {
    position: "absolute",
    top: 742,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 111,
  },
  commentsCanBe3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  commentsCanBePlacedAtThe: {
    position: "absolute",
    top: 390,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 263,
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  orNotQuite: {
    margin: 0,
  },
  orNotQuiteAsIntendedYou: {
    position: "absolute",
    top: 977,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    whiteSpace: "pre-wrap",
    textAlign: "left",
    width: 360,
    height: 191,
  },
  asLongAsTheStringIsNotA: {
    position: "absolute",
    top: 1349,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 101,
  },
  kNOWLEDGECHECK: {
    position: "absolute",
    top: 1453,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 32,
  },
  whatSymbolIndicatesTheStar: {
    position: "absolute",
    top: 1497,
    left: 21,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 51,
  },
  courseTextView: {
    position: "relative",
    width: 390,
    height: 518,
    flexShrink: 0,
  },
  courseTextScrollView: {
    position: "absolute",
    top: 211,
    left: 15,
    flex: 1,
  },
  pythonCOMMENTS: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default PythonCOMMENTS;
