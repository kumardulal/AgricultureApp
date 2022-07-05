import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colorsmanager from '../../collections/Colorsmanager';

const NewsItems = () => {

    return (
        <>
            <View style={{ flex: 1, justifyContent: "space-around", flexWrap: "nowrap" }}>

                <View style={{
                    width: "96%",
                    height: "96%",
                    backgroundColor: Colorsmanager.blanksilver,
                    alignSelf: "center",
                    flexWrap: "nowrap"

                }} >
                    <View style={styles.cardcontainer}>
                        <View style={{ width: "45%", height: "95%" }}>

                            <Image
                                style={{ width: "100%", height: "100%", opacity: 0.88 }}
                                resizeMode='cover'

                                source={(require('../../assets/newsImage/news1.png'))} />
                        </View>

                        <View style={{ flexWrap: "nowrap", backgroundColor: Colorsmanager.blanksilver, height: "95%", width: "55%" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, left: 5, textAlign: "center" }}>Work Agriculture</Text>
                            <Text style={styles.textalignstraight}>This is the place to write about the news. Highlighted title will be here</Text>
                        </View>

                    </View>

                </View>

            </View>
            {/* --------------------------------------------- */}
            {/* erase this afer use getting array of items list from server -work only in one formar*/}
            <View style={{ flex: 1, justifyContent: "space-around", flexWrap: "nowrap" }}>

                <View style={{
                    width: "96%",
                    height: "100%",
                    backgroundColor: Colorsmanager.blanksilver,
                    alignSelf: "center",
                    flexWrap: "nowrap"

                }} >
                    <View style={styles.cardcontainer}>
                        <View style={{ width: "45%", height: "95%" }}>

                            <Image
                                style={{ width: "100%", height: "100%", opacity: 0.88 }}
                                resizeMode='cover'

                                source={(require('../../assets/newsImage/news2.png'))} />
                        </View>

                        <View style={{ flexWrap: "nowrap", backgroundColor: Colorsmanager.blanksilver, height: "95%", width: "55%" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, left: 5 }}>Time to grow Graps</Text>
                            <Text style={styles.textalignstraight}>This is the place to write about the news. Highlighted title will be here</Text>
                        </View>

                    </View>

                </View>

            </View>


            {/* ------------------------- */}

            <View style={{ flex: 1, justifyContent: "space-around", flexWrap: "nowrap" }}>

                <View style={{
                    width: "96%",
                    height: "100%",
                    backgroundColor: Colorsmanager.blanksilver,
                    alignSelf: "center",
                    flexWrap: "nowrap"

                }} >
                    <View style={styles.cardcontainer}>
                        <View style={{ width: "45%", height: "95%" }}>

                            <Image
                                style={{ width: "100%", height: "100%", opacity: 0.88 }}
                                resizeMode='cover'

                                source={(require('../../assets/newsImage/news3.png'))} />
                        </View>

                        <View style={{ flexWrap: "nowrap", backgroundColor: Colorsmanager.blanksilver, height: "95%", width: "55%" }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, left: 5 }}>Vegetable Farm Started</Text>
                            <Text style={styles.textalignstraight}>This is the place to write about the news. Highlighted title will be here</Text>
                        </View>

                    </View>

                </View>

            </View>


        </>

    );
}
const styles = StyleSheet.create({
    cardcontainer: {
        width: "100%",
        height: 200,
        flexDirection: "row",
        justifyContent: "space-between",

        flexWrap: "wrap"
    },
    textalignstraight: { padding: 2.7, left: 5, textAlign: "justify", marginRight: "4%" }
})

export default NewsItems;
