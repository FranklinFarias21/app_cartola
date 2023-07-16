import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Cabecalho from "../../components/Cabecalho";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Dashboard = () => {

    const [rodadas, setRodadas] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/partidas', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            if (data != 'undefined'){
                setRodadas(data)
            }
        })
        .catch((error) => {
            console.error('Erro ao obter dados:', error)
        })
    }, [])

    const getCorBolinha = (aproveitamento) => {
        if (aproveitamento === "v") {
          return "green"
        } else if (aproveitamento === "d") {
          return "red"
        } else {
          return "gray"
    }}

    return (
        <ScrollView>
            <View>
                <Cabecalho />
                <View style={styles.container}>
                    <Card>
                        <View style={styles.perfil}>
                            <Text style={styles.verPerfil}>VER PERFIL</Text>
                        </View>
                        <View style={styles.containerCard}>
                            <View>
                                <Image style={styles.image} source={require('../../../assets/escudo.png')}/>
                            </View>
                            <View>
                                <Text style={styles.nomePerfil}>Franklin_RB</Text>
                                <Text style={styles.nivelPerfil}>Nível Bronze II</Text>
                            </View>
                        </View>
                        <View style={styles.containerConteudo}>
                            <View>
                                <Text style={styles.titulo}>PATRIMÔNIO</Text>
                                <Text style={styles.conteudo}>C$ 130.39</Text>
                            </View>
                            <View>
                                <Text style={styles.titulo}>ÚLTIMA PONTUAÇÃO</Text>
                                <Text style={styles.conteudo}>91.19</Text>
                            </View>
                            <View>
                                <Text style={styles.titulo}>TOTAL</Text>
                                <Text style={styles.conteudo}>772.82</Text>
                            </View>
                        </View>
                    </Card>
                    <Card >
                        <View style={styles.containerDetalhes}>
                            <View>
                                <Text style={styles.rodada}>RODADA 15</Text>
                                <Text style={styles.descricao}>Você precisa montar seu time</Text>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.botaoRevisar} onPress={() => navigation.navigate('Escalação')}>
                                    <Text style={styles.textoRevisar}>REVISAR</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>

                    <View style={styles.containerRodadas}>
                        <View>
                            <Text style={styles.tituloRodada}>JOGOS DA RODADA { rodadas.rodada }</Text>
                        </View>

                        {rodadas.partidas && Object.entries(rodadas.partidas).map(([id, partida]) => {
                            const clubeCasa = rodadas.clubes[partida.clube_casa_id];
                            const clubeVisitante = rodadas.clubes[partida.clube_visitante_id];

                            const imageUrlCasa = rodadas.clubes[partida.clube_casa_id].escudos["60x60"]
                            const imageUrlVisitante = rodadas.clubes[partida.clube_visitante_id].escudos["60x60"]

                            return(
                                <Card key={id}>
                                    <View style={styles.cardRodada}>
                                        <Text>{partida.partida_data} - {partida.local}</Text>
                                        <View style={styles.confronto}>
                                            {partida.aproveitamento_mandante.map((aproveitamento, index) => (
                                                <View key={index} style={[styles.bolinha, { backgroundColor: getCorBolinha(aproveitamento) }]} />
                                            ))}
                                            <Image source={{uri: imageUrlCasa }} style={{ width: 30, height: 30 }} />
                                            <Text>{partida.placar_oficial_mandante} x {partida.placar_oficial_visitante}</Text>
                                            <Image source={{uri: imageUrlVisitante }} style={{ width: 30, height: 30 }} />
                                            {partida.aproveitamento_visitante.map((aproveitamento, index) => (
                                                <View key={index} style={[styles.bolinha, { backgroundColor: getCorBolinha(aproveitamento) }]} />
                                            ))}
                                        </View>
                                    </View>
                                </Card>
                            )
                        })}
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

    const styles = StyleSheet.create({
        container: {
            paddingTop: 10,
            marginHorizontal: 10,
            gap:2,
        }, 

        containerCard:{
            display: 'flex', 
            flexDirection: 'row',
            alignItems: 'center',
            gap: 40,
        },

        containerDetalhes:{
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },

        perfil:{
            alignItems: 'flex-end',
        },

        verPerfil:{
            fontSize: 12,
            color: '#ff7400',
            fontWeight: 'bold',
        },

        containerConteudo:{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
        },

        nomePerfil:{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
        },

        nivelPerfil:{
            fontSize: 14,
            color: 'gray',
            textAlign: 'center',
        },

        titulo:{
            fontSize: 10,
            color: 'gray',
            textAlign: 'center',
        },

        conteudo:{
            fontSize: 14,
            fontWeight: 'bold',
            textAlign: 'center',
        },

        rodada:{
            fontSize: 10,
            color: 'gray',
        },

        descricao:{
            fontSize: 11,
        },

        botaoRevisar:{
            backgroundColor: '#B22222',
            paddingHorizontal: 10, 
            paddingVertical: 4, 
            borderColor: '#000',
        },

        textoRevisar:{
            fontSize: 10,
            color: '#fff',
        },

        image:{
            width: 100,
            height: 100,
        },

        containerRodadas:{
            marginTop: 20,
            gap:1,
            marginBottom: 20,
        },

        tituloRodada:{
            fontSize:14,
            fontWeight: 'bold',
            textAlign: 'center',
            paddingBottom: 10,
        },
         
        cardRodada:{
            justifyContent: 'center',
            paddingVertical: 10,
            alignItems: 'center',        
            gap: 10,
        },

        confronto:{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            justifyContent: 'center',
        },

        bolinha: {
            width: 8,
            height: 8,
            borderRadius: 5,
            marginHorizontal: 1,
        },
    })

export default Dashboard;