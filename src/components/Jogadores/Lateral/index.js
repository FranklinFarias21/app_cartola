import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";

const Lateral = () => {

    const [laterais, setLaterais] = useState()
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
            const apenasLaterais = data.atletas.filter((atleta) => atleta.posicao_id === 2 && atleta.status_id === 7)
            setLaterais(apenasLaterais)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {laterais && laterais.map((lateral) => {

                    const infoClube = clubes[lateral.clube_id]

                    return(
                        <Card key={lateral.atleta_id}>    
                            <View style={styles.containerLateral}>
                                <View style={styles.clube}>
                                    <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                    <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                </View>
                                <View>
                                    <Text style={styles.nomeAtleta}>{lateral.apelido}</Text>
                                    <View style={styles.scout}>
                                        <View>
                                            <Text style={styles.nomeClube}>A</Text>
                                            <Text>{lateral.scout['A']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>CA</Text>
                                            <Text>{lateral.scout['CA']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>DS</Text>
                                            <Text>{lateral.scout['DS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FC</Text>
                                            <Text>{lateral.scout['FC']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FD</Text>
                                            <Text>{lateral.scout['FD']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FF</Text>
                                            <Text>{lateral.scout['FF']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FS</Text>
                                            <Text>{lateral.scout['FS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>SG</Text>
                                            <Text>{lateral.scout['SG']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>G</Text>
                                            <Text>{lateral.scout['G']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>JG</Text>
                                            <Text>{lateral.jogos_num}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.nomeClube}>MÉDIA</Text>
                                    <Text>{lateral.media_num}</Text>
                                    <Text style={styles.nomeClube}>PREÇO</Text>
                                    <Text>{lateral.preco_num}</Text>
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
        containerLateral:{
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
            width: 200,
        }
    })

export default Lateral;