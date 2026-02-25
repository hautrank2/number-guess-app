import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import React, { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

type GameScreenProps = {
  number: number;
  onGameOver: (logRounds: number) => void;
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

const GameScreen = ({ number, onGameOver }: GameScreenProps) => {
  const initNumber = generateRandomBetween(1, 99, number);
  const [currentGuess, setCurrentGuess] = useState(initNumber);
  const [logNumbers, setLogNumbers] = useState([initNumber]);

  const dimentions = useWindowDimensions();

  const { width } = dimentions;

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
    setLogNumbers((prev) => [newRandomNumber, ...prev]);
  };

  useEffect(() => {
    if (currentGuess === number) {
      onGameOver(logNumbers.length);
    }
  }, [currentGuess, number, onGameOver]);

  if (width > 400) {
    return (
      <View className="flex-1 pt-24">
        <Text style={styles.title} className="text-primary">
          {"Opponent's Guess"}
        </Text>

        <View
          style={styles.panel}
          className="flex-row justify-evenly items-stretch gap-3 h-40"
        >
          <Button
            variant="primary"
            className="w-24 h-24"
            onPress={() => nextGuessHandler("lower")}
          >
            <Text className="text-2xl text-center">-</Text>
          </Button>

          <View className="px-4 justify-center rounded border-2 border-primary">
            <Text className="text-4xl text-primary text-center">
              {currentGuess}
            </Text>
          </View>

          <Button
            variant="primary"
            className="w-24 h-24"
            onPress={() => nextGuessHandler("greater")}
          >
            <Text className="text-2xl text-center">+</Text>
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 pt-64">
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
            variant="primary"
            className="w-12"
            onPress={() => nextGuessHandler("lower")}
          >
            <Text>-</Text>
          </Button>
          <Button
            variant="primary"
            className="w-12"
            onPress={() => nextGuessHandler("greater")}
          >
            <Text>+</Text>
          </Button>
        </View>
      </View>

      <View className="flex-1 p-4">
        <Text className="text-lg">Logs:</Text>
        <FlatList
          data={logNumbers}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item, index }) => (
            <View
              key={item}
              className="bg-secondary p-2 rounded w-full flex flex-row justify-between mt-2"
            >
              <Text>#{index + 1}</Text>
              <Text>
                {"Opponent's Guess:"} <Text className="font-bold">{item}</Text>
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
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
    marginTop: 16,
  },
});
