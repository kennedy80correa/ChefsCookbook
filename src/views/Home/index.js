import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import styles from "./styles";

//Componentes
import Header from "../../components/Header";
import HorizontalCards from "../../components/HorizontalCards";
import LatestCard from "../../components/LatestCard";
import SearchBar from "../../components/SearchBar";

//Cover
import pork from "../../images/vegetables-bg.jpg";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView scrollEventThrottle={16}>
        <Header showBack={false} />
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
                onPress={() =>
                  navigation.navigate("Profile", { nome: "Pork ribs" })
                }
              />
              <HorizontalCards
                imageUri={pork}
                name={"Sushi"}
                onPress={() =>
                  navigation.navigate("Profile", { nome: "Sushi" })
                }
              />
              <HorizontalCards
                imageUri={pork}
                name={"Apple pie"}
                onPress={() =>
                  navigation.navigate("Profile", { nome: "Apple pie" })
                }
              />
              <HorizontalCards
                imageUri={pork}
                name={"Cupcake"}
                onPress={() =>
                  navigation.navigate("Profile", { nome: "Cupcake" })
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
