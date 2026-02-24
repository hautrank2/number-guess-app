import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import { Title } from "@/components/title";
import React from "react";
import { Image, StyleSheet, View } from "react-native";

const overGameImage = require("../../assets/images/over-game.png");

type OverGameScreenProps = {
  roundNumber: number;
  enterNumber: number;
  onStartNewGame: () => void;
};
const OverGameScreen = ({
  roundNumber,
  enterNumber,
  onStartNewGame,
}: OverGameScreenProps) => {
  return (
    <View className="flex-1 pt-24 px-4" style={styles.container}>
      <Title>Game Over</Title>
      <View className="rounded-full border-2 w-80 h-80 overflow-hidden self-center mt-12">
        <Image source={overGameImage} className="w-full h-full" />
      </View>

      <View className="mt-4">
        <Text>
          Your phone needed{" "}
          <Text className="font-bold text-primary">{roundNumber}</Text> roundeds
          to guess the number{" "}
          <Text className="font-bold text-primary">{enterNumber}</Text>
        </Text>
      </View>

      <View className="mt-4">
        <Button variant="primary" onPress={() => onStartNewGame()}>
          <Text>Start new game</Text>
        </Button>
      </View>
    </View>
  );
};

export default OverGameScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000062",
  },
});
