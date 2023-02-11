import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Linking } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  randomContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'justify'
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  description: {
    fontSize: 14,
  },
  quote: {
    fontSize: 18,
  },
  author: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  explanation: {
    fontSize: 11,
    color: "darkgrey",
  },
  titleRandom: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify'
  },
  descriptionRandom: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify'
  },
  descriptionLink: {
    color: "#ca335c",
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify'
  },
  explanationRandom: {
    fontSize: 13,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'justify'
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonFav: {
    padding: 10,
    borderRadius: 0,
    alignSelf: 'flex-start',
  },
});

const data = require('./dict.json')

const quotes = require('./quotes.json')

const Item = ({ title, description, explanation, isFavorited, onToggleFavorite }) => (
  <View style={styles.itemContainer}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
      </View>
      <View style={styles.buttonFav}>
        <TouchableOpacity style={styles.buttonFav} onPress={onToggleFavorite}>
          <MaterialCommunityIcons name={isFavorited ? "heart" : "heart-outline"} size={24} color={isFavorited ? "red" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const Quote = ({ quote, author }) => (
  <View  style={styles.itemContainer}>
    <Text style={styles.quote}>{quote}</Text>
    <Text style={styles.author}>{author}</Text>
  </View>
);


function HomeScreen( {favorites, setFavorites} ) {
  const [items, setItems] = useState(data);

  const handleToggleFavorite = (item) => {
    item.isFavorited = !item.isFavorited;
    setFavorites(
      item.isFavorited ? [...favorites, item] : favorites.filter(favorite => favorite.title !== item.title)
    );
    const index = items.findIndex((i) => i.title === item.title);
    items[index] = item;
    setItems([...items]);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} description={item.description} explanation={item.explanation} isFavorited={item.isFavorited} onToggleFavorite={() => handleToggleFavorite(item)} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}


function FavoritesScreen( {favorites} ) {
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Item title={item.title} description={item.description}  explanation={item.explanation} isFavorited={true} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}


function RandomScreen() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonPress = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setSelectedItem(data[randomIndex]);
  };

  return (
    <View style={styles.randomContainer}>
      {selectedItem ? (
        <>
          <Text style={styles.titleRandom}>{selectedItem.title}</Text>
          <Text style={styles.descriptionRandom}> </Text>
          <Text style={styles.descriptionRandom}>{selectedItem.description}</Text>
          <Text style={styles.explanationRandom}></Text>
          <Text style={styles.explanationRandom}>{selectedItem.explanation}</Text>
        </>
      ) : (
        <>
          <Text style={styles.titleRandom}>Kliknij na przycisk poniżej</Text>
          <Text style={styles.descriptionRandom}>Wylosuj pierwsze hasło</Text>
        </>

      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Losuj</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function QuoteScreen() {
  return (
    <View>
      <FlatList
        data={quotes}
        renderItem={({ item }) => <Quote quote={item.quote} author={item.author} />}
        keyExtractor={item => item.quote}
      />
    </View>
  );
}

function RandomQuoteScreen() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleButtonPress = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setSelectedItem(quotes[randomIndex]);
  };

  return (
    <View style={styles.randomContainer}>
      {selectedItem ? (
        <>
          <Text style={styles.titleRandom}>{selectedItem.quote}</Text>
          <Text style={styles.descriptionRandom}> </Text>
          <Text style={styles.descriptionRandom}>{selectedItem.author}</Text>
        </>
      ) : (
        <>
          <Text style={styles.titleRandom}>Kliknij na przycisk poniżej</Text>
          <Text style={styles.descriptionRandom}>Wylosuj pierwszy cytat</Text>
        </>

      )}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Losuj</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.titleRandom}>Dykcjonarz</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionRandom}>Słowa wybrane własnoręcznie na podstawie słownika wyrazów obcych i zwrotów obcojęzycznych Władysława Kopalińskiego.</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionRandom}>Aplikacja stworzona na własne potrzeby, jej zawartość może nie do końca odpowiadać potrzebom innych użytkowników.</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionRandom}>Uwaga: nie wszystkie funkcjonalności są w programie prawidłowo rozwinięte.a</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionLink} onPress={() => Linking.openURL("https://github.com/officialprofile")}>Projekt open source github.com/officialprofile</Text>

    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [favorites, setFavorites] = useState([]);
  

  return (
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        headerMode: 'screen',
        headerStyle: {
          backgroundColor: 'white', 
          height: 25,
        },
        headerTintColor: 'white',
      }}
    >
        <Tab.Screen
          name="Słownik"

          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("book-open-page-variant-outline")}}
        >
          {(props) => <HomeScreen {...props} favorites={favorites} setFavorites={setFavorites} />}
        </Tab.Screen>
        <Tab.Screen
          name="Ulubione"

          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("heart-outline") }}
        >
          {(props) => <FavoritesScreen {...props} favorites={favorites} setFavorites={setFavorites} />}
        </Tab.Screen>

        <Tab.Screen
          name="Losuj wyraz"
          component={RandomScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("autorenew") }}
        />
        <Tab.Screen
          name="Cytaty"
          component={QuoteScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("comment-quote-outline") }}
        />
        <Tab.Screen
          name="Losuj cytat"
          component={RandomQuoteScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("comment-question-outline") }}
        />
        <Tab.Screen
          name="O aplikacji"
          component={AboutScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("information-variant") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
