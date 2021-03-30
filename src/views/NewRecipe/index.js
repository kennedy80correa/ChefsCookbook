import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";

export default function NewRecipe({ navigation }) {
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <Text>NewRecipe</Text>
    </View>
  );
}
