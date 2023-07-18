import { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";
import Cabecalho from "../../Cabecalho";

const Ataque = () => {

    const [atacantes, setAtacantes] = useState()
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
            const apenasAtacantes = data.atletas.filter((atleta) => atleta.posicao_id === 5 && atleta.status_id === 7) 
            setAtacantes(apenasAtacantes)
        })
    }, [])

    return (
        <View>
        <Cabecalho />
            <ScrollView>
                <View>
                    {atacantes && atacantes.map((ataque) => {
                        
                        const infoClube = clubes[ataque.clube_id]

                        return(
                            
                            <Card key={ataque.atleta_id}>   
                                <View style={styles.containerAtaque}>
                                    <View style={styles.clube}>
                                        <Image source={{uri: infoClube.escudos['60x60'] }} style={{ width: 40, height: 40 }} />
                                        <Text style={styles.nomeClube}>{infoClube.nome}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.nomeAtleta}>{ataque.apelido}</Text>
                                        <View style={styles.scout}>
                                            <View>
                                                <Text style={styles.nomeClube}>A</Text>
                                                <Text>{ataque.scout['A']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>G</Text>
                                                <Text>{ataque.scout['G']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>CA</Text>
                                                <Text>{ataque.scout['CA']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>DS</Text>
                                                <Text>{ataque.scout['DS']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FC</Text>
                                                <Text>{ataque.scout['FC']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FD</Text>
                                                <Text>{ataque.scout['FD']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FF</Text>
                                                <Text>{ataque.scout['FF']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>FS</Text>
                                                <Text>{ataque.scout['FS']}</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.nomeClube}>JG</Text>
                                                <Text>{ataque.jogos_num}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.nomeClube}>MÉDIA</Text>
                                        <Text>{ataque.media_num}</Text>
                                        <Text style={styles.nomeClube}>PREÇO</Text>
                                        <Text>{ataque.preco_num}</Text>
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
        containerAtaque:{
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

export default Ataque;