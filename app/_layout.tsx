import { NAV_THEME } from "@/theme";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Appearance, useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};
Appearance.setColorScheme("dark");

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const isDarkColorScheme = useColorScheme() === "dark";

  const [loaded, error] = useFonts({
    "open-sans": require("../assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("../assets/fonts/OpenSans-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "dark" : "light"}`}
        style={isDarkColorScheme ? "dark" : "light"}
      />

      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <NavThemeProvider
          value={NAV_THEME[isDarkColorScheme ? "dark" : "light"]}
        >
          <Stack
            screenOptions={{ headerShown: false, orientation: "default" }}
          />
        </NavThemeProvider>
      </KeyboardProvider>
    </>
  );
}
