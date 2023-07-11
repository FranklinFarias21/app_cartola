import { Text, View, Image, StyleSheet } from "react-native";
import Cabecalho from "../../components/Cabecalho";
import { Ionicons } from "@expo/vector-icons"
import SelectDropdown from 'react-native-select-dropdown'
import Formacao1 from "../../components/Formacao/4-3-3";
import Formacao2 from "../../components/Formacao/3-4-3";
import Formacao3 from "../../components/Formacao/3-5-2";
import Formacao4 from "../../components/Formacao/4-4-2";
import Formacao5 from "../../components/Formacao/4-5-1";
import Formacao6 from "../../components/Formacao/5-3-2";
import Formacao7 from "../../components/Formacao/5-4-1";
import { useEffect, useState } from "react";

const Escalacao = () => {

    const formacoes = ['3-4-3', '3-5-2', '4-3-3', '4-4-2', '4-5-1', '5-3-2', '5-4-1']

    const [valor, setValor] = useState('')
    const [api, setApi] = useState()

    const selectValue = (selectedItem) => {
        setValor(selectedItem)
    }


    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setApi(data)
            // console.log(api)
        })
    }, [])


    return (
        <View>
            <Cabecalho />
            <View style={styles.select}>
                <SelectDropdown
                data={formacoes}
                defaultValueByIndex={2}
                onSelect={(selectedItem) => {
                    console.log(selectedItem)
                    selectValue(selectedItem)
                }}
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

                {valor == '' && (
                    <Formacao1 />
                )}

                {valor == '4-3-3' && (
                    <Formacao1 />
                )}

                {valor == '3-4-3' && (
                    <Formacao2 />
                )}

                {valor == '3-5-2' && (
                    <Formacao3 />
                )}

                {valor == '4-4-2' && (
                    <Formacao4 />
                )}

                {valor == '4-5-1' && (
                    <Formacao5 />
                )}

                {valor == '5-3-2' && (
                    <Formacao6 />
                )}

                {valor == '5-4-1' && (
                    <Formacao7 />
                )}
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
        },

        goleiro:{
            border: 'solid',
            borderRadius: 100
        },

        defesa:{
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
        },

        meio:{
            display: 'flex',
            flexDirection: 'row',
            gap: 40,
        },

        ataque:{
            display: 'flex',
            flexDirection: 'row',
            gap: 40,
        }
    })

export default Escalacao;