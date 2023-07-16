import { Text, View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const Formacao6 = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.formacao}>
            <View style={styles.tecnico}>
                <TouchableOpacity onPress={() => navigation.navigate('Técnicos')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-97} marginHorizontal={-132}/>
                </TouchableOpacity>
            </View>
            <View style={styles.goleiro}>
                <TouchableOpacity onPress={() => navigation.navigate('Goleiros')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-100}/>
                </TouchableOpacity>
            </View>
            <View style={styles.defesa}>
                <TouchableOpacity onPress={() => navigation.navigate('Laterais')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Zagueiros')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Zagueiros')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Zagueiros')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Laterais')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                </TouchableOpacity>
            </View>
            <View style={styles.meio}>
                <TouchableOpacity onPress={() => navigation.navigate('Meias')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Meias')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Meias')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                </TouchableOpacity>
            </View>
            <View style={styles.ataque}>
                <TouchableOpacity onPress={() => navigation.navigate('Atacantes')}>
                    <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Atacantes')}>
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
            gap: 12,
        },

        meio:{
            display: 'flex',
            flexDirection: 'row',
            gap: 30,
        },

        ataque:{
            display: 'flex',
            flexDirection: 'row',
            gap: 40,
        }
    })

export default Formacao6;