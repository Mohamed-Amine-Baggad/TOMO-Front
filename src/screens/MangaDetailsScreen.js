import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function MangaDetailsScreen({ route }) {
  const navigation = useNavigation();
  const { manga } = route.params;
  const [modalVisible, setModalVisible] = useState(false);

  const lists = ["À lire", "En cours", "Terminées"];

  const editions = [
    {
      id: "1",
      name: "Édition Glénat",
      tomes: [
        { id: "101", number: "Tome 1", image: manga.image },
        { id: "102", number: "Tome 2", image: manga.image },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Bouton Retour */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>⬅️</Text>
      </TouchableOpacity>

      {/* Titre */}
      <Text style={styles.pageTitle}>Manga</Text>

      {/* Image + Infos */}
      <View style={styles.mangaInfoContainer}>
        <Image source={manga.image} style={styles.mangaCover} />
        <Text style={styles.mangaTitle}>{manga.title}</Text>
        <Text style={styles.mangaAuthor}>{manga.author}</Text>

        {/* Description */}
        <Text style={styles.sectionTitle}>À propos de la série</Text>
        <Text style={styles.mangaDescription}>{manga.description}</Text>

        {/* Bouton Ajouter à une liste */}
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Ajouter à une liste</Text>
        </TouchableOpacity>
      </View>

      {/* MODALE CHOIX DE LISTE */}
      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Choisissez une liste :</Text>
            {lists.map((list) => (
              <TouchableOpacity key={list} style={styles.listButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.listButtonText}>{list}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Éditions et tomes */}
      {editions.map((edition) => (
        <View key={edition.id} style={styles.editionContainer}>
          <Text style={styles.sectionTitle}>{edition.name}</Text>
          <FlatList
            data={edition.tomes}
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.tomeCard}>
                <Image source={item.image} style={styles.tomeImage} />
                <Text style={styles.tomeText}>{item.number}</Text>
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.tomeList}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a47",
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 40,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 10,
    zIndex: 10,
  },
  backText: {
    fontSize: 24,
    color: "#fff",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  mangaInfoContainer: {
    alignItems: "center",
  },
  mangaCover: {
    width: 120,
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  mangaTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  mangaAuthor: {
    fontSize: 14,
    color: "#aaa",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
    marginBottom: 5,
  },
  mangaDescription: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginHorizontal: 20,
  },
  addButton: {
    marginTop: 15,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1, // ✅ La modale prend tout l'écran
    backgroundColor: "rgba(0, 0, 0, 0.6)", // ✅ Fond semi-transparent
    justifyContent: "center", // ✅ Centre la modale
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#2a3958",
    padding: 20,
    borderRadius: 8,
    width: "80%", // ✅ Ajustement pour ne pas prendre tout l'écran
    alignItems: "center",
  },
  modalTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  listButton: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  listButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  editionContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  tomeList: {
    paddingVertical: 10,
  },
  tomeCard: {
    marginRight: 10,
    alignItems: "center",
  },
  tomeImage: {
    width: 80,
    height: 120,
    borderRadius: 8,
  },
  tomeText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
});

