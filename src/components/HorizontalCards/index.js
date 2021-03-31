import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Button,
} from "react-native";

import styles from "./styles";

export default class HorizontalCars extends Component {
  render() {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={{ flex: 2 }}>
            <ImageBackground
              source={this.props.imageUri}
              style={styles.scrollCard}
            >
              <Text style={styles.recipeTitle}>{this.props.name}</Text>
            </ImageBackground>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
