import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const JavaQuiz = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.javaQuizView1}>
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
          style={styles.iconOutlinearrowCircleLeftTouchableOpacity}
          activeOpacity={0.2}
          onPress={() => navigation.navigate("JavaCOMMENTS")}
        >
          <Image
            style={styles.icon1}
            resizeMode="cover"
            source={require("../assets/icon1.png")}
          />
          <Text style={styles.previousText}>Previous</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.w3SchoolsText}>W3Schools</Text>
      <Text style={styles.jAVAText}>JAVA</Text>
      <Text style={styles.quizText}>Quiz</Text>
      <ImageBackground
        style={styles.javaIcon}
        resizeMode="cover"
        source={require("../assets/java.png")}
      />
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
            style={styles.icon3}
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
            style={styles.icon4}
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
            style={styles.icon5}
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
            style={styles.icon6}
            resizeMode="cover"
            source={require("../assets/icon6.png")}
          />
          <Text style={styles.profileText}>profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.javaQuizView}>
        <Image
          style={styles.rectangleIcon}
          resizeMode="cover"
          source={require("../assets/rectangle-375.png")}
        />
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.noPressable]}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.ellipseIcon1}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.noText1}>
            <Text style={styles.noText}>no</Text>
          </Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.noPressable1]}>
          <Image
            style={styles.ellipseIcon2}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.ellipseIcon3}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.noText3}>
            <Text style={styles.noText2}>no</Text>
          </Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.yesPressable]}>
          <Image
            style={styles.ellipseIcon4}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.ellipseIcon5}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.yesText}>yes</Text>
        </Pressable>
        <Text style={styles.doesThisOutputHelloWorld}>
          Does this output “Hello World” ?
        </Text>
        <Text style={styles.whichDataTypeIsUsedToCre}>
          <Text style={styles.whichDataType}>
            Which data type is used to create a variable that should store text?
          </Text>
          <Text style={styles.blankLineText}> </Text>
          <Text style={styles.blankLineText1}> </Text>
          <Text style={styles.blankLineText2}> </Text>
          <Text style={styles.blankLineText3}> </Text>
        </Text>
        <Text style={styles.isThisAValidComment}>
          <Text style={styles.isThisA}>Is this a valid comment ?</Text>
          <Text style={styles.blankLineText4}> </Text>
          <Text style={styles.blankLineText5}> </Text>
          <Text style={styles.blankLineText6}> </Text>
          <Text style={styles.blankLineText7}> </Text>
        </Text>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'red' :''},styles.intPressable]}>
          <Image
            style={styles.ellipseIcon6}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.ellipseIcon7}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.intText1}>
            <Text style={styles.intText}>int</Text>
          </Text>
        </Pressable>
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.stringPressable]}>
          <Image
            style={styles.ellipseIcon8}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.stringText}>String</Text>
        </Pressable>
        <Image
          style={styles.screenshot20221123At113}
          resizeMode="cover"
          source={require("../assets/screenshot-20221123-at-113-1.png")}
        />
        <Image
          style={styles.screenshot20221123At116}
          resizeMode="cover"
          source={require("../assets/screenshot-20221123-at-116-1.png")}
        />
        <Pressable style={({pressed}) => [{backgroundColor: pressed ? 'green' :''},styles.yesPressable1]}>
          <Image
            style={styles.ellipseIcon9}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Image
            style={styles.ellipseIcon10}
            resizeMode="cover"
            source={require("../assets/ellipse-1.png")}
          />
          <Text style={styles.yesText1}>yes</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml6: {
    marginLeft: 6,
  },
  quizTextScrollViewContent: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
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
    top: 60,
    left: 211,
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
    top: 712,
    left: 20,
    width: 390,
    height: 107,
  },
  w3SchoolsText: {
    position: "absolute",
    top: 56,
    left: 4,
    fontSize: 35,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "left",
    width: 194,
    height: 44,
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
  javaIcon: {
    position: "absolute",
    top: 104,
    left: 330,
    width: 84,
    height: 88,
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
    left: -1,
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
    width: 379,
    height: 488,
  },
  ellipseIcon: {
    position: "absolute",
    top: 0,
    left: 0,
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
  noPressable: {
    position: "absolute",
    top: 128,
    left: 206,
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
  ellipseIcon3: {
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
  noPressable1: {
    position: "absolute",
    top: 436,
    left: 202,
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
  ellipseIcon5: {
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
  yesPressable: {
    position: "absolute",
    top: 128,
    left: 33,
    width: 129,
    height: 39,
  },
  doesThisOutputHelloWorld: {
    position: "absolute",
    top: 29,
    left: 21,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 310,
    height: 23,
  },
  whichDataType: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText3: {
    margin: 0,
  },
  whichDataTypeIsUsedToCre: {
    position: "absolute",
    top: 217,
    left: 16,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 381,
    height: 48,
  },
  isThisA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText4: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText5: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText6: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText7: {
    margin: 0,
  },
  isThisAValidComment: {
    position: "absolute",
    top: 342,
    left: 22,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 240,
    height: 26,
  },
  ellipseIcon6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  ellipseIcon7: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  intText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  intText1: {
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
  intPressable: {
    position: "absolute",
    top: 291,
    left: 33,
    width: 129,
    height: 39,
  },
  ellipseIcon8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  stringText: {
    position: "absolute",
    top: 6,
    left: 37,
    fontSize: 20,
    fontFamily: "Raleway",
    color: "#000",
    textAlign: "left",
    width: 56,
    height: 28,
  },
  stringPressable: {
    position: "absolute",
    top: 291,
    left: 206,
    width: 129,
    height: 39,
  },
  screenshot20221123At113: {
    position: "absolute",
    top: 78,
    left: 47,
    width: 284,
    height: 24,
  },
  screenshot20221123At116: {
    position: "absolute",
    top: 380,
    left: 22,
    width: 313,
    height: 36,
  },
  ellipseIcon9: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 129,
    height: 39,
  },
  ellipseIcon10: {
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
  yesPressable1: {
    position: "absolute",
    top: 436,
    left: 33,
    width: 129,
    height: 39,
  },
  javaQuizView: {
    position: "absolute",
    top: 213,
    left: 30,
    width: 379,
    height: 488,
  },
  javaQuizView1: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
  },
});

export default JavaQuiz;
