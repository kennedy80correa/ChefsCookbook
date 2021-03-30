import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomNavBar from "./src/components/BottomNavBar";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavBar />
    </NavigationContainer>
  );
}
