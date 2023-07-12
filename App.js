import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/pages/Dashboard';
import Escalacao from './src/pages/Escalacao';
import Amigos from './src/pages/Amigos';
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons'
import Competicoes from './src/pages/Competicoes';
import Pro from './src/pages/Pro';
import Goleiro from './src/components/Jogadores/Goleiro';

export default function App() {

  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'orange',
        tabBarInactiveTintColor:'gray',

        headerLeft: () => (
          <MaterialCommunityIcons name='menu' size={25} color={'#fff'} marginHorizontal={10}/>
        ),

        headerRight: () => (
          <Ionicons name="notifications-sharp" size={23} color={'#fff'} marginRight={10}/>
        ),
      
        headerStyle:{
          backgroundColor: '#ff7400',
        },
        headerTintColor: '#fff',
      
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          borderTopColor: 'transparent',
        },
      }} 
      >

        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='view-grid-outline' color={color} size={size}/>
          )
        }}/>

        <Tab.Screen name="Escalação" component={Escalacao} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='soccer-field' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Competições" component={Competicoes} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='trophy-outline' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Amigos" component={Amigos} options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='people-outline' color={color} size={size}/>
          )
        }}/>
        <Tab.Screen name="Goleiro" component={Goleiro} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='lock-outline' color={color} size={size}/>
          )
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

