import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import WeeklyPlanning from "../components/WeeklyPlanning";
import PopularCarousel from "../components/PopularCarousel";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <WeeklyPlanning />
      <PopularCarousel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a47",
  },
});
