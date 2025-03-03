import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // ✅ Importer GestureHandlerRootView
import BottomNavigation from "./src/components/BottomNavigation";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}> {/* ✅ Ajouter ce conteneur */}
      <NavigationContainer>
        <BottomNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
