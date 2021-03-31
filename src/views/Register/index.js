import React from "react";
import { View, Text } from "react-native";

export default function Register() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enable={true}>
      <View>
        <Text>Register</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
