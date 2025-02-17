import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "./src/components/BottomNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}
