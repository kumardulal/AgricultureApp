import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'

export default function DropDownSectors2({ SetUserField, setDropDownList2 }) {

    // const sectors = ["Vegetables", "Animanls", "others"]

    const DropDownItem1 = "Horticulture"
    const DropDownItem2 = "Animal Husbandary"
    const DropDownItem3 = "Others"

    const handleSelection1 = () => {
        SetUserField(DropDownItem1)
        setDropDownList2(styles.modaloff)

    }
    const handleSelection2 = () => {
        SetUserField(DropDownItem2)
        setDropDownList2(styles.modaloff)

    }
    const handleSelection3 = () => {
        SetUserField(DropDownItem3)
        setDropDownList2(styles.modaloff)

    }
    return (
        <View style={styles.model} >
            <TouchableOpacity
                onPress={() => handleSelection1()}

                style={styles.modelitems}>
                <Text style={styles.itemText}>{DropDownItem1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleSelection2()}
                style={styles.modelitems}>
                <Text style={styles.itemText}>{DropDownItem2}y</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => handleSelection3()}
                style={styles.modelitems}>
                <Text style={styles.itemText}>{DropDownItem3}</Text>
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
    modelitems: { padding: 5, width: "100%" },
    itemText: { fontSize: 15, borderWidth: 1, textAlign: "center" },
    modaloff: {
        display: "none"
    },
    modalOn: {
        // leave it empty that shows sets to default
    }
})