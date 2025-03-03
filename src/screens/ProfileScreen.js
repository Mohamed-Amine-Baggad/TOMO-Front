import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnJS } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

// Images
const profileImage = require("../../assets/profile.png");
const defaultBannerColor = "#364163";
const fallbackImage = require("../../assets/logo.png"); // Image par défaut

// Données des mangas
const lists = {
  "À lire": [
    { id: "1", title: "Attack on Titan", tome: "Tome 34", image: null },
    { id: "2", title: "Jujutsu Kaisen", tome: "Tome 20", image: null },
    { id: "3", title: "Chainsaw Man", tome: "Tome 12", image: null },
  ],
  "Terminées": [
    { id: "4", title: "One Piece", tome: "Tome 101", image: require("../../assets/onepiece.jpg") },
    { id: "5", title: "Death Note", tome: "Tome 12", image: null },
    { id: "6", title: "Naruto", tome: "Tome 72", image: require("../../assets/naruto.jpg") },
  ],
  "En cours": [
    { id: "7", title: "Haikyuu", tome: "Tome 1", image: require("../../assets/haikyuu.jpg") },
    { id: "8", title: "Spy x Family", tome: "Tome 12", image: null },
    { id: "9", title: "Blue Lock", tome: "Tome 14", image: null },
  ],
};

const screenWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState("À lire");
  const translateX = useSharedValue(0);
  const tabs = Object.keys(lists);
  const navigation = useNavigation(); // ✅ Ajout de la navigation

  // Fonction pour gérer le clic sur un manga
  const handleMangaPress = (manga) => {
    navigation.navigate("MangaDetails", { manga });
  };

  // Style animé pour la transition fluide
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  // Gestion du swipe avec pagination stricte
  const onGestureEvent = (event) => {
    const swipeThreshold = screenWidth * 0.3;
    if (event.nativeEvent.state === State.END) {
      if (event.nativeEvent.translationX < -swipeThreshold) {
        runOnJS(switchTab)(1);
      } else if (event.nativeEvent.translationX > swipeThreshold) {
        runOnJS(switchTab)(-1);
      } else {
        translateX.value = withTiming(-tabs.indexOf(selectedTab) * screenWidth);
      }
    }
  };

  // Fonction pour changer d'onglet via swipe ou clic
  const switchTab = (direction) => {
    const currentIndex = tabs.indexOf(selectedTab);
    const newIndex = currentIndex + direction;

    if (newIndex >= 0 && newIndex < tabs.length) {
      setSelectedTab(tabs[newIndex]);
      translateX.value = withTiming(-newIndex * screenWidth, { duration: 300 });
    } else {
      translateX.value = withTiming(-currentIndex * screenWidth, { duration: 300 });
    }
  };

  // Fonction pour changer d'onglet via un clic
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    translateX.value = withTiming(-tabs.indexOf(tab) * screenWidth, { duration: 300 });
  };

  return (
    <View style={styles.container}>
      {/* Bannière */}
      <View style={[styles.bannerContainer, { backgroundColor: defaultBannerColor }]}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      {/* Nom et icônes */}
      <Text style={styles.username}>Roronoamomo</Text>
      <Text style={styles.handle}>@Roronoamomo</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Text>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Text>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Onglets cliquables */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => handleTabClick(tab)}>
            <Text style={[styles.tab, selectedTab === tab && styles.activeTab]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Contenu des listes */}
      <PanGestureHandler onHandlerStateChange={onGestureEvent}>
        <Animated.View style={[styles.listContainer, animatedStyle]}>
          {tabs.map((tab) => (
            <View key={tab} style={styles.listWrapper}>
              <FlatList
                data={lists[tab]}
                keyExtractor={(item) => item.id}
                numColumns={3}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleMangaPress(item)} style={styles.mangaCard}>
                    <Image source={item.image ? item.image : fallbackImage} style={styles.mangaImage} />
                    <Text style={styles.mangaTitle}>{item.title}</Text>
                    <Text style={styles.mangaTome}>{item.tome}</Text>
                  </TouchableOpacity>
                )}
                contentContainerStyle={styles.mangaList}
              />
            </View>
          ))}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e2a47",
    paddingTop: 20,
  },
  bannerContainer: {
    width: "100%",
    height: 120,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#1e2a47",
    position: "absolute",
    bottom: -40,
  },
  username: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  handle: {
    textAlign: "center",
    fontSize: 14,
    color: "#aaa",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  tab: {
    color: "#ccc",
    marginHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
  },
  activeTab: {
    color: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
  },
  listContainer: {
    flexDirection: "row",
    width: screenWidth * 3,
  },
  listWrapper: {
    width: screenWidth,
  },
  mangaList: {
    paddingHorizontal: 10,
  },
  mangaCard: {
    flex: 1,
    alignItems: "center",
    margin: 5,
  },
  mangaImage: {
    width: 100,
    height: 140,
    borderRadius: 10,
  },
  mangaTitle: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  mangaTome: {
    color: "#ccc",
    fontSize: 10,
  },
});

export default ProfileScreen;
