import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Colorsmanager from '../../collections/Colorsmanager'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeCover({ setModalDisplay, userdata, loginstatetext, setLoginStateText }) {


    const navigation = useNavigation()



    useEffect(() => {
        if (userdata != undefined) {
            if (userdata.phonenumber.length > 0) {
                setLoginStateText(" User Profile ✔️")
            }
            else {
                alert("userValidation Data not received")
            }
        }

        else {
            setLoginStateText("दर्ता/लग - इन")
        }
    }, [userdata]);

    const handleLoginButton = () => {
        ///if not yet login
        if (loginstatetext === "दर्ता/लग - इन") {
            navigation.navigate("LoginScreen", {

            })

        }
        // if loggedin already
        else {
            setModalDisplay(styles.modalOn)
        }

    }
    return (
        <View style={{
            height: 185,
            justifyContent: "center",
            alignItems: "center",

        }}>

            <Image
                style={{

                    width: "90%",
                    height: "50%",

                }}
                resizeMode='cover'
                source={require('../../assets/toppicks/logotitle.png')}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                <TouchableOpacity
                    onPress={() => handleLoginButton()}
                    style={styles.buttonCover}
                >
                    <View style={styles.buttonAlign}>
                        <MaterialIcons name="account-box" size={24} color="black" />
                        <Text >{loginstatetext}</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("MessageScreen", {
                        userdata: userdata
                    })}
                    style={styles.buttonCover}
                >
                    <View style={styles.buttonAlign}>
                        <AntDesign name="message1" size={24} color="black" />
                        <Text>
                            सन्देश पठाउनुहोस्</Text>
                    </View>

                </TouchableOpacity>


            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    buttonCover: {
        width: 120,
        height: 40,
        backgroundColor: Colorsmanager.blanksilver,
        justifyContent: "center",
        borderRadius: 10
    },
    buttonAlign: { justifyContent: "space-around", flexDirection: "row" },
    modalOn: {
        // position: "fixed",
        height: 200,
        width: 150,


        flex: 1,
        borderTopRightRadius: 10
    },
    modaloff: {
        display: "none"
    }

})