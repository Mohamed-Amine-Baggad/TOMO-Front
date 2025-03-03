import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import Header from "../components/Header";
import WeeklyPlanning from "../components/WeeklyPlanning";
import PopularCarousel from "../components/PopularCarousel";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation(); // ✅ Ajout de la navigation

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Header />
          <WeeklyPlanning navigation={navigation} /> {/* ✅ Passe la navigation */}
          <PopularCarousel navigation={navigation} /> {/* ✅ Passe la navigation */}
        </>
      }
      data={[]} // ✅ Pas de données ici, juste les composants
      keyExtractor={(_, index) => `empty-${index}`} // ✅ Évite les erreurs de clé
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
