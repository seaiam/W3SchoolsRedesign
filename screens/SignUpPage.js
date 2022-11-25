import * as React from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const SignUpPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signUpPage}>
      <Text style={styles.w3SchoolsText}>W3Schools</Text>
      <TextInput
        secureTextEntry={true}
        style={styles.textFieldTextInput}
        placeholder="Password"
        keyboardType="default"
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.textFieldTextInput1}
        placeholder="Confirm Password"
        keyboardType="default"
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
      />
      <TextInput
        style={styles.textFieldTextInput2}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="rgba(60, 60, 67, 0.6)"
      />
      <Text style={styles.donttHaveAnAcount}>Already have an acount?</Text>
      <Pressable
        style={styles.gOTOLOGINPressable}
        onPress={() => navigation.navigate("LogInPage")}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </Pressable>
      <TouchableOpacity
        style={styles.rectangleTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("LogInPage")}
      />
      <TouchableOpacity
        style={styles.gOTOLOGINTouchableOpacity}
        activeOpacity={0.2}
        onPress={() => navigation.navigate("LogInPage")}
      >
        <Text style={styles.labelText}>Sign Up!</Text>
      </TouchableOpacity>
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
  textFieldTextInput1: {
    position: "absolute",
    top: 510,
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
  textFieldTextInput2: {
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
    top: 707,
    left: 113,
    fontSize: 17,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Atkinson Hyperlegible",
    color: "#ff4f00",
    textAlign: "center",
    width: 202,
    height: 27,
  },
  signInText: {
    fontSize: 15,
    letterSpacing: -0.41,
    lineHeight: 22,
    fontFamily: "Atkinson Hyperlegible",
    color: "#446bf2",
    textAlign: "center",
  },
  gOTOLOGINPressable: {
    position: "absolute",
    left: 185,
    top: 728,
  },
  rectangleTouchableOpacity: {
    position: "absolute",
    top: 720,
    left: 178,
    borderStyle: "solid",
    borderColor: "#446bf2",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    width: 69,
    height: 40,
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
  gOTOLOGINTouchableOpacity: {
    position: "absolute",
    top: 574,
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
  signUpPage: {
    position: "relative",
    backgroundColor: "#ffe4ae",
    flex: 1,
    width: "100%",
    height: 931,
  },
});

export default SignUpPage;
