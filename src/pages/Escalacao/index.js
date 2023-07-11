import { Text, View, Image, StyleSheet } from "react-native";
import Cabecalho from "../../components/Cabecalho";
import Campinho from "../../../assets/campinho.png"
import { Ionicons } from "@expo/vector-icons"
import SelectDropdown from 'react-native-select-dropdown'

const Escalacao = () => {

    const formacoes = ['3-4-3', '3-5-2', '4-3-3', '4-4-2', '4-5-1', '5-3-2', '5-4-1']

    return (
        <View>
            <Cabecalho />
            <View style={styles.select}>
                <SelectDropdown
                data={formacoes}
                defaultValueByIndex={2}
                renderDropdownIcon={isOpened => {
                    return <Ionicons name={isOpened ? 'chevron-up' : 'chevron-down'} fontWeight={'bold'} color={'#ff7400'} size={18} />
                  }}
                buttonStyle={{
                    width: 100,
                    height: 40,
                    marginHorizontal: 10,
                    backgroundColor: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                }}
                buttonTextStyle={{
                    color: '#ff7400',
                    fontWeight: 'bold'
                }}
                dropdownStyle={{
                    backgroundColor: '#fff', 
                    color: "#ff7400",
                }}
                rowStyle={{
                    width: 100,
                    height: 40,
                }}
                rowTextStyle={{
                    color: "#ff7400",
                    fontWeight: 'bold'
                }}
                />
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
    )
};

    const styles = StyleSheet.create({

        select:{
            backgroundColor: '#fff',
            width: 2,
        }, 

        containerImage:{
            display: 'flex',
            alignItems: 'center', 
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