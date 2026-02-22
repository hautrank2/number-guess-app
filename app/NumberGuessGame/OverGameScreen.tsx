import { Text } from "@/components/nativewindui/Text";
import React from "react";
import { View } from "react-native";

const OverGameScreen = () => {
  return (
    <View className="flex-1 pt-24 px-4">
      <View className="border-primary border-2 p-4 rounded">
        <Text className="text-primary text-center font-bold text-xl">
          Over screen
        </Text>
      </View>
    </View>
  );
};

export default OverGameScreen;
