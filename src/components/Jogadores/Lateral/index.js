import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";

const Lateral = () => {

    const [laterais, setLaterais] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasLaterais = data.atletas.filter((atleta) => atleta.posicao_id === 2)
            setLaterais(apenasLaterais)
        })
    }, [])

    return (
        <ScrollView>
            <View>
                {laterais && laterais.map((lateral) => {
                    return(
                        <Card key={lateral.atleta_id}>    
                            {/* <Image source={{uri: `${lateral.foto}` }} style={{ width: 40, height: 40 }} /> */}
                            <Text>{lateral.apelido}</Text>
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default Lateral;