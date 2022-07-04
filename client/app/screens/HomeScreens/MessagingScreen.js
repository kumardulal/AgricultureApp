import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Colorsmanager from '../../collections/Colorsmanager'

export default function MessagingScreen() {
    return (
        <View>
            <Text>Drop US Message</Text>
            <TextInput
                style={{ width: "80%", height: 100 }}
                placeholder='write us message..'
                numberOfLines={5}
                multiline={5}
            />
            <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: Colorsmanager.buttontype1 }}>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}
