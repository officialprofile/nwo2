import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
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
  explanation: {
    fontSize: 11,
  },
  titleRandom: {
    fontWeight: 'bold',
    fontSize: 22,
    paddingLeft: 20,
    paddingRight: 20,
  },
  descriptionRandom: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 20,
  },
  explanationRandom: {
    fontSize: 13,
    paddingLeft: 20,
    paddingRight: 20,
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
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
  },
  buttonFav: {
    padding: 10,
    borderRadius: 0,
    alignSelf: 'flex-end',
  },
});

const data = [
  {
      "title": "abderyta",
      "description": "głupiec, kiep, tępak, kołtun; por. beocki",
      "explanation": "gr. aběritěs 'mieszkaniec Abdery (miasta portowego w Tracji)’; jej mieszkańcy (mimo że była ojczyzną Demokryta, Protagorasa i in. sławnych ludzi) uchodzili za ograniczonych prowincjuszy."
  },
  {
      "title": "abnegacja ",
      "description": "wyrzeczenie się; zaniedbanie się",
      "explanation": " "
  },
  {
      "title": "abnegat",
      "description": "człowiek nie dbający o korzyści, wygody, przyjemności, powierzchowność; flejtuch, nieclfluj, brudas",
      "explanation": " "
  },
  {
      "title": "abominacja",
      "description": "obrzydzenie, wstręt, odraza",
      "explanation": " "
  },
  {
      "title": "absolucja",
      "description": "rozgrzeszenie, odpuszczenie grzechów (w czasie spowiedzi); zdjęcie kar kość.; udzielenie odpustu zupełnego umierającemu",
      "explanation": " "
  },
  {
      "title": "abulia",
      "description": "psych. chorobliwy brak a. niedostatek woli, niemożność podejmowania decyzji i urzeczywistnienia zamierzeń",
      "explanation": " "
  },
  {
      "title": "acedia",
      "description": "teol. (duchowa) apatia i obojętność; lenistwo zapowiadające degrengoladę",
      "explanation": " "
  },
  {
      "title": "adhezyjna umowa",
      "description": "w której jedna strona narzuca wszystkie istotne warunki, zwł. cenę",
      "explanation": " "
  },
  {
      "title": "adiafora",
      "description": "filoz. rzecz, sprawa moralnie obojętna, ani dobra, ani zła; rytuał, ceremoniał relig., będący sprawą indywidualnego sumienia, jako ani zakazany, ani nakazany przez Kościół",
      "explanation": " "
  },
  {
      "title": "administratiwnyj wostorg",
      "description": "ros., delektowanie się, upajanie się, napawanie się swoją władzą",
      "explanation": "z Dostojewskiego (Biesy, cz. 1,2,4) 1871 r."
  },
  {
      "title": "adyton",
      "description": "miejsce w sanktuarium gr., do którego miały dostęp tylko osoby bezpośrednio związane z kultem; część świątyni gr., gdzie mieściła się wyrocznia.",
      "explanation": " "
  },
  {
      "title": "afazja",
      "description": "med. upośledzenie a. utrata zdolności mówienia a. rozumienia mowy spowodowana uszkodzeniem niektórych okolic mózgu; por. agrafia.",
      "explanation": " "
  },
  {
      "title": "afektacja",
      "description": "wyrażanie uczuć (zachowanie się, wypowiadanie się) w sposób przesadny, sztuczny",
      "explanation": " "
  },
  {
      "title": "afront",
      "description": "uchybienie, ubliżenie, zniewaga, obelga",
      "explanation": " "
  },
  {
      "title": "agnozja",
      "description": "med. częściowa a. całkowita utrata zdolności rozpoznawania znanych przedmiotów, zwł. za pomocą wzroku, słuchu i dotyku, zazw. jako skutek uszkodzenia mózgu",
      "explanation": " "
  },
  {
      "title": "agrawacja",
      "description": "med. subiektywne wyolbrzymianie, przejaskrawianie istniejących objawów choroby przez pacjenta (nerwicowe a. umyślne)",
      "explanation": " "
  },
  {
      "title": "akrybia",
      "description": "skrupulatność, pedanteria, ścisłość, zwł. jako cecha zawodowa filologa",
      "explanation": " "
  },
  {
      "title": "allonim",
      "description": "rodzaj pseudonimu, w którym autor ukrywa się pod nazwiskiem innej, rzeczywistej, żyjącej osoby; dzieło opublikowane pod nazwiskiem osoby nie będącej autorem",
      "explanation": " "
  },
  {
      "title": "Alnaszara marzenia",
      "description": "jeszcze skóra na niedźwiedziu (a już ją sprzedają); zamki na lodzie",
      "explanation": "w Baśniach z 1001 nocy piąty brat golibrody inwestuje wszystkie swoje pieniądze w kosz wyrobów szklanych i śni już o majątku, jaki na nich zbije, i o ożenku z córką wezyra, ale w imaginacyjnej kłótni z przyszłą żoną kopie kosz i tłucze szkło mające mu te bogactwa przynieść"
  },
  {
      "title": "alokucja",
      "description": "przemówienie, tyrada, oracja, perora, zwł. o charakterze napomnienia a. wezwania do dobrych uczynków; przemówienie papieża na konsystorzu, niekiedy następnie publikowane",
      "explanation": " "
  },
  {
      "title": "amfibologia, amfibolia",
      "description": "jęz., log., dwuznaczność, niejasność wypowiedzi; zdanie, wyrażenie złożone, które można rozmaicie interpretować z uwagi na dwuznaczność konstrukcji gran. a. składniowej (w przeciwieństwie do ekwiwokacji), np. „lampy przesłaniają drzewa”",
      "explanation": " "
  },
  {
      "title": "anachoreta",
      "description": "eremita, pustelnik, spędzający czas na kontemplacji i umartwieniach; samotnik, odludek",
      "explanation": " "
  },
  {
      "title": "anachronizm",
      "description": "błędne umiejscowienie wydarzeń hist, pojęć, osób w czasie, w którym nie mogły istnieć; błąd w chronologii; niezgodność z duchem epoki; przeżytek",
      "explanation": " "
  },
  {
      "title": "anagnoryzm",
      "description": "rozpoznanie, lit., teatr, wydarzenie (a. rozwiązanie intrygi) w dramacie klasycznym: gł. bohater dowiaduje się, kim jest naprawdę (a. kim jest jakaś inna postać sztuki), i odkrywa tym samym właściwy sens swojej sytuacji",
      "explanation": " "
  },
  {
      "title": "analgezja",
      "description": "med. niewrażliwość na ból; znieczulenie",
      "explanation": " "
  },
  {
      "title": "anatema",
      "description": "uroczysta klątwa kościelna, ceremonialna ekskomunika",
      "explanation": " "
  },
  {
      "title": "anekumena",
      "description": "nie zamieszkane obszary świata",
      "explanation": "gr., wg pojęć staroż. Greków obszary położone na płn. (jako zbyt chłodne) i na płd. (jako zbyt gorące) od basenu Morza Śródziemnego"
  },
  {
      "title": "anepigraf",
      "description": "pismo a. dzieło sztuki bez tytułu",
      "explanation": " "
  },
  {
      "title": "anomia",
      "description": "stan społeczeństwa wynikający z rozpadu powszechnie przyjętych norm postępowania; sytuacja, w której normy moralne a. wzorce zachowania się są nieobecne, niejasne a. są z sobą wzajem w konflikcie; stan alienacji, dezorientacji, zagubienia się jednostki",
      "explanation": " "
  },
  {
      "title": "ansa",
      "description": "niechęć, animozja; uraza, pretensja",
      "explanation": " "
  },
  {
      "title": "antechbetyzm",
      "description": "analfabetyzm techniczny, zwł. u humanistów",
      "explanation": " "
  },
  {
      "title": "antydatowanie",
      "description": "opatrywanie dokumentu, pisma datą wcześniejszą od faktycznej, a. gazety, pisma - późniejszą; postdatowanie.",
      "explanation": " "
  },
  {
      "title": "antynomia",
      "description": "sprzeczność wewnętrzna; log. rozumowanie (dowód) pozornie poprawne, ale prowadzące do sprzeczności; sprzeczność między dwoma równie uzasadnionymi twierdzeniami",
      "explanation": " "
  },
  {
      "title": "antyteza",
      "description": "przeciwieństwo, kontrast; twierdzenie przeciwstawne innemu (tezie)",
      "explanation": " "
  },
  {
      "title": "apanaże",
      "description": "ziemie, nieruchomości, uposażenie, dochody członków domu panującego przyznane im przez monarchę a. organ ustawodawczy; przest. zasiłki, pieniądze na utrzymanie",
      "explanation": " "
  },
  {
      "title": "apatryda",
      "description": "apolita, bezpaństwowiec, osoba nie posiadająca obywatelstwa żadnego państwa",
      "explanation": " "
  },
  {
      "title": "apeiron",
      "description": "filoz. bezgraniczna, nieskończona, wieczna, bezkształtna pramateria, będąca elementarnym tworzywem (por. arche) przyrody (wg filozofa gr. Anaksymandra z Miletu; ok. 610-ok. 547 r.]",
      "explanation": " "
  },
  {
      "title": "apologeta",
      "description": "obrońca (zwł. chrześcijaństwa, w II-IV w. n.e.)",
      "explanation": " "
  },
  {
      "title": "aporema",
      "description": "filoz. kwestia sporna, dopuszczająca dwa przeciwstawne rozstrzygnięcia",
      "explanation": " "
  },
  {
      "title": "apoteoza",
      "description": "uznanie jakiejś osoby za bóstwo (gr. hśros, łac. divus); ubóstwienie; idealizacja, gloryfikacja; przest. teatr, uroczysta scena końcowa, żywy obraz",
      "explanation": " "
  },
  {
      "title": "apozjopeza",
      "description": "zamilczenie, jęz. ret. niedokończenie myśli (w mowie a. piśmie), zwykle przez urwanie zdania i rozpoczęcie nowego",
      "explanation": " "
  },
  {
      "title": "aretę",
      "description": "suma zalet tworząca charakter; doskonałość; męstwo; sprawność, dzielność; cnota",
      "explanation": " "
  },
  {
      "title": "arhat",
      "description": "sanskr., dosl ’wart, godny’, w buddyzmie - osoba doskonała, która wejrzała w prawdziwą naturę istnienia, wyzwoliła się z więzów pożądań, osiągnęła nirwanę i nie odrodzi się już więcej; por. bodhisattwa",
      "explanation": " "
  },
  {
      "title": "Armeleutegeruch",
      "description": "nm., odór biedoty",
      "explanation": "z Nietzschego (Wiedza radosna 5,349), 1882 r"
  },
  {
      "title": "arte povera",
      "description": "povera, plast, rodzaj sztuki, w której nie przedstawia się samego dzieła bezpośrednio, ale ukazuje się je z drugiej ręki za pośrednictwem zdjęć, map, rysunków a. opisu; rodzaj sztuki zakładający, że idea artystyczna i proces tworzenia są ważniejsze niż gotowe dzieło",
      "explanation": "wł. 'sztuka zubożała, uboga"
  },
  {
      "title": "asertoryczny",
      "description": "twierdzący, stwierdzający; log. (sąd a.) sąd stwierdzający fakt rzeczywisty bez przytaczania dowodów; por. apodyktyczny.",
      "explanation": " "
  },
  {
      "title": "ataraksja",
      "description": "filoz. staroż. spokój i równowaga ducha wobec zdarzeń zewn., a zwł. przeciwności losu (por. epikurejczyk; stoicyzm).",
      "explanation": " "
  },
  {
      "title": "atman",
      "description": "w hinduizmie - najgłębsza istota osobowości ludzkiej, jaźń nie zmieniająca się w cyklu reinkarnacji (zob. metempsychoza; samsara)",
      "explanation": " "
  },
  {
      "title": "autoteliczny",
      "description": "o dziele art., zwł. lit. - będący celem samym w sobie a. usprawiedliwiającym się, tłumaczącym się sam(o) przez się, a nie przez okoliczności zewn.; por. heteroteliczny",
      "explanation": " "
  }
];

