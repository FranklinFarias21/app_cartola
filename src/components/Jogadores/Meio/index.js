import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import Card from "../../Card";

const Meia = () => {

    const [meias, setMeias] = useState()
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
            const apenasMeias = data.atletas.filter((atleta) => atleta.posicao_id === 4 && atleta.status_id === 7)
            setMeias(apenasMeias)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {meias && meias.map((meia) => {

                    const infoClube = clubes[meia.clube_id]

                    return(
                        <Card key={meia.atleta_id}>    
                            <View style={styles.containerMeia}>
                                <View style={styles.clube}>
                                    <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                    <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                </View>
                                <View>
                                    <Text style={styles.nomeAtleta}>{meia.apelido}</Text>
                                    <View style={styles.scout}>
                                        <View>
                                            <Text style={styles.nomeClube}>A</Text>
                                            <Text>{meia.scout['A']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>G</Text>
                                            <Text>{meia.scout['G']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>CA</Text>
                                            <Text>{meia.scout['CA']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>DS</Text>
                                            <Text>{meia.scout['DS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FC</Text>
                                            <Text>{meia.scout['FC']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FD</Text>
                                            <Text>{meia.scout['FD']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FF</Text>
                                            <Text>{meia.scout['FF']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>FS</Text>
                                            <Text>{meia.scout['FS']}</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.nomeClube}>JG</Text>
                                            <Text>{meia.jogos_num}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.nomeClube}>MÉDIA</Text>
                                    <Text>{meia.media_num}</Text>
                                    <Text style={styles.nomeClube}>PREÇO</Text>
                                    <Text>{meia.preco_num}</Text>
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
        containerMeia:{
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

export default Meia;