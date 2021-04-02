import React from "react";
import { Image, View, ActivityIndicator } from "react-native";

import styles from "./style";

//Imagens
import logo from "../../assets/logo.png";

export default function Loading() {
  return (
    <View style={styles.loading}>
      <Image style={styles.logoL} source={logo} />
      <ActivityIndicator size={50} color="#E5E5E5" style={styles.activity} />
    </View>
  );
}