const Item = ({ title, description, explanation, onAddToFavorites }) => (
  <View style={styles.itemContainer}>
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.explanation}>{explanation}</Text>
      </View>
      <View style={styles.buttonFav}>
        <TouchableOpacity style={styles.buttonFav} onPress={onAddToFavorites}>
          <MaterialCommunityIcons name="heart-outline" size={20} color="black" />
        </TouchableOpacity>

      </View>
    </View>
 
  </View>
);

function HomeScreen() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} description={item.description} onAddToFavorites={() => handleAddToFavorites(item)} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}


function FavoritesScreen() {
  const [favorites, setFavorites] = useState([]);

  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => <Item title={item.title} description={item.description} />}
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
        <Text>Kliknij na przycisk poniżej, aby wylosować pierwsze hasło</Text>
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
    <View style={styles.aboutContainer}>
      <Text style={styles.title}>Lista cytatów</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.titleRandom}>Nauka Wyrazów Obcych</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionRandom}>Słowa wybrane własnoręcznie na podstawie słownika wyrazów obcych i zwrotów obcojęzycznych Władysława Kopalińskiego</Text>
      <Text style={styles.descriptionRandom}> </Text>
      <Text style={styles.descriptionRandom}>Projekt open source oparty o react-native</Text>
      <Text style={styles.descriptionRandom}>Aplikacja stworzona na własne potrzeby.</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
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
          component={HomeScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("book-open-variant")}}
        />
        <Tab.Screen
          name="Ulubione"
          component={FavoritesScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("heart-outline") }}
        />
        <Tab.Screen
          name="Losowe wyrazy"
          component={RandomScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("autorenew") }}
        />
        <Tab.Screen
          name="Cytaty"
          component={QuoteScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("comment-quote-outline") }}
        />
        <Tab.Screen
          name="O programie"
          component={AboutScreen}
          options={{ headerTitle: ' ', tabBarIcon: makeIconRender("information-outline") }}
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
