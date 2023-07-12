import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from '../TabNavigator';
import Goleiro from '../../components/Jogadores/Goleiro';
import Zagueiro from '../../components/Jogadores/Zagueiro';
import Lateral from '../../components/Jogadores/Lateral';
import Meia from '../../components/Jogadores/Meio';
import Ataque from '../../components/Jogadores/Ataque';
import Tecnico from '../../components/Jogadores/Tecnico';


const StackNavigator = () => {

    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#ff7400',
            },
            headerTintColor: '#fff',
        }}>

            <Stack.Screen name="TabNavigator" component={TabNavigator} options={{
                headerShown:false
            }}/>

            <Stack.Screen name="Goleiros" component={Goleiro} />
            <Stack.Screen name="Zagueiros" component={Zagueiro} />
            <Stack.Screen name="Laterais" component={Lateral} />
            <Stack.Screen name="Meias" component={Meia} />
            <Stack.Screen name="Atacantes" component={Ataque} />
            <Stack.Screen name="Técnicos" component={Tecnico} />
        </Stack.Navigator>
    )
}

export default StackNavigator