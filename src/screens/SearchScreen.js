import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation(); // ✅ Ajout de la navigation

  // Historique des recherches simulé
  const recentSearches = [
    { id: "1", title: "One Piece", author: "Eiichiro Oda", image: require("../../assets/onepiece.jpg") },
    { id: "2", title: "Naruto", author: "Masashi Kishimoto", image: require("../../assets/naruto.jpg") },
  ];

  // Fonction qui s'exécute lorsqu'on appuie sur un manga
  const handlePress = (manga) => {
    navigation.navigate("MangaDetails", { manga });
  };

  return (
    <View style={styles.container}>
      {/* Icône de notification */}
      <TouchableOpacity style={styles.notificationIcon}>
        <Text>🔔</Text>
      </TouchableOpacity>

      {/* Barre de recherche */}
      <Text style={styles.header}>Recherche</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher des mangas"
          placeholderTextColor="#aaa"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Text>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton Scan ISBN */}
      <TouchableOpacity style={styles.scanButton}>
        <Text style={styles.scanButtonText}>Scan ISBN</Text>
      </TouchableOpacity>

      {/* Historique des recherches */}
      <Text style={styles.recentHeader}>Récemment recherché</Text>
      <FlatList
        data={recentSearches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.recentSearchItem} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.mangaImage} />
            <View style={styles.mangaInfo}>
              <Text style={styles.mangaTitle}>{item.title}</Text>
              <Text style={styles.mangaAuthor}>{item.author}</Text>
            </View>
            <TouchableOpacity style={styles.removeButton}>
              <Text>❌</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a47",
    padding: 20,
  },
  notificationIcon: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a3958",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: "#fff",
  },
  searchIcon: {
    padding: 10,
  },
  scanButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e2a47",
  },
  recentHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  recentSearchItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2a3958",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  mangaImage: {
    width: 50,
    height: 75,
    borderRadius: 5,
  },
  mangaInfo: {
    flex: 1,
    marginLeft: 10,
  },
  mangaTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  mangaAuthor: {
    fontSize: 14,
    color: "#aaa",
  },
  removeButton: {
    padding: 10,
  },
});

export default SearchScreen;
