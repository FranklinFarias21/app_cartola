import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";

const Ataque = () => {

    const [atacantes, setAtacantes] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasAtacantes = data.atletas.filter((atleta) => atleta.posicao_id === 5)
            setAtacantes(apenasAtacantes)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {atacantes && atacantes.map((ataque) => {
                    return(
                        <Card key={ataque.atleta_id}>    
                            {/* <Image source={{uri: `${ataque.foto}` }} style={{ width: 40, height: 40 }} /> */}
                            <Text>{ataque.apelido}</Text>
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default Ataque;