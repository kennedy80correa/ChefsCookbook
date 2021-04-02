import React, { useState } from "react";
import { View, Text, Image, CheckBox, ScrollView } from "react-native";
import Header from "../../components/Header";

import styles from "./styles";

import pork from "../../assets/porkL.png";
import timer from "../../assets/timer.png";
import dinner from "../../assets/dinner.png";
import { useLinkProps } from "@react-navigation/native";

export default function Recipe() {
  const [isSelected, setSelection] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={pork} style={styles.image} />
        <Text style={styles.title}>Pork Ribs</Text>
        <Text style={styles.titleDesc}>Pork ribs with barbecue sauce.</Text>
        <View style={styles.details}>
          <View style={styles.time}>
            <Image source={timer} style={styles.timer} />
            <Text style={styles.detailsTxt}>30 min.</Text>
          </View>
          <View style={styles.portion}>
            <Image source={dinner} style={styles.dinner} />
            <Text style={styles.detailsTxt}>5</Text>
          </View>
        </View>

        <View style={styles.ingredientsContainer}>
          <Text style={styles.title}>Ingredients</Text>
          <View style={styles.ingredientsList}>
            <View style={styles.ingredient}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={styles.ingredientTxt}>2 Kg Pork ribs</Text>
            </View>
            <View style={styles.ingredient}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={styles.ingredientTxt}>Salt</Text>
            </View>
            <View style={styles.ingredient}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={styles.ingredientTxt}>1/2 cup barbecue sauce</Text>
            </View>
            <View style={styles.ingredient}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={styles.ingredientTxt}>
                1 tablespoon of black pepper powder
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.directionsContainer}>
          <Text style={styles.title}>Directions</Text>
          <View style={styles.directionsList}>
            <View style={styles.step}>
              <View style={styles.stepN}>
                <Text style={styles.stepTitle}>Step 1</Text>
              </View>
              <Text style={styles.stepTxt}>
                This is the step 1 to cook pork ribs with barbecue sauce.
              </Text>
            </View>
            <View style={styles.step}>
              <View style={styles.stepN}>
                <Text style={styles.stepTitle}>Step 2</Text>
              </View>
              <Text style={styles.stepTxt}>
                This is the step 2 to cook pork ribs with barbecue sauce.
              </Text>
            </View>
            <View style={styles.step}>
              <View style={styles.stepN}>
                <Text style={styles.stepTitle}>Step 3</Text>
              </View>
              <Text style={styles.stepTxt}>
                This is the step 3 to cook pork ribs with barbecue sauce.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
