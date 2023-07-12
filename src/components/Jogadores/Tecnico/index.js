import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import Card from "../../Card";

const Tecnico = () => {

    const [tecnicos, setTecnicos] = useState()

    useEffect(() => {
        fetch('https://api.cartola.globo.com/atletas/mercado', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            const apenasTecnicos = data.atletas.filter((atleta) => atleta.posicao_id === 6)
            setTecnicos(apenasTecnicos)
        })
    }, [])

    return (
        <View>
            {tecnicos && tecnicos.map((tecnico) => {
                return(
                    <Card key={tecnico.atleta_id}>    
                        {/* <Image source={{uri: `${tecnico.foto}` }} style={{ width: 40, height: 40 }} /> */}
                        <Text>{tecnico.apelido}</Text>
                    </Card>
                )
            })}
        </View>
    )
}

export default Tecnico;