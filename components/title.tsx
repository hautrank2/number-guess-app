import React from "react";
import { Text } from "./nativewindui/Text";

export const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Text className="border-primary border-2 p-2 text-center text-primary text-4xl font-bold mx-4">
      {children}
    </Text>
  );
};
