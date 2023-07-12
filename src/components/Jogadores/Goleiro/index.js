import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";

const Goleiro = () => {

    const [goleiros, setGoleiros] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasGoleiro = data.atletas.filter((atleta) => atleta.posicao_id === 1)
            setGoleiros(apenasGoleiro)
        })
    }, [])

    return (
        <View>
            {goleiros && goleiros.map((goleiro) => {
                return(
                    <Card>    
                        <Image source={{uri: goleiro.foto }} style={{ width: 40, height: 40 }} />
                        <Text>{goleiro.apelido}</Text>
                    </Card>
                )
            })}
        </View>
    )
}

export default Goleiro;