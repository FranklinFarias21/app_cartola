import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";

const Zagueiro = () => {

    const [zagueiros, setzagueiros] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasZagueiros = data.atletas.filter((atleta) => atleta.posicao_id === 3)
            setzagueiros(apenasZagueiros)
        })
    }, [])

    return (
        <View>
            {zagueiros && zagueiros.map((zagueiro) => {
                return(
                    <Card key={zagueiro.atleta_id}>    
                        {/* <Image source={{uri: `${zagueiro.foto}` }} style={{ width: 40, height: 40 }} /> */}
                        <Text>{zagueiro.apelido}</Text>
                    </Card>
                )
            })}
        </View>
    )
}

export default Zagueiro;