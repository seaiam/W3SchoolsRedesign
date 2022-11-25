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
const JavaCOMMENTS = () => {
const navigation = useNavigation();
const minSecs = {minutes: 0, seconds: 15}
  return (
    <View style={styles.javaCOMMENTS}>
      <Text style={styles.jAVAText}>JAVA</Text>
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
      <View style={styles.annotateView}>
        <TouchableOpacity
          style={styles.iconOutlinearrowCircleRighTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaQuiz")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon18.png")}
          />
          <Text style={styles.nextText}>Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconOutlinearrowCircleLeftTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaINTRODUCTION")}
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
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.titleText}>Java Comments{"\n"}</Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Comments can be used to explain Java code, and to make it more
                readable. It can also be used to prevent execution when testing
                alternative code.
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.titleText}>{"\n"}Single Line Comments</Text>
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                {"\n"}Single-line comments start with two forward slashes (//).
                {"\n"}Any text between // and the end of the line is ignored by
                Java (will not be executed). {"\n"}This example uses a
                single-line comment before a line of code:{"\n"}
              </Text>
            </Pressable>
            <Image
              style={styles.screenshot20221117At1030}
              resizeMode="cover"
              source={require("../assets/screenshot20221117at10301.png")}
            />
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                {"\n"}This example uses a single-line comment at the end of a
                line of code:
                {"\n"}
              </Text>
            </Pressable>
            <Image
              style={styles.screenshot20221117At1030}
              resizeMode="cover"
              source={require("../assets/endLinecomment.png")}
            />
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.titleText}>
                {"\n"}
                {"\n"}Java Multi-line comments{"\n"}
              </Text>
            </Pressable>
            <Pressable
              style={({ pressed }) => [
                { backgroundColor: pressed ? "yellow" : "transparant" },
                styles.javaCommentsText,
              ]}
            >
              <Text style={styles.normalText}>
                Multi-line comments start with /* and ends with */. {"\n"}Any
                text between /* and */ will be ignored by Java.{"\n"}This
                example uses a multi-line comment (a comment block) to explain
                the code:{"\n"}
              </Text>
            </Pressable>
            <Image
              style={styles.screenshot20221117At1030}
              resizeMode="cover"
              source={require("../assets/multilinecomment.png")}
            />
            <Text style={styles.titleText}>
              {"\n"}
              {"\n"}KNOWLEDGE CHECK !
            </Text>
            <Text
              style={styles.normalText}
            >{`Is this how you mark a single-line comment ? `}</Text>
            <Text style={styles.codeText}>{`// Hello!`}{"\n"}</Text>

            <View style={styles.rowContainer}>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "green" : "transparant", marginRight: 100, marginLeft: 65, padding: 20  },
                  styles.javaCommentsText,
                ]}
              >
                <Text style={styles.normalText}>
                  Yes
                </Text>
              </Pressable>
              <Pressable
                style={({ pressed }) => [
                  { backgroundColor: pressed ? "red" : "transparant",padding: 20 },
                  styles.javaCommentsText,
                ]}
              >
                <Text style={styles.normalText}>
                  No
                </Text>
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
  nextText: {
    position: "absolute",
    top: 84,
    left: 21,
    fontSize: 20,
    letterSpacing: -0.24,
    fontFamily: "Raleway",
    color: "#e0292c",
    textAlign: "center",
  },
  iconOutlinearrowCircleRighTouchableOpacity: {
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
  iconOutlinearrowCircleLeftTouchableOpacity: {
    position: "absolute",
    height: "100%",
    width: "25.13%",
    top: "-10.28%",
    right: "74.87%",
    bottom: "10.28%",
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
    top: 1,
    left: 0,
    backgroundColor: "#e0292c",
    width: 61,
    height: 19,
  },
  rectangleView1: {
    position: "absolute",
    top: 1,
    left: 0,
    backgroundColor: "#e0292c",
    width: 61,
    height: 19,
  },
  timerView: {
    position: "absolute",
    top: 123,
    left: 135,
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
    left: -3,
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
  javaCommentsText: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  javaCommentsText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    fontFamily: "Raleway",
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText2: {
    fontFamily: "Raleway",
  },
  blankLineText3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText4: {
    fontFamily: "Raleway",
  },
  blankLineText5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText6: {
    fontFamily: "Raleway",
  },
  blankLineText7: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText8: {
    fontFamily: "Raleway",
  },
  blankLineText9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText10: {
    fontFamily: "Raleway",
  },
  blankLineText11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText12: {
    fontFamily: "Raleway",
  },
  blankLineText13: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText14: {
    fontFamily: "Raleway",
  },
  blankLineText15: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText16: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText17: {
    margin: 0,
  },
  javaCommentsText2: {
    position: "absolute",
    top: 23,
    left: 15,
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 34,
  },
  commentsCanBeUsedToExplai: {
    position: "absolute",
    top: 68,
    left: 15,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 118,
  },
  singleLineCommentsText: {
    position: "absolute",
    top: 268,
    left: 16,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 27,
  },
  singleLineCommentsStart: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anyTextBetween: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  thisExampleUses: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  singleLineCommentsStartWit: {
    position: "absolute",
    top: 312,
    left: 16,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 191,
  },
  screenshot20221117At1030: {},
  blankLineText18: {
    fontFamily: "Raleway",
  },
  blankLineText19: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  javaMultiLineComments: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  javaMultiLineComments1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  javaMultiLineComments2: {
    position: "absolute",
    top: 520,
    left: 20,
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 71,
  },
  multiLineCommentsStart: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  anyTextBetween1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  thisExampleUses1: {
    margin: 0,
  },
  multiLineCommentsStartWith: {
    position: "absolute",
    top: 578,
    left: 20,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 374,
  },
  screenshot20221117At1035: {
    width: 373,
    height: 22,
  },
  screenshot20221117At1036: {
    width: 345,
    height: 57,
  },
  kNOWLEDGECHECK: {
    position: "absolute",
    top: 838,
    left: 13,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 28,
  },
  howDoYouMarkASingleLine: {
    position: "absolute",
    top: 877,
    left: 26,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 360,
    height: 51,
  },
  rectangleTextInput: {
    position: "absolute",
    top: 937,
    left: 28,
    backgroundColor: "#fff",
    width: 336,
    height: 30,
  },
  cONFIRMANSWERPressable: {
    position: "absolute",
    top: 998,
    left: 256,
    backgroundColor: "#d9d9d9",
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 117,
    height: 39,
  },
  confirmText: {
    position: "absolute",
    top: 1006,
    left: 273,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
  },
  writeYourAnswerHere: {
    position: "absolute",
    top: 937,
    left: 48,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "rgba(0, 0, 0, 0.5)",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 201,
    left: 19,
    flex: 1,
  },
  courseTextScrollView: {
    position: "absolute",
    top: 220,
    left: 20,
    boxSizing: "border-box",
    flex: 1,
  },
  javaCOMMENTS: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default JavaCOMMENTS;
