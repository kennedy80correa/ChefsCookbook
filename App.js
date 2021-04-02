import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import AppRoutes from "./RoutesManager/appRoutes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#7E7E7E" translucent={true} />
      <AppRoutes />
    </NavigationContainer>
  );
}
