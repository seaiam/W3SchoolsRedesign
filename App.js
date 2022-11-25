const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LogInPage from "./screens/LogInPage";
import SignUpPage from "./screens/SignUpPage";
import JavaQuiz from "./screens/JavaQuiz";
import LoggedInHomePage from "./screens/LoggedInHomePage";
import StudyPlan from "./screens/StudyPlan";
import PythonCOMMENTS from "./screens/PythonCOMMENTS";
import JavaCOMMENTS from "./screens/JavaCOMMENTS";
import PythonQuiz from "./screens/PythonQuiz";
import PythonIntroduction from "./screens/PythonIntroduction";
import JavaINTRODUCTION from "./screens/JavaINTRODUCTION";
import Profile from "./screens/Profile";
import Courses from "./screens/Courses";
import Quizzes from "./screens/Quizzes";
import { useFonts } from 'expo-font';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded] = useFonts({
    'Atkinson Hyperlegible': require('./assets/fonts/AtkinsonHyperlegible-Bold.ttf'),
    'Raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'Source Code': require('./assets/fonts/SourceCodePro-VariableFont_wght.ttf'),
  });

  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LogInPage"
              component={LogInPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpPage"
              component={SignUpPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JavaQuiz"
              component={JavaQuiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoggedInHomePage"
              component={LoggedInHomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="StudyPlan"
              component={StudyPlan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PythonCOMMENTS"
              component={PythonCOMMENTS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JavaCOMMENTS"
              component={JavaCOMMENTS}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PythonQuiz"
              component={PythonQuiz}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PythonIntroduction"
              component={PythonIntroduction}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JavaINTRODUCTION"
              component={JavaINTRODUCTION}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Courses"
              component={Courses}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Quizzes"
              component={Quizzes}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;