import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'

export default function WeatherForeCast() {
    return (
        <View style={{
            backgroundColor: Colorsmanager.blanksilver,
            height: "10%",
            width: "95%",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: 'center',
            flexWrap: "nowrap",
            // borderBottomEndRadius: 50,
            // borderBottomLeftRadius: 50

        }}>
            <View style={{ flex: -1, width: "100%", }}>
                <View style={styles.elementcover}>
                    <Text style={{
                        fontSize: 32,
                        color: Colorsmanager.redhightlights,

                    }}>30°c</Text>
                    <Text style={{
                        fontSize: 15,
                        color: Colorsmanager.secondary,
                        alignSelf: "center"
                    }}>MONDAY July 2022</Text>



                </View>
                {/* <View style={{
                    width: "100%", padding: 3,
                    borderBottomEndRadius: 200,
                    borderBottomLeftRadius: 200

                }}>
                    <Text style={{ textAlign: "left", width: "100%", left: "8%", marginTop: 10 }
                    } > Moody Day</Text>
                </View> */}
            </View >


        </View >
    )
}
const styles = StyleSheet.create({
    elementcover: {
        flexDirection: "row",
        justifyContent: "space-around",




    }
})