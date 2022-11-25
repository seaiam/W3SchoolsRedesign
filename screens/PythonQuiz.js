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

const PythonQuiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pythonQuiz}>
      <Text style={styles.pythonText}>Python</Text>
      <Text style={styles.quizText}>Quiz</Text>
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
      <ImageBackground
        style={styles.pythonIcon}
        resizeMode="cover"
        source={require("../assets/python3.png")}
      />
      <TouchableOpacity
        style={styles.iconOutlinearrowCircleLeftTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("PythonCOMMENTS")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon1.png")}
        />
        <Text style={styles.previousText}>Previous</Text>
      </TouchableOpacity>
      <View style={styles.navigationView}>
        <View style={styles.navView} />
        <TouchableOpacity
          style={styles.iconOutlinehomeTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("LoggedInHomePage")}
        >
          <Image
            style={styles.icon2}
            resizeMode="cover"
            source={require("../assets/icon3.png")}
          />
          <Text style={styles.homeText}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconSolidbookOpenTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Courses")}
        >
          <Image
            style={styles.icon3}
            resizeMode="cover"
            source={require("../assets/icon4.png")}
          />
          <Text style={styles.coursesText}>courses</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconOutlinepencilAltTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("StudyPlan")}
        >
          <Image
            style={styles.icon4}
            resizeMode="cover"
            source={require("../assets/icon5.png")}
          />
          <Text style={styles.agendaText}>agenda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconOutlineacademicCapTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Quizzes")}
        >
          <Image
            style={styles.icon5}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={styles.quizzesText}>quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconSoliduserCircleTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon6}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
          <Text style={styles.profileText}>profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pythonQuizView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-375.png")}
        />
        <Text style={styles.isThisAValidPythonComment1}>
          <Text style={styles.blankLineText1}>
            <Text style={styles.blankLineText}> </Text>
          </Text>
          <Text style={styles.isThisAValidPythonComment}>
            <Text style={styles.isThisA}>Is this a valid Python comment ?</Text>
          </Text>
          <Text style={styles.blankLineText3}>
            <Text style={styles.blankLineText2}> </Text>
          </Text>
          <Text style={styles.blankLineText5}>
            <Text style={styles.blankLineText4}> </Text>
          </Text>
          <Text style={styles.blankLineText7}>
            <Text style={styles.blankLineText6}> </Text>
          </Text>
          <Text style={styles.blankLineText9}>
            <Text style={styles.blankLineText8}> </Text>
          </Text>
          <Text style={styles.blankLineText11}>
            <Text style={styles.blankLineText10}> </Text>
          </Text>
          <Text style={styles.blankLineText13}>
            <Text style={styles.blankLineText12}> </Text>
          </Text>
          <Text style={styles.blankLineText15}>
            <Text style={styles.blankLineText14}> </Text>
          </Text>
          <Text style={styles.blankLineText17}>
            <Text style={styles.blankLineText16}> </Text>
          </Text>
          <Text style={styles.blankLineText19}>
            <Text style={styles.blankLineText18}> </Text>
          </Text>
          <Text style={styles.blankLineText21}>
            <Text style={styles.blankLineText20}> </Text>
          </Text>
          <Text style={styles.blankLineText23}>
            <Text style={styles.blankLineText22}> </Text>
          </Text>
        </Text>
        <ImageBackground
          style={styles.screenshot20221118At400}
          resizeMode="cover"
          source={require("../assets/screenshot20221118at4001.png")}
        />
        <Text style={styles.doWeNeedToExplicitlyDecla}>
          <Text style={styles.doWeNeed}>
            Do we need to explicitly declare variable types in Python ?
          </Text>
        </Text>
        <Text style={styles.doesPythonAcceptMultiLine}>
          Does Python accept multi-line comments ?
        </Text>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.yesRedPressable]}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.yesText}>yes</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.yesGreenPressable]}>
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.yesText1}>yes</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.yesRedPressable1]}>
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.yesText2}>yes</Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.noGreenPressable]}>
          <Image
            style={styles.ellipseIcon3}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.noText1}>
            <Text style={styles.noText}>no</Text>
          </Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.noRedPressable1]}>
          <Image
            style={styles.ellipseIcon4}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.noText3}>
            <Text style={styles.noText2}>no</Text>
          </Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.noGreenPressable2]}>
          <Image
            style={styles.ellipseIcon5}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.noText5}>
            <Text style={styles.noText4}>no</Text>
          </Text>
        </Pressable>
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
  quizText: {
    position: "absolute",
    top: 170,
    left: 179,
    fontSize: 30,
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
  pythonIcon: {
    position: "absolute",
    top: 120,
    left: 315,
    width: 88,
    height: 67,
  },
  icon: {
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
    height: "11.49%",
    width: "23%",
    top: "76.69%",
    right: "72.77%",
    bottom: "11.82%",
    left: "4.23%",
    overflow: "hidden",
  },
  icon1: {
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
  navView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#e33b3d",
    width: 430,
    height: 62,
  },
  icon2: {
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
  icon3: {
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
  icon4: {
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
  icon5: {
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
  icon6: {
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
    left: -4,
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    width: 430,
    height: 62,
  },
  rectangleIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 390,
    height: 470,
  },
  blankLineText: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  isThisA: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  isThisAValidPythonComment: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText2: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText3: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText4: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText6: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText7: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText8: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText9: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText10: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText11: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText12: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText13: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText14: {
    fontWeight: "700",
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
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText18: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText19: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText20: {
    fontWeight: "700",
    fontFamily: "Raleway",
  },
  blankLineText21: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText22: {
    fontFamily: "Raleway",
  },
  blankLineText23: {
    margin: 0,
  },
  isThisAValidPythonComment1: {
    position: "absolute",
    top: 10,
    left: 15,
    fontSize: 20,
    color: "#000",
    textAlign: "left",
    width: 310,
    height: 56,
  },
  screenshot20221118At400: {
    position: "absolute",
    top: 66,
    left: 116,
    width: 140,
    height: 25,
  },
  doWeNeed: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  doWeNeedToExplicitlyDecla: {
    position: "absolute",
    top: 194,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 348,
  },
  doesPythonAcceptMultiLine: {
    position: "absolute",
    top: 346,
    left: 15,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 348,
    height: 54,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  yesText: {
    position: "absolute",
    top: 6,
    left: 48,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 32,
    height: 28,
  },
  yesRedPressable: {
    position: "absolute",
    top: 118,
    left: 44,
    width: 129,
    height: 39,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  yesText1: {
    position: "absolute",
    top: 6,
    left: 48,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 32,
    height: 28,
  },
  yesGreenPressable: {
    position: "absolute",
    top: 413,
    left: 44,
    width: 129,
    height: 39,
  },
  ellipseIcon2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  yesText2: {
    position: "absolute",
    top: 6,
    left: 48,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 32,
    height: 28,
  },
  yesRedPressable1: {
    position: "absolute",
    top: 285,
    left: 41,
    width: 129,
    height: 39,
  },
  ellipseIcon3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  noText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  noText1: {
    position: "absolute",
    top: 6,
    left: 50,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 28,
    height: 28,
  },
  noGreenPressable: {
    position: "absolute",
    top: 418,
    left: 208,
    width: 129,
    height: 39,
  },
  ellipseIcon4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  noText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  noText3: {
    position: "absolute",
    top: 6,
    left: 50,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 28,
    height: 28,
  },
  noRedPressable1: {
    position: "absolute",
    top: 285,
    left: 208,
    width: 129,
    height: 39,
  },
  ellipseIcon5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  noText4: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  noText5: {
    position: "absolute",
    top: 6,
    left: 50,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 28,
    height: 28,
  },
  noGreenPressable2: {
    position: "absolute",
    top: 117,
    left: 208,
    width: 129,
    height: 39,
  },
  pythonQuizView: {
    position: "absolute",
    top: 230,
    left: 22,
    borderStyle: "solid",
    borderColor: "#ff4f00",
    borderWidth: 1,
    width: 390,
    height: 470,
  },
  pythonQuiz: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
    overflow: "hidden",
  },
});

export default PythonQuiz;
