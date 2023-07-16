import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";

const Tecnico = () => {

    const [tecnicos, setTecnicos] = useState()
    const [clubes, setClubes] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setClubes(data.clubes)
            const apenasTecnicos = data.atletas.filter((atleta) => atleta.posicao_id === 6 && atleta.status_id === 7)
            setTecnicos(apenasTecnicos)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {tecnicos && tecnicos.map((tecnico) => {

                    const infoClube = clubes[tecnico.clube_id]

                    return(                    
                        <Card key={tecnico.atleta_id}>    
                            <View style={styles.containerTecnico}>
                                <View style={styles.clube}>
                                    <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                    <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                </View>
                                <View>
                                    <Text style={styles.nomeAtleta}>{tecnico.apelido}</Text>
                                    <View style={styles.scout}>
                                        <View>
                                            <Text style={styles.nomeClube}>V</Text>
                                            <Text>{tecnico.scout['V']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>JG</Text>
                                            <Text>{tecnico.jogos_num}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.nomeClube}>MÉDIA</Text>
                                    <Text>{tecnico.media_num}</Text>
                                    <Text style={styles.nomeClube}>PREÇO</Text>
                                    <Text>{tecnico.preco_num}</Text>
                                </View>
                                </View> 
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )
}

    const styles = StyleSheet.create({
        containerTecnico:{
            display: 'flex',
            flexDirection: 'row',
            gap: 20,
            alignItems: 'center'
        },

        clube:{
            width: 70,
            alignItems: 'center',

        },

        nomeClube:{
            fontSize: 11,
            color: 'gray'
        },

        nomeAtleta:{
            fontSize: 18,
            fontWeight: "bold",
        },


        scout:{
            display: 'flex',
            flexDirection: 'row',
            gap: 8,
            width: 180,
        }
    })


export default Tecnico;