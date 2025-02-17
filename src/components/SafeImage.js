import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function SafeImage({ source, style }) {
  if (!source) {
    return <View style={[style, styles.placeholder]} />; // Vue vide si pas d'image
  }

  try {
    return <Image source={source} style={style} />;
  } catch (error) {
    return <View style={[style, styles.placeholder]} />;
  }
}

const styles = StyleSheet.create({
  placeholder: {
    backgroundColor: "transparent", // Laisse vide si pas d'image
  },
});
