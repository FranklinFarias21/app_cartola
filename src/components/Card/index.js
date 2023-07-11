import { StyleSheet, Text, View } from "react-native";

const Card = (props) => {
    return (
        <View style={styles.containerCard}>
            <View style={styles.cardConteudo}>
                {props.children}
            </View>
        </View>
    );
}

    const styles = StyleSheet.create({
        containerCard:{
            backgroundColor: '#fff',
            elevation: 3,
            shadowColor: '#333',
            shadowOpacity: 0.3,
        },

        cardConteudo:{
            marginHorizontal: 18,
            marginVertical:10,
        }, 
    })

export default Card;