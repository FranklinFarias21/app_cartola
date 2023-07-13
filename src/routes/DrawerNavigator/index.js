import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "../TabNavigator";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { Text, View } from "react-native";

const DrawerNavigator = () => {

    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }}>
    
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Convide seus amigos" component={TabNavigator} />
            <Drawer.Screen name="Notificações" component={TabNavigator} />
            <Drawer.Screen name="Novidades" component={TabNavigator} />
            <Drawer.Screen name="Discord" component={TabNavigator} />
            <Drawer.Screen name="Dicas para Mitar" component={TabNavigator} />
            <Drawer.Screen name="Minha Conta" component={TabNavigator} />
            <Drawer.Screen name="Sair" component={TabNavigator} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;