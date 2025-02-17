import React from "react";
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Dimensions } from "react-native";
import SafeImage from "./SafeImage";

const data = [
  { id: "1", title: "One Piece", image: require("../../assets/onepiece.jpg"), date: "05/02" },
  { id: "2", title: "Demon Slayer", image: require("../../assets/demonslayer.jpg"), date: "05/02" },
  { id: "3", title: "One Piece", image: require("../../assets/onepiece.jpg"), date: "06/02" },
  { id: "4", title: "Demon Slayer", image: require("../../assets/demonslayer.jpg"), date: "06/02" },
  { id: "5", title: "One Piece", image: require("../../assets/onepiece.jpg"), date: "07/02" },
  { id: "6", title: "Demon Slayer", image: require("../../assets/demonslayer.jpg"), date: "07/02" },
];

const numColumns = 2; // Nombre de colonnes

export default function WeeklyPlanning() {
  
  // Fonction qui s'exécute lorsqu'on appuie sur une carte
  const handlePress = (item) => {
    Alert.alert("Détails", `Vous avez sélectionné : ${item.title} (${item.date})`);
    // Ici, tu peux naviguer vers une autre page si besoin
    // navigation.navigate('DetailsScreen', { manga: item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planning de la semaine</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={numColumns} // Affichage en 2 colonnes
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => handlePress(item)}>
            <SafeImage source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.date}>{item.date}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.list} // Ajoute un espace pour éviter que ça colle aux bords
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginBottom: 10,
  },
  list: {
    paddingBottom: 20, // Ajoute un peu d'espace en bas
  },
  card: {
    flex: 1,
    backgroundColor: "#2c3e50",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: Dimensions.get("window").width / 2.5, // Ajuste la largeur des images
    height: 150,
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
    fontSize: 14,
  },
  date: {
    color: "#aaa",
    textAlign: "center",
    fontSize: 12,
  },
});
