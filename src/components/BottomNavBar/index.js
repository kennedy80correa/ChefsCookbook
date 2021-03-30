import React from "react";
import Icon from "react-native-vector-icons/Feather";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../views/Home";
import Profile from "../../views/Profile";
import NewRecipe from "../../views/NewRecipe";

//import Loading from "../../views/Loading";

const Tab = createBottomTabNavigator();
export default function BottomNavBar() {
  return (
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
  );
}
