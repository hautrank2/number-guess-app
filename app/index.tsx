import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import GameScreen from "./NumberGuessGame/GameScreen";
import StartGameScreen from "./NumberGuessGame/StartGameScreen";

const AppIndex = () => {
  const [number, setNumber] = useState<number | null>(null);

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.screen}
    >
      {number === null ? (
        <StartGameScreen onConfirmNumber={setNumber} />
      ) : (
        <GameScreen number={number} />
      )}
    </ImageBackground>
  );
};

export default AppIndex;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
