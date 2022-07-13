import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'
import HeaderItem from '../components/HomeComponents/HeaderItem'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'


export default function NewsDetailsScreen({ navigation, route }) {
    const newstitle = route.params?.newstitile
    const newsintro = route.params?.newsintro
    const newsdesc = route.params?.newsdesc

    return (
        <SafeAreaView style={{
            backgroundColor: Colorsmanager.blanksilver,
            height: "100%"
        }}>
            <View style={{ flexDirection: "row" }}>
                {/* go back button */}
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back-circle-outline" size={40} color="black" /></TouchableOpacity>
                <View style={{ height: 20, justifyContent: "center", alignItems: "flex-start" }}>
                    <LogoTitle navigation={navigation} />

                </View>

            </View>


            {/* image and title container */}
            {/* ---------------------------------------------------------- */}
            <ScrollView

                showsHorizontalScrollIndicator={false}
                style={{ height: "100%" }}>
                <View style={{
                    width: "98%",
                    height: 270,
                    backgroundColor: Colorsmanager.primary,
                    alignSelf: "center",
                    margin: 3,
                    alignItems: "center",
                    opacity: 0.9
                }}>

                    <Image
                        style={{ width: "100%", height: "80%", justifyContent: "center" }}
                        resizeMode='cover'
                        source={require("../assets/newsImage/news2.png")}
                    />


                    <Text style={{
                        width: "98%",
                        marginTop: "3%",
                        fontWeight: "bold",
                        fontSize: 16,
                        textAlign: "center"
                    }}>{newstitle}</Text>

                </View>
                {/* ------------------------------------------------------------------------- */}
                {/* contain description of the news */}

                <View style={styles.containerDesc}><Text style={{ textAlign: "justify", padding: 10, marginBottom: 5 }}>
                    {newsintro}

                </Text>
                    <View style={{ height: 10 }}></View>
                </View>
                <View style={styles.containerDesc}><Text style={{ textAlign: "justify", padding: 10, marginBottom: 5 }}>
                    {newsdesc}

                </Text>
                    <View style={{ height: 100 }}></View>
                </View>
            </ScrollView>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    containerDesc: {
        flex: 1,
        width: "98%",
        backgroundColor: Colorsmanager.primary,
        alignSelf: "center"
    }
})

