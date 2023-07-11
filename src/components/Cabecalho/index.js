import { StyleSheet, Text, View } from "react-native";

const Cabecalho = () => {
    return (
        <View style={styles.containerCabecalho}>
            <View style={styles.containerConteudo}>
                <Text style={styles.titulo}>PREÇO DO TIME</Text>
                <Text style={styles.conteudo}>C$ 125.44</Text>
            </View>
            <View style={styles.containerConteudo}>
                <Text style={styles.titulo}>MERCADO FECHA EM</Text>
                <Text style={styles.conteudo}>15/07 - 20:59</Text>
            </View>
            <View style={styles.containerConteudo}>
                <Text style={styles.titulo}>VOCÊ AINDA TEM</Text>
                <Text style={styles.conteudo}>C$ 4.95</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerCabecalho: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',      
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 8,
        gap: 50
    },

    containerConteudo:{
        alignItems: 'center',
    },

    titulo:{
        fontSize: 10,
        color: 'gray'
    },

    conteudo:{
        fontSize: 14,
        fontWeight: 'bold',
    }
})

export default Cabecalho;