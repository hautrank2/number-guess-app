import React from "react";
import { StyleSheet, Text, View } from "react-native";

type GameScreenProps = {
  number: number;
};

const GameScreen = ({ number }: GameScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Guess</Text>
      <View style={styles.panel}>
        <Text>GameScreen</Text>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 120 },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#8A7650",
    marginTop: 60,
    textAlign: "center",
    marginBottom: 24,
  },
  panel: {
    display: "flex",
    alignItems: "center",
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 16,
  },
});
