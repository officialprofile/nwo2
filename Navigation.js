import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: "lightblue",
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 50
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
//<Button title="Kontakt" onPress={() => navigation.navigate('ProfileScreen', { name: 'O aplikacji' })} />
const Navigation = () => {
  return (
    <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen', { name: 'Nauka wyrazów obcych' })}>
        <Text style={styles.buttonText}>Nauka</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WholeList', { name: 'Słownik' })}>
        <Text style={styles.buttonText}>Słownik</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FavList', { name: 'Ulubione' })}>
        <Text style={styles.buttonText}>Ulubione</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileScreen', { name: 'O aplikacji' })}>
        <Text style={styles.buttonText}>Info</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;

