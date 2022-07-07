import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colorsmanager from '../../collections/Colorsmanager'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function HomeCover() {
    return (
        <View style={{
            height: 185,
            justifyContent: "center",
            alignItems: "center",


        }}>

            <Image
                style={{

                    width: "90%",
                    height: "50%",

                }}
                resizeMode='cover'
                source={require('../../assets/toppicks/logotitle.png')}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                <TouchableOpacity
                    style={styles.buttonCover}
                >
                    <View style={styles.buttonAlign}>
                        <MaterialIcons name="account-box" size={24} color="black" />
                        <Text >दर्ता/लग - इन</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonCover}
                >
                    <View style={styles.buttonAlign}>
                        <AntDesign name="message1" size={24} color="black" />
                        <Text>Message us</Text>
                    </View>

                </TouchableOpacity>


            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    buttonCover: {
        width: 120,
        height: 40,
        backgroundColor: Colorsmanager.blanksilver,
        justifyContent: "center",
        borderRadius: 10
    },
    buttonAlign: { justifyContent: "space-around", flexDirection: "row" }
})