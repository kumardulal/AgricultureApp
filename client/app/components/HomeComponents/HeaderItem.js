import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { SimpleLineIcons } from '@expo/vector-icons';
import LogoTitle from '../LOGINPAGE/LogoTitle';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Colorsmanager from '../../collections/Colorsmanager';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HeaderItem() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{
            height: "15%", justifyContent: "center", alignItems: "center", bottom: "2%", flex: -1
        }}>

            < View style={styles.headericons} >
                <TouchableOpacity
                    onPress={() => navigation.openDrawer()}

                >
                    <Text style={{ padding: 14, top: 6 }}>
                        <SimpleLineIcons name="menu" size={32} color="black" />
                    </Text>
                </TouchableOpacity>
                <View style={{ height: 100, flexDirection: "row", alignItems: "center", bottom: "8%" }}>
                    <LogoTitle />


                    {/* login button HERE */}
                    <TouchableOpacity

                        onPress={() => navigation.navigate("LoginScreen")}
                        style={{
                            width: 70,
                            height: 27,
                            backgroundColor: Colorsmanager.redhightlights,
                            alignItems: "center",
                            borderRadius: 7,
                            top: "5.8%",
                            justifyContent: "center",
                            margin: 6,
                            opacity: 0.8,


                        }}>

                        <Text style={{ fontWeight: "bold", fontSize: 13, textAlign: "center", color: Colorsmanager.primary }}>LOGIN</Text>
                    </TouchableOpacity>


                </View>

            </View>

        </ SafeAreaView >
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