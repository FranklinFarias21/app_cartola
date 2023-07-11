import { Text, View, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

const Formacao2 = () => {
    return (
        <View style={styles.formacao}>
            <View style={styles.tecnico}>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-97} marginHorizontal={-132}/>
            </View>
            <View style={styles.goleiro}>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-100}/>
            </View>
            <View style={styles.defesa}>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-170}/>
            </View>
            <View style={styles.meio}>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-270}/>
            </View>
            <View style={styles.ataque}>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
                <Ionicons name="add-circle" size={40} color='#32CD32' marginTop={-380}/>
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
            gap: 40,
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

export default Formacao2;