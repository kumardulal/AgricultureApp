import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import LogoTitle from '../LOGINPAGE/LogoTitle';
export default function HeaderItem() {
    const navigation = useNavigation()
    return (
        <View style={{ height: "15%" }}>

            <View style={styles.headericons}>
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}
                    style={{ top: 12 }}
                >
                    <Text style={{ padding: 15 }}>
                        <SimpleLineIcons name="menu" size={35} color="black" />
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 100, bottom: 5 }}>
                    <LogoTitle />
                </View>

            </View>

        </View >
    );
}
const styles = StyleSheet.create({
    headericons: {


        flexDirection: "row",
        width: "100%",
        height: 125,
        alignItems: "center"

    }
})