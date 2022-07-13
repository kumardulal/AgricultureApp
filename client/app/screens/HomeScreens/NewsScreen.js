import React, { useState, useEffect } from 'react'
import { View, Text, Pressable, TextInput, ScrollView } from 'react-native'
import HeaderItem from '../../components/HomeComponents/HeaderItem';
import { useNavigation } from '@react-navigation/native';
import NewsItems from '../../components/HomeComponents/NewsItems';
import Colorsmanager from '../../collections/Colorsmanager';
import Axios from 'axios'
import ApiAddress from '../../components/ApiTrigger/ApiAddress';

export default function NewsScreen() {
    const [searchitem, setSearchItem] = useState([])
    const navigation = useNavigation()
    const [newsitems, setNewsItems] = useState(null)



    const searchhandler = (search) => {
        let matches = newsitems.filter(val => {
            const regex = new RegExp(`^${search}`, `gi`);
            return (val.newstitle.match(regex)) || (val.newsdesc.match(regex));

        });
        if (search.length === 0) {

            navigation.reset({
                routes: [{ name: 'NewsScreen' }],
            })

            matches = [];
            setSearchItem([]);
        }

        setSearchItem(matches)

    }
    console.log(searchitem)






    // if (searchitem.length > 0) {
    //     console.log(" I am logged")

    // }
    // else {
    //     console.log("i am empty")
    // }





    useEffect(() => {
        // GetNews(setNewsItems)
        // console.log(newsitems)

        Axios.get(`${ApiAddress.httpaddress}/api/getNewsItems`, {

        }).then((response) => {
            // console.log(responnse)
            // setNewsItem(response.data)

            setNewsItems(response.data)
        })


    }, []);



    return (
        <View style={{ flex: 1 }}>
            <HeaderItem navigation={navigation} />
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                <Text style={{ fontSize: 10 }}>News</Text>
                <TextInput
                    onChangeText={(text) => searchhandler(text)}
                    style={{
                        width: "80%",
                        backgroundColor: Colorsmanager.primary,
                        textAlign: "center",
                        height: 40,
                        borderWidth: 1,
                        alignSelf: "center",
                        margin: "4%"
                    }}
                    placeholder='Search for news'

                />
            </View>

            <ScrollView>
                {newsitems &&
                    < NewsItems navigation={navigation} newsitems={newsitems} />}
            </ScrollView>

        </View>
    );
}
