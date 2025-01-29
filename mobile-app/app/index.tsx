import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Linking } from "react-native";
import { StatusBar } from "expo-status-bar";

const LINKS = [
  { url: "https://github.com/JoshIri360/MOBILE-DESKTOP-STAGE-0-TASK", text: "View on GitHub" },
  { url: "https://telex.im", text: "Telex" },
  { url: "https://delve.fun/", text: "Delve" },
  { url: "https://hng.tech/hire/react-native-developers", text: "Hire React Native Devs" },
];

export default function App() {
  const openURL = (url: string) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick Links</Text>
      <View style={styles.buttonContainer}>
        {LINKS.map(({ url, text }) => (
          <TouchableOpacity
            key={url}
            style={styles.button}
            onPress={() => openURL(url)}
          >
            <Text style={styles.buttonText}>{text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 8,
    margin: 3,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
