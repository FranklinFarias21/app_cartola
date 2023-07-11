import { Text, View, Image, StyleSheet } from "react-native";
import Cabecalho from "../../components/Cabecalho";
import Campinho from "../../../assets/campinho.png"
import { Ionicons } from "@expo/vector-icons"


const Escalacao = () => (
    <View>
        <Cabecalho />
        <View>
            <Text>4 3 3</Text>
        </View>
        <View style={styles.containerImage}>
            <Image source={require('cartola/assets/campinho.png')}/>
        </View>
        <View>
            <Text style={styles.tituloBanco}>BANCO DE RESERVAS</Text>
            <View style={styles.bancoReserva}>
                <Ionicons name="add-circle-sharp" size={40} color='#ff7400'/>
                <Ionicons name="add-circle-sharp" size={40} color='#ff7400'/>
                <Ionicons name="add-circle-sharp" size={40} color='#ff7400'/>
                <Ionicons name="add-circle-sharp" size={40} color='#ff7400'/>
                <Ionicons name="add-circle-sharp" size={40} color='#ff7400'/>
            </View>
        </View>
    </View>
);

    const styles = StyleSheet.create({
        containerImage:{
            display: 'flex',
            alignItems: 'center', 
            paddingTop: 40,
        },

        tituloBanco:{
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 6,
        },

        bancoReserva:{
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'center',
            gap: 22,
        }
    })

export default Escalacao;