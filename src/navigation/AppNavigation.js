import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomNavigation from "../components/BottomNavigation";
import MangaDetailsScreen from "../screens/MangaDetailsScreen"; // ✅ Écran détail

const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={BottomNavigation} />
        <Stack.Screen name="MangaDetails" component={MangaDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
