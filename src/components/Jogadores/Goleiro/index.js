import { useEffect, useState } from "react";
import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import Card from "../../Card";

const Goleiro = () => {

    const [goleiros, setGoleiros] = useState()
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
            const apenasGoleiro = data.atletas.filter((atleta) => atleta.posicao_id === 1  && atleta.status_id === 7)
            setGoleiros(apenasGoleiro)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {goleiros && goleiros.map((goleiro) => {

                    const infoClube = clubes[goleiro.clube_id]

                    return(
                        <Card key={goleiro.atleta_id}>    
                            <View style={styles.containerGoleiro}>
                                <View style={styles.clube}>
                                    <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                    <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                </View>
                                <View>
                                    <Text style={styles.nomeAtleta}>{goleiro.apelido}</Text>
                                    <View style={styles.scout}>
                                        <View>
                                            <Text style={styles.nomeClube}>DE</Text>
                                            <Text>{goleiro.scout['DE']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FS</Text>
                                            <Text>{goleiro.scout['FS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>GS</Text>
                                            <Text>{goleiro.scout['GS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>SG</Text>
                                            <Text>{goleiro.scout['SG']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>JG</Text>
                                            <Text>{goleiro.jogos_num}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.nomeClube}>MÉDIA</Text>
                                    <Text>{goleiro.media_num}</Text>
                                    <Text style={styles.nomeClube}>PREÇO</Text>
                                    <Text>{goleiro.preco_num}</Text>
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
        containerGoleiro:{
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

export default Goleiro;