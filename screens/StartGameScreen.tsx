import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

const StartGameScreen = () => {
  const [value, setValue] = useState<number | null>(null);

  return (
    <View>
      {/* Panel */}
      <View style={styles.panel}>
        <TextInput
          placeholder="Enter a number"
          keyboardType="numeric"
          value={value?.toString() ?? undefined}
        />
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {},
  panel: {
    backgroundColor: "#362F4F",
  },
});
