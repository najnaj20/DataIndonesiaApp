import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ProvinsiList from './src/components/ProvinsiList';
import KabupatenList from './src/components/KabupatenList';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProvinsiList">
        <Stack.Screen name="ProvinsiList" component={ProvinsiList} options={{ title: 'Daftar Provinsi' }} />
        <Stack.Screen name="KabupatenList" component={KabupatenList} options={{ title: 'Daftar Kabupaten' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
