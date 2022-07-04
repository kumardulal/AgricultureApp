import React from 'react'
import { View, Text, Image } from 'react-native'

export default function PublicationItems() {
    return (
        <View style={{ width: "100%" }}>
            <Image
                style={{ width: "98%" }}
                resizeMode='contain'
                source={require('../../assets/publicationImage/img1.png')}
            />
            <Image
                resizeMode='contain'
                source={require('../../assets/publicationImage/img2.png')}
            />
            <Image
                resizeMode='contain'
                source={require('../../assets/publicationImage/img3.png')}
            />
        </View>
    )
}
