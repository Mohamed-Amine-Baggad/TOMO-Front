import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";
import SafeImage from "./SafeImage";

const data = [
  { id: "1", title: "Made in Abyss", image: require("../../assets/madeinabyss.jpg") },
  { id: "2", title: "Haikyuu", image: require("../../assets/haikyuu.jpg") },
  { id: "3", title: "Naruto", image: require("../../assets/naruto.jpg") },
];

// Fonction pour gérer le clic sur une cover
const handlePress = (item) => {
  alert(`Vous avez sélectionné : ${item.title}`);
};

export default function PopularCarousel() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Les plus populaires d'aujourd'hui</Text>
      <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop>
        {data.map((item, index) => (
          <TouchableOpacity key={item.id} style={styles.slide} onPress={() => handlePress(item)}>
            <SafeImage source={item.image} style={styles.image} />
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{index + 1}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </SwiperFlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },
  slide: {
    alignItems: "center",
    justifyContent: "center",
    width: 150, // Largeur des slides
    position: "relative", // Permet de positionner le numéro
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  rankContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  rank: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
