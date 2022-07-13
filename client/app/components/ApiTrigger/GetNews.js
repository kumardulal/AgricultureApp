import React from 'react'
import { View } from 'react-native'
import Axios from 'axios'
import ApiAddress from './ApiAddress'

export default function GetNews({ setNewsItem }) {
    Axios.get(`${ApiAddress.httpaddress}/api/getNewsItems`, {

    }).then((response) => {
        // console.log(responnse)
        // setNewsItem(response.data)
        console.log(response.data)
    })

}
