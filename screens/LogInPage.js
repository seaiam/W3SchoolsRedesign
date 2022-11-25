import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LogInPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.logInPageView}>
      <Text style={styles.w3SchoolsText}>W3Schools</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textFieldTextInput}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
      />
      <View style={styles.textFieldView}>
        <TextInput
          style={styles.contentTextInput}
          placeholder="Email"
          keyboardType="default"
          placeholderTextColor="rgba(60, 60, 67, 0.6)"
        />
        <View style={styles.separatorView} />
      </View>
      <Text style={styles.donttHaveAnAcount}>dont’t have an acount?</Text>
      <Pressable
        style={styles.gOTOREGISTERPressable}
        onPress={() => navigation.navigate("SignUpPage")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </Pressable>
      <Text style={styles.forgotYourPassword}>Forgot your password?</Text>
      <View style={styles.rectangleView} />
      <Pressable
        style={styles.gOTOHOMEPressable}
        onPress={() => navigation.navigate("LoggedInHomePage")}
      >
        <Text style={styles.labelText}>Log In!</Text>
      </Pressable>
      <TouchableOpacity
        style={styles.rectangleTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("SignUpPage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  w3SchoolsText: {
    position: "absolute",
    top: 275,
    left: 80,
    fontSize: 50,
    fontWeight: "700",
    fontFamily: "Raleway",
    color: "#ff4f00",
    textAlign: "left",
    width: 283,
    height: 58,
  },
  textFieldTextInput: {
    position: "absolute",
    top: 446,
    left: 46,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 337,
    height: 38,
    flexDirection: "column",
    paddingLeft: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentTextInput: {
    alignSelf: "stretch",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  separatorView: {
    alignSelf: "stretch",
    position: "relative",
    borderStyle: "solid",
    borderColor: "#c6c6c8",
    borderTopWidth: 0.5,
    height: 0.5,
    flexShrink: 0,
  },
  textFieldView: {
    position: "absolute",
    top: 382,
    left: 46,
    borderRadius: 20,
    backgroundColor: "#fff",
    width: 337,
    height: 38,
    flexDirection: "column",
    paddingLeft: 16,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  donttHaveAnAcount: {
    position: "absolute",
    top: 704,
    left: 124,
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Atkinson Hyperlegible",
    color: "#ff4f00",
    textAlign: "center",
    width: 181,
    height: 27,
  },
  signUpText: {
    fontSize: 15,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "Atkinson Hyperlegible",
    color: "#446bf2",
    textAlign: "center",
  },
  gOTOREGISTERPressable: {
    position: "absolute",
    left: 185,
    top: 724,
  },
  forgotYourPassword: {
    position: "absolute",
    top: 551,
    left: 243,
    fontSize: 15,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "Atkinson Hyperlegible",
    color: "#446bf2",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 543,
    left: 243,
    borderStyle: "solid",
    borderColor: "#446bf2",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 142,
    height: 30,
  },
  labelText: {
    position: "absolute",
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Atkinson Hyperlegible",
    color: "#fff",
    textAlign: "center",
  },
  gOTOHOMEPressable: {
    position: "absolute",
    top: 510,
    left: 102,
    borderRadius: 10,
    backgroundColor: "#ff4f00",
    width: 226,
    height: 27,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 13,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleTouchableOpacity: {
    position: "absolute",
    top: 710,
    left: 168,
    borderStyle: "solid",
    borderColor: "#446bf2",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 86,
    height: 60,
  },
  logInPageView: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
  },
});

export default LogInPage;
