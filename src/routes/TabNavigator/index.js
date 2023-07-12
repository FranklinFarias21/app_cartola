import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons  } from '@expo/vector-icons'
import Dashboard from '../../pages/Dashboard'
import Escalacao from '../../pages/Escalacao'
import Competicoes from '../../pages/Competicoes'
import Amigos from '../../pages/Amigos'
import Pro from '../../pages/Pro'


const TabNavigator = () => {

    const Tab = createBottomTabNavigator()

    return (
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
            <Tab.Screen name="Pro" component={Pro} options={{
                tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name='lock-outline' color={color} size={size}/>
                )
            }}/>
        </Tab.Navigator>

    );
}

export default TabNavigator;