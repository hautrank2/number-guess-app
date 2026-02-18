import { useColorScheme } from "@/hooks/use-color-scheme";
import StartGameScreen from "@/screens/StartGameScreen";
import { NAV_THEME } from "@/theme";
import { ThemeProvider as NavThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const { isDarkColorScheme } = useColorScheme();

  return (
    <>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? "light" : "dark"}`}
        style={isDarkColorScheme ? "light" : "dark"}
      />

      <NavThemeProvider value={NAV_THEME[isDarkColorScheme ? "light" : "dark"]}>
        <StartGameScreen />
      </NavThemeProvider>
    </>
  );
}
