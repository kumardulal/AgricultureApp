import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const save = async () => {

    try {
        await AsyncStorage.setItem("token", userCredentials)
    }
    catch (err) {
        alert(err)
    }

}



const load = async () => {
    try {
        let userCredentials = await AsyncStorage.getItem("token")
        if (token != null) {
            //set(username, password, active status)
            setuserCredentials(userCredentials)

        }
    }
    catch (err) {
        alert(err)
    }

}

const remove = async () => {
    try {
        await AsyncStorage.removeItem("token")
    }
    catch (err) {
        alert(err)
    }
    finally {
        // set user credintials
        setuserCredentials("")

    }
}



