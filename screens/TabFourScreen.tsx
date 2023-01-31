import { StyleSheet } from 'react-native';

import ScreenFourInfo from '../components/ScreenFourInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  return (
    <View style={styles.container}>
      <ScreenFourInfo path="/screens/TabFourScreen.tsx" />
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
