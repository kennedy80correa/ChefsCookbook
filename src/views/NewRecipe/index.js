import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";

export default function NewRecipe({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enable={true}>
      <ScrollView>
        <Header showBack={true} showHeader={true} navigation={navigation} />
        <View style={styles.container}>
          <View style={styles.field}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTxt}>Recipe Title</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.titleDesc}>
                Insert the title of your recipe
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Recipe Title" style={styles.inputs} />
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTxt}>Description</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.titleDesc}>
                Insert the description of your recipe
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Description" style={styles.inputs} />
            </View>
          </View>

          <View style={styles.midContainer}>
            <View style={styles.time}>
              <Text style={styles.titleTxt}>Time to Cook</Text>
              <TextInput placeholder="00:00" style={styles.timeInput} />
            </View>
            <View style={styles.portion}>
              <Text style={styles.titleTxt}>Portions</Text>
              <TextInput placeholder="5" style={styles.qtdInput} />
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTxt}>Ingredients</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.titleDesc}>
                Insert the ingredients of your recipe
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Ingredients" style={styles.inputs} />
              <TouchableOpacity style={styles.addIngredient}>
                <Feather name="plus" color="#7E7E7E" size={30} />
                <Text style={styles.stepTxt}>Ingredient</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.field}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleTxt}>Directions</Text>
            </View>
            <View style={styles.desc}>
              <Text style={styles.titleDesc}>
                Step by step describe your recipe
              </Text>
            </View>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Directions" style={styles.inputs} />
              <TouchableOpacity style={styles.addStep}>
                <Feather name="plus" color="#7E7E7E" size={30} />
                <Text style={styles.stepTxt}>Step</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btns}>
            <TouchableOpacity style={styles.btnCancel}>
              <Text style={styles.txtCancel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSave}>
              <Text style={styles.txtSave}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
