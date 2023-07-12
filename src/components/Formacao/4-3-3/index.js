import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core";

const Formacao1 = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.formacao}>
            <View style={styles.tecnico}>
                <TouchableOpacity onPress={() => console.log('Técnico')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-97} marginHorizontal={-132}/>
                </TouchableOpacity>
            </View>
            <View style={styles.goleiro}>
                <TouchableOpacity onPress={() => navigation.navigate('Goleiro')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-100}/> 
                </TouchableOpacity>
            </View>
            <View style={styles.defesa}>
                <TouchableOpacity onPress={() => console.log('Lateral Esquerdo')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>  
                <TouchableOpacity onPress={() => console.log('Zagueiro Esquerdo')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Zagueiro Direito')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Lateral Direito')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
            </View>
            <View style={styles.meio}>
                <TouchableOpacity onPress={() => console.log('Meio Campo Esquerda')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Meio Campo Armador')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Meio Campo Direito')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
            </View>
            <View style={styles.ataque}>
                <TouchableOpacity onPress={() => console.log('Ala Esquerda')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Centroavante')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Ala Direita')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    formacao:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    goleiro:{
        border: 'solid',
        borderRadius: 100
    },

    defesa:{
        display: 'flex',
        flexDirection: 'row',
        gap: 30,
    },

    meio:{
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
    },

    ataque:{
        display: 'flex',
        flexDirection: 'row',
        gap: 40,
    }
})

export default Formacao1;