import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SafeImage from "./SafeImage";

export default function Header() {
  return (
    <View style={styles.header}>
      <SafeImage source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.premiumText}>Essayez le premium gratuitement jusqu'au 14 avril</Text>
      {/* ✅ Bouton corrigé avec TouchableOpacity */}
      <TouchableOpacity style={styles.premiumButton} onPress={() => alert("Premium Info")}>
        <Text style={styles.premiumButtonText}>En savoir plus</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 50,
    height: 50,
  },
  premiumText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 10,
    textAlign: "center",
  },
  premiumButton: {
    backgroundColor: "#fff", // ✅ Même couleur qu'avant
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  premiumButtonText: {
    color: "#1e2a47", // ✅ Même couleur que l’UI
    fontSize: 14,
    fontWeight: "bold",
  },
});
