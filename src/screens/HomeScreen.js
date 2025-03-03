import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import WeeklyPlanning from "../components/WeeklyPlanning";
import PopularCarousel from "../components/PopularCarousel";

export default function HomeScreen() {
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <WeeklyPlanning />
          <PopularCarousel />
        </>
      }
      data={[]} // ✅ Aucune donnée, car on n'affiche que le Header et les composants
      keyExtractor={(_, index) => `empty-${index}`} // ✅ Evite les erreurs de clé
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a47",
  },
});
