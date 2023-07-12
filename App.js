import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Goleiro from './src/components/Jogadores/Goleiro';
import Lateral from './src/components/Jogadores/Lateral';
import Zagueiro from './src/components/Jogadores/Zagueiro';
import Meia from './src/components/Jogadores/Meio';
import Ataque from './src/components/Jogadores/Ataque';
import Tecnico from './src/components/Jogadores/Tecnico';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import TabNavigator from './src/routes/TabNavigator';
import StackNavigator from './src/routes/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

