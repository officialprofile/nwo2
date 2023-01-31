import { StyleSheet } from 'react-native';

import ScreenThreeInfo from '../components/ScreenThreeInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <ScreenThreeInfo path="/screens/TabThreeScreen.tsx" />
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
