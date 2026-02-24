import { Button } from "@/components/nativewindui/Button";
import { Text } from "@/components/nativewindui/Text";
import React, { useRef, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

type StartGameScreenProps = {
  onConfirmNumber: (number: number) => void;
};
const StartGameScreen = ({ onConfirmNumber }: StartGameScreenProps) => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<TextInput>(null);

  const onConfirm = () => {
    const number = parseInt(value);
    if (isNaN(number) || number < 1 || number > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99.", [
        {
          text: "Okay",
          style: "destructive",
          onPress: () => onReset(),
        },
      ]);
      return;
    }

    onConfirmNumber(number);
  };

  const onReset = () => {
    setValue("");
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View style={styles.panel}>
          <TextInput
            ref={inputRef}
            defaultValue={value}
            keyboardType="numeric"
            onChangeText={setValue}
            maxLength={2}
            style={styles.numberInput}
            className="text-primary border-primary border-b-2"
          />

          <View className="w-full flex justify-between gap-2 flex-row mt-4">
            <View className="flex-1">
              <Button
                className="w-full"
                variant="primary"
                onPress={() => onReset()}
              >
                <Text>Reset</Text>
              </Button>
            </View>
            <View className="flex-1">
              <Button
                className="w-full"
                variant="primary"
                onPress={() => onConfirm()}
              >
                <Text>Confirm</Text>
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  panel: {
    display: "flex",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 120,
    marginHorizontal: 24,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  numberInput: {
    fontSize: 32,
    fontWeight: "bold",
    width: 44,
    borderBottomWidth: 2,
    padding: 0,
    marginVertical: 0,
  },
});
