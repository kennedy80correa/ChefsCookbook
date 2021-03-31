import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Feather from "react-native-vector-icons/Feather";

import Home from "../src/views/Home";
import Profile from "../src/views/Profile";
import Loading from "../src/views/Loading";
import Login from "../src/views/Login";
import NewRecipe from "../src/views/NewRecipe";
import Recipe from "../src/views/Recipe";
import Register from "../src/views/Register";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewRecipe"
        component={NewRecipe}
        options={{
          title: "New Recipe",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#36393F",
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#36393F",
          },
        }}
      />
      <Stack.Screen
        name="Recipe"
        component={Recipe}
        options={{
          title: "Recipe",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#36393F",
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          title: "Register",
          headerTintColor: "#FFF",
          headerStyle: {
            backgroundColor: "#36393F",
          },
        }}
      />
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AppRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
        },

        activeTintColor: "#FF2323",
      }}
    >
      <Tab.Screen
        name="New Recipe"
        component={NewRecipe}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="plus" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={StackScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="user" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default AppRoutes;
