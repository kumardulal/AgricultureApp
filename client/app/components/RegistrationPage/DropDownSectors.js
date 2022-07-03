import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'

export default function DropDownSectors({ setUserType, setDropDownList }) {

    const dropDownItem1 = "Farmer"
    const dropDownItem2 = "Enterprise"
    const dropDownItem3 = "Others"
    const handlerModalDisplay1 = () => {
        setUserType("Farmer")
        setDropDownList(styles.modaloff)

    }
    const handlerModalDisplay2 = () => {
        setUserType("Enterprise")
        setDropDownList(styles.modaloff)

    }
    const handlerModalDisplay3 = () => {
        setUserType("Others")
        setDropDownList(styles.modaloff)

    }
    return (
        <View style={styles.model} >
            <TouchableOpacity
                onPress={() => handlerModalDisplay1()}
                style={styles.modelitems}>
                <Text style={styles.itemText}>{dropDownItem1}</Text>
            </TouchableOpacity>
            <TouchableOpacity

                onPress={() => handlerModalDisplay2()}
                style={styles.modelitems}>
                <Text style={styles.itemText}>{dropDownItem2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handlerModalDisplay3()}
                style={styles.modelitems}>
                <Text style={styles.itemText}>{dropDownItem3}</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    model: {
        left: 10,
        width: 210,
        backgroundColor: Colorsmanager.blanksilver,
        alignItems: "center",
        justifyContent: "space-between"

    },
    modelitems: {
        padding: 5,
        width: "100%"
    },
    itemText: {
        fontSize: 15,
        borderWidth: 1,
        textAlign: "center"
    },
    modaloff: {
        display: "none"
    },
    modalOn: {
        // leave it empty that shows sets to default
    }
})