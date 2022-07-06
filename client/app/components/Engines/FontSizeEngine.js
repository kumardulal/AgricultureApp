import React from 'react'
import { View, StyleSheet, Text, Dimensions } from "react-native";

export default function FontSizeEngine() {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;



    if (windowWidth < 400 && windowHeight < 600) {
        // change text size
    }
}
