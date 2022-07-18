import React from 'react';
import { View, Text, Image } from 'react-native';
import GalleryCollections from '../../collections/GalleryCollections';
import Footer from './Footer';



const img1 = require('../../assets/gallery/gallery1.png')
const img2 = require('../../assets/gallery/gallery2.png')
const img3 = require('../../assets/gallery/gallery3.png')
const img4 = require('../../assets/gallery/gallery4.png')
const img5 = require('../../assets/gallery/gallery5.png')
const img6 = require('../../assets/gallery/gallery6.png')

function GalleryItems() {

    const images = [img1, img2, img3, img4, img5, img6]

    return (


        <View style={{ height: "100%", width: "100%", justifyContent: "center", alignItems: "center" }}>
            <Image
                style={{
                    height: 300,
                    width: "100%"
                }}
                resizeMode='contain'
                source={img1} />

            <Image
                style={{
                    height: 300,
                    width: "100%"
                }}
                resizeMode='contain'
                source={img2} />
            <Image
                style={{
                    height: 300,
                    width: "100%"
                }}
                resizeMode='contain'
                source={img4} />
            <Image
                style={{
                    height: 300,
                    width: "100%"
                }}
                resizeMode='contain'
                source={img5} />
            <Image
                style={{
                    height: 300,
                    width: "100%"
                }}
                resizeMode='contain'
                source={img6} />

            <Footer />
        </View>


    );
}

export default GalleryItems;