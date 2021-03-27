import React from "react";
import { View, Text, Button } from "react-native";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Home</Text>
    </View>
  );
}
