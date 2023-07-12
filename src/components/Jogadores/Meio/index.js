import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";

const Meia = () => {

    const [meias, setMeias] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasMeias = data.atletas.filter((atleta) => atleta.posicao_id === 4)
            setMeias(apenasMeias)
        })
    }, [])

    return (
        <View>
            {meias && meias.map((meia) => {
                return(
                    <Card key={meia.atleta_id}>    
                        {/* <Image source={{uri: `${meia.foto}` }} style={{ width: 40, height: 40 }} /> */}
                        <Text>{meia.apelido}</Text>
                    </Card>
                )
            })}
        </View>
    )
}

export default Meia;