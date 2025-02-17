import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Accueil") iconName = "home";
          else if (route.name === "Rechercher") iconName = "search";
          else if (route.name === "Profil") iconName = "user";
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#b0b0b0",
      })}
    >
      <Tab.Screen name="Accueil" component={HomeScreen} />
      <Tab.Screen name="Rechercher" component={HomeScreen} />
      <Tab.Screen name="Profil" component={HomeScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#2c3e50",
    paddingBottom: 5,
    height: 60,
  },
});
