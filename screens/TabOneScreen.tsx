import { Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import ScreenOneInfo from '../components/ScreenOneInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


const words = [
  { title: "zoil", description: "dokuczliwy, zawistny, złośliwy krytyk, szukający dziury w całym" },
  { title: "zegizm", description: "antyrozwojowość, bezrozwojowość, kierunek ideologiczny, wg którego nalezy powstrzymać dalszy liczbowy, tech., nauk. rozwój ludzkości, urbanizację, mechanizację, chemizację itp., gdyż dalszy rozrost " },
  { title: "zelant", description: "gorliwiec, zapaleniec" },
  { title: "zelota", description: "fanatyczny, zagorzały, namiętny entuzjasta jakiejś idei, religii itd" }
];

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text>{words[1,1]}</Text>
      <ScreenOneInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
