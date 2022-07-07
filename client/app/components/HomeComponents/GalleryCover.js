import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'


export default function GalleryCover() {

    const img1 = require('../../assets/gallery/gallery1.png')
    const img2 = require('../../assets/gallery/gallery2.png')
    const img3 = require('../../assets/gallery/gallery3.png')
    const img4 = require('../../assets/gallery/gallery4.png')
    const img5 = require('../../assets/gallery/gallery5.png')
    const img6 = require('../../assets/gallery/gallery6.png')


    return (
        <>
            <View style={{ width: 400, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img1}
                />



            </View>
            <View style={{ width: 400, height: 200, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img2}
                />



            </View>
            <View style={{ width: 400, height: 200, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img3}
                />


            </View>
            <View style={{ width: 400, height: 200, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img4}
                />
            </View>
            <View style={{ width: 400, height: 200, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img5}
                />
            </View>
            <View style={{ width: 400, height: 200, flexDirection: "row" }}>
                <Image
                    style={{ width: 400, height: 200, borderWidth: 1, }}
                    resizeMode="stretch"
                    source={img6}
                />
            </View>









        </>
    )
}
