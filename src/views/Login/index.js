import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import Header from "../../components/Header";

import styles from "./styles";

import cover from "../../assets/coverL.png";
import logo from "../../assets/logo.png";

export default function Login({ navigation }) {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enable={true}>
      <View style={styles.container}>
        <Header showBack={true} showHeader={true} navigation={navigation} />
        <View style={styles.cover}>
          <ImageBackground source={cover} style={styles.bg} />
        </View>
        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <TextInput
            placeholder="Username"
            autoCorrect={false}
            style={styles.inputs}
            placeholderTextColor="#7E7E7E"
          />
          <TextInput
            placeholder="Password"
            autoCorrect={false}
            secureTextEntry={true}
            style={styles.inputs}
            placeholderTextColor="#7E7E7E"
          />
        </View>
        <View style={styles.links}>
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkContainer}>
            <Text style={styles.linkText}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.submit}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => navigation.navigate("Profile")}
          >
            <Text style={styles.loginTxt}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
