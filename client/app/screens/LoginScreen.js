import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'
import Coverbox from '../components/LOGINPAGE/Coverbox'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Axios from 'axios'
import ApiAddress from '../components/ApiTrigger/ApiAddress'






export default function LoginScreen({ navigation }) {
    const [phonenumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')


    //this useEffect will reset the states of login credentials
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {

            setPhoneNumber('');
            setPassword('')

            // do something

            console.log("hello")
        }
        );

        return unsubscribe;
    }, [navigation, 1]);




    const handleLoginPress = () => {
        Axios.post(`${ApiAddress.httpaddress}/api/UserAuthLogin`, {
            phonenumber: phonenumber,
            password: password,

        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);

            }

            else {
                // handle success
                /// declaring the values of api responnse data of user to send it as props to other child routes .
                const userid = response.data[0].userid;
                const fullname = response.data[0].phonenumber;
                const phonenumber = response.data[0].fulladdress;
                const fulladdress = response.data[0].fulladdress;
                const usertype = response.data[0].usertype;
                const userfield = response.data[0].userfield;
                const userbio = response.data[0].userbio
                const data = {
                    'userid': userid,
                    'fullname': fullname,
                    'phonenumber': phonenumber,
                    "fulladdress": fulladdress,
                    "usertype": usertype,
                    "userfield": userfield,
                    "userbio": userbio

                }
                navigation.navigate({
                    name: 'DrawerNav',
                    params: { data: data }, //here if I pass data as something different name the way i get this data in another file might not accept
                    merge: true,
                });
            }

        }).catch(error => console.log(error));





    }
    return (
        <SafeAreaView style={styles.maincontainer} >

            <View style={styles.whitebox}>
                <LogoTitle />
                <Coverbox />

            </View>

            {/* login form */}
            <View style={styles.loginformcontainer}>

                <View style={{
                    height: "27%",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "20%",

                }}>
                    <View style={{ width: "90%", alignItems: "center", flexDirection: "row" }}>
                        <FontAwesome5 style={{ backgroundColor: "white", height: 50, padding: 5 }} name="phone-alt" size={37} color="black" />

                        <TextInput
                            onChangeText={setPhoneNumber}
                            value={phonenumber}
                            // value={ }


                            placeholder="username/phone number"
                            placeholderTextColor="#00716F"
                            style={styles.input}
                        >

                        </TextInput>

                    </View>
                    <View style={{ width: "90%", alignItems: "center", flexDirection: "row" }}>

                        <MaterialCommunityIcons style={{ backgroundColor: "white", height: 50, padding: 5, opacity: 0.8 }} name="onepassword" size={37} color="black" />
                        <TextInput
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="#00716F"
                            value={password}
                            style={styles.input}
                        >

                        </TextInput>

                    </View>




                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",

                    marginRight: "10%",
                    marginLeft: "10%",

                    alignSelf: "center",
                    width: "100%",
                    height: 50,


                }}>
                    <TouchableOpacity style={{
                        fontSize: 12,
                        color: Colorsmanager.primary

                    }}><Text style={{
                        fontSize: 12,
                        color: Colorsmanager.primary
                    }}>FORGOT PASSWORD</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button}
                        onPress={() => handleLoginPress()}
                    >
                        <Text style={{ color: Colorsmanager.primary }}> LOGIN</Text>
                    </TouchableOpacity>

                </View>



                <TouchableOpacity
                    onPress={() => navigation.navigate({
                        name: 'RegistrationScreen',
                        // params: { userdata: userdata, pdata: pdata },
                        merge: true,
                    })}


                >
                    <Text style={{
                        color: Colorsmanager.primary,
                        fontSize: 17,
                        marginTop: "12%",
                        textAlign: "center",
                        textDecorationLine: 'underline',

                    }}>Are you new user ? REGISTER</Text>
                </TouchableOpacity>







            </View>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    whitebox: {
        // height: 270,

        width: "100%",
        backgroundColor: Colorsmanager.blanksilver,
    },
    maincontainer: {
        flex: 1,
        justifyContent: "center"
        // height: "100%",
        // width: "100%",


    },


    loginformcontainer: {

        height: "65%",
        width: "100%",
        backgroundColor: Colorsmanager.secondary,
        // borderTopLeftRadius: 1,
        // borderTopRightRadius: 300,
        // borderBottomLeftRadius: 500,







    },
    input: {
        height: 50,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        width: "80%",
        borderTopRightRadius: 10,
        borderColor: Colorsmanager.primary,
        backgroundColor: Colorsmanager.primary,
        opacity: 0.9,
        paddingHorizontal: 10,
        textAlign: "center"
    }
    , button: {
        width: 100,
        height: 45,
        backgroundColor: Colorsmanager.buttontype1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        alignSelf: "center"

    }

})
