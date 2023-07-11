import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "../../components/Cabecalho";

const Dashboard = () => {
    return (
        <View>
            <Cabecalho />
            <View style={styles.container}>
            </View>
        </View>
    );
}

    const styles = StyleSheet.create({
        container: {
            flex:1,
            marginHorizontal: 20,
        }, 

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

export default Dashboard;