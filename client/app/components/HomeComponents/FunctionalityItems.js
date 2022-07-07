import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Colorsmanager from '../../collections/Colorsmanager';
import { useNavigation } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';

function FunctionalityItems() {
    const navigation = useNavigation()
    return (
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: 20
        }}>
            <TouchableOpacity

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
            <TouchableOpacity style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/publication.png"))} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/gallery.png"))} />
            </TouchableOpacity>

        </View>
    );
}
const styles = StyleSheet.create({
    itemBox: {
        backgroundColor: Colorsmanager.secondary, width: "48%", margin: 3, opacity: 0.95,
        padding: 2,
        borderRadius: 5


    },
    items: {
        width: "100%", height: 100


    }
})

export default FunctionalityItems;
