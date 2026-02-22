import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

type GameScreenProps = {
  number: number;
};

const generateRandomBetween = (min: number, max: number, exclude: number) => {
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return rndNum;
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ number }: GameScreenProps) => {
  const initNumber = generateRandomBetween(1, 99, number);
  const [currentGuess, setCurrentGuess] = useState(initNumber);

  const nextGuessHandler = (direction: "lower" | "greater") => {
    if (
      (direction === "lower" && currentGuess < number) ||
      (direction === "greater" && currentGuess > number)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} className="text-primary">
        {"Opponent's Guess"}
      </Text>

      <View style={styles.panel}>
        <View className="p-4 rounded border-2 border-primary w-3/4 text-center">
          <Text className="text-4xl text-primary text-center">
            {currentGuess}
          </Text>
        </View>
        <View className="flex gap-4 flex-row mt-4">
          <Button
            variant="tonal"
            className="w-12"
            onPress={() => nextGuessHandler("lower")}
          >
            <Text>-</Text>
          </Button>
          <Button
            variant="tonal"
            className="w-12"
            onPress={() => nextGuessHandler("greater")}
          >
            <Text>+</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 140 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  panel: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "rgba(0, 0, 0, 0.64)",
    borderRadius: 16,
  },
});
