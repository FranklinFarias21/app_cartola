import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";
import Cabecalho from "../../Cabecalho";

const Zagueiro = () => {

    const [zagueiros, setzagueiros] = useState()
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
            const apenasZagueiros = data.atletas.filter((atleta) => atleta.posicao_id === 3 && atleta.status_id === 7)
            setzagueiros(apenasZagueiros)
        })
    }, [])

    return (
        <View>
            <Cabecalho />
            <ScrollView>
                <View>
                    {zagueiros && zagueiros.map((zagueiro) => {

                        const infoClube = clubes[zagueiro.clube_id]

                        return(
                            <Card key={zagueiro.atleta_id}>    
                                <View style={styles.containerZagueiro}>
                                    <View style={styles.clube}>
                                        <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                        <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.nomeAtleta}>{zagueiro.apelido}</Text>
                                        <View style={styles.scout}>
                                            <View>
                                                <Text style={styles.nomeClube}>A</Text>
                                                <Text>{zagueiro.scout['A']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>CA</Text>
                                                <Text>{zagueiro.scout['CA']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>DS</Text>
                                                <Text>{zagueiro.scout['DS']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FC</Text>
                                                <Text>{zagueiro.scout['FC']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FD</Text>
                                                <Text>{zagueiro.scout['FD']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FF</Text>
                                                <Text>{zagueiro.scout['FF']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FS</Text>
                                                <Text>{zagueiro.scout['FS']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>G</Text>
                                                <Text>{zagueiro.scout['G']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>JG</Text>
                                                <Text>{zagueiro.jogos_num}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.nomeClube}>MÉDIA</Text>
                                        <Text>{zagueiro.media_num}</Text>
                                        <Text style={styles.nomeClube}>PREÇO</Text>
                                        <Text>{zagueiro.preco_num}</Text>
                                    </View>
                                </View> 
                            </Card>
                        )
                    })}
                </View>
            </ScrollView>
        </View>
    )
}

    const styles = StyleSheet.create({
        containerZagueiro:{
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

export default Zagueiro;