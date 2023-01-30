import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Navigation from './Navigation'
import Screen from './Screen'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text><Screen /></Text>
      <Text><Navigation /></Text>
    </View>
  );
}

function WholeList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wszystkie słowa</Text>
      <Text><Navigation /></Text>
    </View>
  );
}

function FavList({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Ulubione</Text>
      <Text><Navigation /></Text>
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Coś więcej</Text>
      <Text><Navigation /></Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Nauka wyrazów obcych' }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="WholeList"
          component={WholeList}
          options={({ route }) => ({ title: route.params.name })}
        />
        <Stack.Screen
          name="FavList"
          component={FavList}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
