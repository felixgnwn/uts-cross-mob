import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen() {
  const profilePicture = require("../assets/profile.jpg");
  const user = {
    fullName: "Felix Gunawan",
    nim: "00000054245",
    birthDate: "29/04/2003",
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profilePicture} style={styles.profilePicture} />
        <Text style={styles.name}>{user.fullName}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>NIM: {user.nim}</Text>
          <Text style={styles.infoText}>Tanggal Lahir: {user.birthDate}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  profileContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: "#007bff",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  infoContainer: {
    alignItems: "flex-start",
  },
  infoText: {
    fontSize: 16,
    marginVertical: 5,
    color: "#555",
  },
});
