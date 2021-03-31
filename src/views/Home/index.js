import React, { Component } from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";
import HorizontalCards from "../../components/HorizontalCards";
import LatestCard from "../../components/LatestCard";
import SearchBar from "../../components/SearchBar";

//Cover
import pork from "../../assets/porkribs.png";
import sushi from "../../assets/sushi.png";
import applepie from "../../assets/applePieL.png";
import cupcake from "../../assets/cupcakeL.png";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16}>
        <Header showBack={false} showHeader={true} />
        <View style={styles.search}>
          <SearchBar />
        </View>
        <View style={styles.mainView}>
          <Text style={styles.mainTitle}>Most Popular Recipes</Text>
          <View style={styles.scroll}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HorizontalCards
                imageUri={pork}
                name={"Pork ribs"}
                onClick={() =>
                  navigation.navigate("Recipe", {
                    nome: "Pork ribs",
                  })
                }
              />
              <HorizontalCards
                imageUri={sushi}
                name={"Sushi"}
                onPress={() =>
                  this.props.navigation.navigate("Profile", { nome: "Sushi" })
                }
              />
              <HorizontalCards
                imageUri={applepie}
                name={"Apple pie"}
                onPress={() =>
                  this.props.navigation.navigate("Profile", {
                    nome: "Apple pie",
                  })
                }
              />
              <HorizontalCards
                imageUri={cupcake}
                name={"Cupcake"}
                onClick={() =>
                  this.props.navigation.navigate("Profile", {
                    nome: "Cupcake",
                  })
                }
              />
            </ScrollView>
          </View>
        </View>
        <View style={styles.latestContainer}>
          <View style={styles.latestView}>
            <Text style={styles.mainTitle}>The Latest</Text>
          </View>
          <LatestCard />
          <LatestCard />
          <LatestCard />
          <LatestCard />
        </View>
      </ScrollView>
    </View>
  );
}
