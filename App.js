import React from "react";
import Icon from "react-native-vector-icons/Feather";

import Home from "./src/views/Home";
import Profile from "./src/views/Profile";
import NewRecipe from "./src/views/NewRecipe";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "New Recipe":
                iconName = "plus";
                break;
              case "Profile":
                iconName = "user";
                break;
            }
            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF2323",
          inactiveTintColor: "#777",
          showLabel: false,
        }}
      >
        <Tab.Screen name="New Recipe" component={NewRecipe} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
