import React, { useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import GameScreen from "./NumberGuessGame/GameScreen";
import OverGameScreen from "./NumberGuessGame/OverGameScreen";
import StartGameScreen from "./NumberGuessGame/StartGameScreen";

const AppIndex = () => {
  const [number, setNumber] = useState<number | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  let component = <StartGameScreen onConfirmNumber={setNumber} />;

  if (isGameOver) {
    component = <OverGameScreen />;
  }

  if (number !== null && !isGameOver) {
    component = (
      <GameScreen number={number} onGameOver={() => setIsGameOver(true)} />
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/background.jpg")}
      resizeMode="cover"
      style={styles.screen}
    >
      {component}
    </ImageBackground>
  );
};

export default AppIndex;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
