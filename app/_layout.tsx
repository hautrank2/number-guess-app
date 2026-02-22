import { NAV_THEME } from "@/theme";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Appearance, useColorScheme } from "react-native";
import { KeyboardProvider } from "react-native-keyboard-controller";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};
Appearance.setColorScheme("dark");

export default function RootLayout() {
  const isDarkColorScheme = useColorScheme() === "dark";

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
          <Stack screenOptions={{ headerShown: false }} />
        </NavThemeProvider>
      </KeyboardProvider>
    </>
  );
}
