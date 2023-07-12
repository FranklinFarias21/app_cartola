import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";
import { ScrollView } from "react-native";

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
        <ScrollView>
            <View>
                {goleiros && goleiros.map((goleiro) => {
                    return(
                        <Card key={goleiro.atleta_id}>    
                            <Image source={{uri: 'https://i.pinimg.com/736x/97/e1/57/97e157c49e484987fb81fd23f6997a1e.jpg'}} style={{ width: 70, height: 70 }} />
                            <Text>{goleiro.apelido}</Text>
                        </Card>
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default Goleiro;