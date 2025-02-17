import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import SafeImage from "./SafeImage";

export default function Header() {
  return (
    <View style={styles.header}>
      <SafeImage source={require("../../assets/logo.png")} style={styles.logo} />
      <Text style={styles.premiumText}>Essayez le premium gratuitement jusqu'au 14 avril</Text>
      <Button title="En savoir plus" onPress={() => alert("Premium Info")} />
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
  },
});
