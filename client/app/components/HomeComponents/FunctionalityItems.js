import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import Colorsmanager from '../../collections/Colorsmanager';
// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

function FunctionalityItems({ userdata }) {
    const navigation = useNavigation()

    const handleNewsclicked = () => {
        navigation.navigate({
            name: 'news',
            userdata: userdata,
            merge: false,
        });
    }
    return (
        <View style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: 20
        }}>
            {/* //news */}
            <TouchableOpacity
                onPress={() => handleNewsclicked(userdata)}

                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/news.png"))} />
            </TouchableOpacity>

            {/* announcement */}
            <TouchableOpacity
                onPress={() => navigation.navigate("AnnouncementScreen",
                    {
                        userdata: userdata
                    })}
                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/announcement.png"))} />
            </TouchableOpacity>
            {/* events */}
            <TouchableOpacity
                onPress={() => navigation.navigate("EventScreen")}
                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/events.png"))} />
            </TouchableOpacity>

            {/* messaging */}
            <TouchableOpacity
                onPress={() => navigation.navigate("MessageScreen", {
                    userdata: userdata
                })}

                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/messaging.png"))} />
            </TouchableOpacity>

            {/* publication */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Publication")}
                style={styles.itemBox}>
                <Image
                    resizeMode="contain"
                    style={styles.items}
                    source={(require("../../assets/functionalitylogos/publication.png"))} />
            </TouchableOpacity>
            {/* Gallery */}
            <TouchableOpacity
                onPress={() => navigation.navigate("Gallery")}
                style={styles.itemBox}>
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
