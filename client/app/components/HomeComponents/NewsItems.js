import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colorsmanager from '../../collections/Colorsmanager';
import SearchListFilter from '../Engines/SearchListFilter';


export default function Newstems({ navigation, newsitems, searchtext }) {
    // const [newstitile, setNewsTitle] = useState()
    // const [newsintro, setNewsIntro] = useState()
    // const [newsdesc, setNewsDesc] = useState()
    const [searchedList, setSearchedList] = useState([])
    const textToSearch = searchtext.toString()


    useEffect(() => {
        console.log("i am running")
        SearchListFilter(textToSearch, { setSearchedList }, newsitems)

    }, [textToSearch])

    // console.log(searchedList)

    const handlepress = (newstitile, newsintro, newsdesc) => {

        navigation.navigate('NewsDetailsScreen', {
            newstitile: newstitile,
            newsintro: newsintro,
            newsdesc: newsdesc,

        });
    }





    return (
        <>


            {/* ---------------------------------main page listing */}

            <View style={{
                width: "98%",
                height: 160,
                backgroundColor: Colorsmanager.blanksilver,
                alignSelf: "center",
                flexWrap: "wrap",


            }} >
                <View style={styles.cardcontainer}>
                    <View style={{ width: "96%", }}>

                        <Image
                            style={{ width: "100%", height: "100%", opacity: 0.88 }}
                            resizeMode='cover'

                            source={(require('../../assets/newsImage/news1.png'))} />
                    </View>



                </View>

            </View>


            {/* ----------------------Search items listing------------------------------ */}



            {searchedList?.map((val, index) => {
                return (
                    <TouchableOpacity


                        key={index}

                        onPress={() => handlepress(val.newstitle, val.newsintro, val.newsdesc)}

                        style={{

                            width: "96%",
                            height: 170,
                            backgroundColor: Colorsmanager.blanksilver,
                            alignSelf: "center",
                            flexWrap: "nowrap",
                            margin: 2


                        }} >
                        <View style={styles.cardcontainerItem}>
                            <View style={{ width: "45%", height: "95%" }}>

                                <Image
                                    style={{ width: "100%", height: "100%", opacity: 0.88 }}
                                    resizeMode='cover'

                                    source={(require('../../assets/newsImage/news3.png'))} />
                            </View>

                            <View style={{
                                flexWrap: "nowrap",
                                backgroundColor: Colorsmanager.blanksilver,
                                height: "95%",
                                width: "55%",
                                right: "6%",
                                padding: 3
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 15,

                                    textAlign: "justify",
                                    padding: 5
                                }}>{val.newstitle}</Text>
                                <Text style={styles.textalignstraight}>{val.newsintro}</Text>

                            </View>

                        </View>

                    </TouchableOpacity>
                )
            })}











            {/* ------------------------Search Items------------------------------ */}

            {/* STARTS FROM HERE */}


            {newsitems.map((val, index) => {
                return (
                    <TouchableOpacity


                        key={index}

                        onPress={() => handlepress(val.newstitle, val.newsintro, val.newsdesc)}

                        style={{

                            width: "96%",
                            height: 170,
                            backgroundColor: Colorsmanager.blanksilver,
                            alignSelf: "center",
                            flexWrap: "nowrap",
                            margin: 2


                        }} >
                        <View style={styles.cardcontainerItem}>
                            <View style={{ width: "45%", height: "95%" }}>

                                <Image
                                    style={{ width: "100%", height: "100%", opacity: 0.88 }}
                                    resizeMode='cover'

                                    source={(require('../../assets/newsImage/news3.png'))} />
                            </View>

                            <View style={{
                                flexWrap: "nowrap",
                                backgroundColor: Colorsmanager.blanksilver,
                                height: "95%",
                                width: "55%",
                                right: "6%",
                                padding: 3
                            }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 15,

                                    textAlign: "justify",
                                    padding: 5
                                }}>{val.newstitle}</Text>
                                <Text style={styles.textalignstraight}>{val.newsintro}</Text>

                            </View>

                        </View>

                    </TouchableOpacity>
                )
            })}



        </>

    );
}
const styles = StyleSheet.create({
    cardcontainer: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center"
    },
    textalignstraight: {
        padding: 2.7,
        left: 5,
        textAlign: "justify",
        marginRight: "4%",
        flex: 1,
        flexWrap: "wrap"
    },
    cardcontainerItem: {
        width: "100%",
        height: 150,
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center"
    },
})


