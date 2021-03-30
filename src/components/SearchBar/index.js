import React from "react";
import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";

import styles from "./style";

import loupe from "../../assets/loupe.png";

export default function SearchBar() {
  return (
    <View style={styles.searchArea}>
      <Image source={loupe} />
      <TextInput
        placeholder="Search..."
        placeholderTextColor="#FFF"
        style={styles.input}
      />
    </View>
  );
}
