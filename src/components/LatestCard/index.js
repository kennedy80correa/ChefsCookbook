import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./style";

import burger from "../../assets/burger.png";
import dinner from "../../assets/dinner.png";
import timer from "../../assets/timer.png";

export default function LatestCard() {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardLeft}>
        <Image source={burger} style={styles.recipeImage} />
        <View style={styles.description}>
          <Text style={styles.cardTitle}>Hamburger</Text>
          <Text style={styles.cardDesc}>The Original Hamburger.</Text>
        </View>
      </View>
      <View style={styles.cardRight}>
        <View style={styles.rowTimer}>
          <Image source={timer} style={styles.cardTime} />
          <Text style={styles.iconText}>00:30</Text>
        </View>
        <View style={styles.rowPortion}>
          <Image source={dinner} style={styles.cardPortion} />
          <Text style={styles.iconText}>5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
