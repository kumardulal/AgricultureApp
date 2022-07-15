import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colorsmanager from '../../collections/Colorsmanager';
import { Fontisto } from '@expo/vector-icons';

export default function ProfileModal({ setModalDisplay }) {
    // const [modalDisplay, setModalDisplay] = useState(styles.modalOn)

    return (
        <View
            style={styles.modalOn}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ textAlign: "center" }}>लग इन प्रोफाइल </Text>

                {/* cross press */}
                <TouchableOpacity
                    onPress={() => setModalDisplay(styles.modaloff)}>
                    <Entypo name="cross" size={28} color="black" style={{ width: "100%", textAlign: "right" }} />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="person" size={18} color="green" />
                <Text style={{ textAlign: "justify", padding: 10, fontSize: 9 }}>Mohan bahadur</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto name="persons" size={18} color="green" />
                <Text style={{ textAlign: "justify", padding: 10, fontSize: 9 }}>Farmer</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    modalOn: {
        // position: "fixed",
        height: 200,
        width: 150,
        backgroundColor: Colorsmanager.blanksilver,

        flex: 1,
        borderTopRightRadius: 10
    },
    modaloff: {
        display: "none"
    }
})
