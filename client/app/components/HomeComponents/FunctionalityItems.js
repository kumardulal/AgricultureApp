import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colorsmanager from '../../collections/Colorsmanager';
// import { useNavigation } from '@react-navigation/native';

function FunctionalityItems() {
    // const navigation = useNavigation()
    return (
        <View style={{ width: "100%", flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
                // onPress={() => navigation.navigate("NewsScreen")}
                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/news.png"))} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/announcement.png"))} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/events.png"))} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/messaging.png"))} />
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: Colorsmanager.secondary, width: "23%", margin: 3,
        padding: 2,
        borderRadius: 5


    },
    items: {
        width: "100%", height: 65


    }
})

export default FunctionalityItems;
