import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Alert } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import DropDownSectors from './DropDownSectors';
import { FontAwesome5 } from '@expo/vector-icons';
import DropDownSectors2 from './DropDownSectors2';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Axios from 'axios';
import ApiAddress from '../ApiTrigger/ApiAddress';
import { useNavigation } from '@react-navigation/native';

export default function Form() {
    const navigation = useNavigation()


    const [dropdownlist, setDropDownList] = useState(styles.dropdowndisplayOff)
    const [dropdownlist2, setDropDownList2] = useState(styles.dropdowndisplay2Off)

    const [fullname, setFullName] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [fulladdress, setFullAddress] = useState('')

    const [userType, setUserType] = useState("Farmer")
    const [userField, SetUserField] = useState("Animal husbandry ")

    const [userbio, setUserBio] = useState('')
    const [password, setPassword] = useState('')


    const handlesubmit = () => {
        if (fullname === "" || phonenumber === '' || fulladdress === '' || userType === "" || userField === "" || password === '') {
            alert("missing something to fill up")
        }
        else {



            Axios.post(`${ApiAddress.httpaddress}/api/registration`, {
                fullname: fullname,
                phonenumber: phonenumber,
                fulladdress: fulladdress,
                usertype: userType,
                userfield: userField,
                password: password,
                userbio: userbio
            }).then((res) => {
                if (res.data.message === "Success") {
                    alert("Successfully Registered")
                    navigation.navigate("LoginScreen")
                }
                else {
                    alert(res.data.message)
                }


            })
                .catch(error => console.log(error))

        }
    }

    // should be state



    // useEffect(() => {
    //     setSignUpDetails({
    //         fullname: fullname,
    //         phonenumber: phonenumber,
    //         fulladdress: fulladdress,
    //         userType: userType,
    //         userField: userField,
    //         password: password,
    //         userbio: userbio,

    //     })
    // }, [fullname, phonenumber, fulladdress, userbio, password]);

    const dropdownHandler = () => {
        if (dropdownlist === styles.dropdowndisplayOff) {
            setDropDownList(styles.dropdowndisplayOn)
        }

        else {
            setDropDownList(styles.dropdowndisplayOff)
        }

    }
    const dropdownHandler2 = () => {
        if (dropdownlist2 === styles.dropdowndisplay2Off) {
            setDropDownList2(styles.dropdowndisplay2On)
        }

        else {
            setDropDownList2(styles.dropdowndisplay2Off)
        }

    }

    return (
        <SafeAreaView style={{
            width: "100%",
            height: 550,
            alignItems: "center",
            flex: 1,
            justifyContent: "center",

        }}>

            <View style={styles.inputContainer}>
                <AntDesign
                    style={styles.vectorIcon} name="user" size={24} color="black" />
                <TextInput
                    onChangeText={setFullName}
                    style={styles.inputfield}
                    placeholder="FuLL Name"
                />
            </View>
            {/* phone number Input */}
            <View style={styles.inputContainer}>
                <AntDesign style={styles.vectorIcon} name="phone" size={24} color="black" />
                <TextInput
                    onChangeText={setPhoneNumber}
                    keyboardType='numeric'
                    style={styles.inputfield}
                    placeholder="Phone Number"
                />
            </View>
            {/* Address input */}
            <View style={styles.inputContainer}>
                <FontAwesome style={styles.vectorIcon} name="address-card-o" size={24} color="black" />


                <TextInput
                    onChangeText={setFullAddress}
                    style={styles.inputfield}
                    placeholder="Full Address"
                />
            </View>

            {/* -------------------------------------------------------- */}
            {/* Drop down selection input */}
            <View style={styles.inputContainer}>
                <FontAwesome5 style={styles.vectorIcon} name="user-edit" size={24} color="black" />


                {/* USer type  */}
                <View style={{ width: "65%", backgroundColor: "white", height: 37, justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ opacity: 0.9 }}>{userType}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => dropdownHandler()}
                    style={{ backgroundColor: "white", padding: 3.5 }}>
                    {/* dropdownicon */}

                    <AntDesign name="down" size={30} color="black" />
                </TouchableOpacity>

            </View>
            <View style={dropdownlist}>
                <DropDownSectors setUserType={setUserType} setDropDownList={setDropDownList} />
            </View>
            {/* --------------------------------------------------------- */}

            {/* USer Field or sector drop down   */}
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons style={styles.vectorIcon} name="account-details-outline" size={24} color="black" />


                <View style={{ width: "65%", backgroundColor: "white", height: 37, justifyContent: "center", alignItems: "center" }} >
                    <Text style={{ opacity: 0.9 }}>{userField}</Text>
                </View>

                <TouchableOpacity
                    onPress={() => dropdownHandler2()}
                    style={{ backgroundColor: "white", padding: 3.5 }}>
                    {/* dropdownicon */}

                    <AntDesign name="down" size={30} color="black" />
                </TouchableOpacity >

            </View>
            <View style={dropdownlist2}>
                <DropDownSectors2 SetUserField={SetUserField} setDropDownList2={setDropDownList2} />
            </View>

            <View style={styles.inputContainer}>
                <FontAwesome style={styles.vectorIcon} name="address-card-o" size={24} color="black" />

                {/* PASSWORD SET INPUT */}
                <TextInput
                    onChangeText={setPassword}
                    secureTextEntry={true}
                    style={styles.inputfield}
                    placeholder="Password"
                />
            </View>
            <View style={{
                marginTop: 5,
                height: "20%",
                width: "81%",
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 5
            }}>
                <TextInput style={{ opacity: 0.5 }}
                    onChange={() => setUserBio}
                    placeholder="Write about your field of work(optional!)"
                    numberOfLines={5}
                    maxLength={100}
                    multiline

                /></View>



            {/* Button Register now */}
            <TouchableOpacity
                onPress={() => handlesubmit()}
                style={{
                    backgroundColor: Colorsmanager.buttontype1,
                    width: "75%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "5%"
                }}>
                <Text>REGISTER NOW</Text>
            </TouchableOpacity>


        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    inputfield: {
        fontSize: 12,
        backgroundColor: Colorsmanager.primary,
        height: 40,
        width: "75%",
        textAlign: "center",


    },
    vectorIcon: {
        width: 38,
        borderWidth: 0.5,
        padding: 2,
        color: Colorsmanager.primary,
        height: 39,
        borderColor: Colorsmanager.primary
    }
    ,
    inputContainer: {

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: Colorsmanager.secondary,
        alignContent: "center",
        margin: 3,
    },
    dropdowndisplayOff: {
        display: "none"
    },
    dropdowndisplayOn: {

    },
    dropdowndisplay2Off: {
        display: "none"
    },
    dropdowndisplay2On: {

    }
})
