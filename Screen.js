import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, Dimensions} from "react-native";

const words = [
  { title: "zoil", description: "dokuczliwy, zawistny, złośliwy krytyk, szukający dziury w całym" },
  { title: "zegizm", description: "antyrozwojowość, bezrozwojowość, kierunek ideologiczny, wg którego nalezy powstrzymać dalszy liczbowy, tech., nauk. rozwój ludzkości, urbanizację, mechanizację, chemizację itp., gdyż dalszy rozrost " },
  { title: "zelant", description: "gorliwiec, zapaleniec" },
  { title: "zelota", description: "fanatyczny, zagorzały, namiętny entuzjasta jakiejś idei, religii itd" }
];

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    title: {
      fontSize: 30,
      textAlign: "center",
      flexWrap: "wrap",
      fontWeight: "bold"
    },
    description: {
      fontSize: 22,
      marginTop: 10,
      paddingHorizontal: 20,
      textAlign: "center",
      flexWrap: "wrap",
      marginBottom: 20
    },
    button: {
        padding: 10,
        backgroundColor: "lightblue",
        borderRadius: 5,
        marginHorizontal: 5
      },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      }
  });
  
  const Screen = () => {
    const [selectedWord, setSelectedWord] = useState(words[0]);
  
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    useEffect(() => {const onChange = () => {setScreenWidth(Dimensions.get('window').width);};
        Dimensions.addEventListener('change', onChange);
        return () => {Dimensions.removeEventListener('change', onChange);
    };
  }, []);

    const handlePress = () => {
      const randomIndex = Math.floor(Math.random() * words.length);
      setSelectedWord(words[randomIndex]);
    };
  
    return (
      <View style={styles.container}>
        <Text style={{...styles.title, width: screenWidth}}>{selectedWord.title}</Text>
        <Text style={{...styles.description, width: screenWidth}}>{selectedWord.description}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Losuj</Text>
        </TouchableOpacity>

      </View>
    );
  };
  
  export default Screen;