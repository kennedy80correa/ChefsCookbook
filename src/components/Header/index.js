import React from "react";
import { TouchableOpacity, Image, View } from "react-native";

import styles from "./styles";

//Ícones
import coverV from "../../assets/Cover.png";
import logo from "../../assets/logo-removedbg.png";
import back from "../../assets/back.png";

export default function Header({ showBack }) {
  return (
    <View style={styles.header}>
      <Image style={styles.cover} source={coverV} />
      <View style={styles.logoPosition}>
        <Image style={styles.logo} source={logo} />
      </View>

      {showBack && (
        <TouchableOpacity style={styles.leftIcon}>
          <Image style={styles.leftIconImage} source={back}></Image>
        </TouchableOpacity>
      )}
    </View>
  );
}
