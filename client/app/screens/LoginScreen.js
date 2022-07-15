import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, Button, TouchableOpacity, Alert } from 'react-native'
import Colorsmanager from '../collections/Colorsmanager'
import Coverbox from '../components/LOGINPAGE/Coverbox'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Axios from 'axios'
import ApiAddress from '../components/ApiTrigger/ApiAddress'
import { Ionicons } from '@expo/vector-icons';


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
                const firstname = response.data[0].firstname;
                const lastname = response.data[0].lastname;
                const phonenumber = response.data[0].phonenumber;
                const tole = response.data[0].tole;
                const napagapa = response.data[0].napagapa
                const district = response.data[0].district;
                const province = response.data[0].province;
                const usertype = response.data[0].usertype;
                const password = response.data[0].password
                const dalahan = response.data[0].dalahan;
                const tarkari = response.data[0].tarkari;
                const chau = response.data[0].chau;
                const telhan = response.data[0].telhan
                const gai = response.data[0].gai;
                const vaisi = response.data[0].vaisi;
                const bakhra = response.data[0].bakhra;
                const khukhura = response.data[0].khukhura;
                const kukur = response.data[0].kukur;
                const macha = response.data[0].macha;
                const others = response.data[0].others;

                const data = {
                    'userid': userid,
                    'fistname': firstname,
                    'lastname': lastname,
                    "phonenumber": phonenumber,
                    "tole": tole,
                    "napagapa": napagapa,
                    "district": district,
                    'province': province,
                    'usertype': usertype,
                    "password": password,
                    "dalahan": dalahan,
                    "tarkari": tarkari,
                    "chau": district,
                    'telhan': userid,
                    'gai': firstname,
                    'vaisi': lastname,
                    "bakhra": phonenumber,
                    "khukhura": tole,
                    "kukur": napagapa,
                    "macha": district,
                    "others": others

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
                <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("DrawerNav")}
                        style={{ top: "7%", color: "black", marginLeft: 6 }}>
                        <Ionicons style={{ opacity: 0.8 }} name="md-arrow-back-outline" size={40} />
                    </TouchableOpacity>
                    <LogoTitle />
                </View>
                <Coverbox />

            </View>

            {/* login form */}
            <View style={styles.loginformcontainer}>

                <View style={{
                    height: "20%",
                    width: "100%",
                    alignItems: "center",
                    marginTop: "25%",



                }}>
                    <View style={{ width: "90%", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
                        <FontAwesome5 style={{ backgroundColor: "white", height: 50, padding: 5 }} name="phone-alt" size={37} color="black" />

                        <TextInput
                            onChangeText={setPhoneNumber}
                            value={phonenumber}
                            // value={ }


                            placeholder="phone number/फोन नम्बर"
                            placeholderTextColor="#00716F"
                            style={styles.input}
                        >

                        </TextInput>

                    </View>
                    <View style={{ width: "90%", alignItems: "center", flexDirection: "row", justifyContent: "center" }}>

                        <MaterialCommunityIcons style={{ backgroundColor: "white", height: 50, padding: 5, opacity: 0.8 }} name="onepassword" size={37} color="black" />
                        <TextInput
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="पासवर्ड/Password"
                            placeholderTextColor="#00716F"
                            value={password}
                            style={styles.input}
                        >

                        </TextInput>

                    </View>






                    <View style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",

                        marginRight: "10%",
                        marginLeft: "10%",

                        alignSelf: "center",
                        width: "100%",
                        height: "50%",


                    }}>
                        <TouchableOpacity

                            onPress={() => Alert.alert('Requst Password sent.', 'तपाईको पासवर्ड तपाईको फोनमा केहि बेरमा पठाइनेछ |')}
                            // onPress={() => alert(" Message sent. तपाईको पासवर्ड तपाईको फोनमा केहि बेरमा पठाइनेछ |")}
                            style={{
                                fontSize: 12,
                                color: Colorsmanager.primary

                            }}><Text style={{
                                fontSize: 12,
                                color: Colorsmanager.bluish,
                            }}>पासवर्ड भुल्नु भयो ?</Text></TouchableOpacity>

                        <TouchableOpacity style={styles.button}
                            onPress={() => handleLoginPress()}
                        >
                            <Text style={{ color: Colorsmanager.primary }}> लग - इन</Text>
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity
                        onPress={() => navigation.navigate({
                            name: 'RegScreen',
                            // params: { userdata: userdata, pdata: pdata },
                            merge: true,
                        })}


                    >
                        <Text style={{
                            color: Colorsmanager.bluish,
                            fontSize: 16,
                            marginTop: "12%",
                            textAlign: "center",
                            textDecorationLine: 'underline',


                        }}>के तपाई नयाँ हुनुहुन्छ ? दर्ता गर्नुहोस्</Text>
                    </TouchableOpacity>



                </View>



            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    whitebox: {
        height: "34%",

        width: "100%",
        backgroundColor: Colorsmanager.blanksilver,
    },
    maincontainer: {
        flex: 1,
        justifyContent: "center",



    },


    loginformcontainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        backgroundColor: Colorsmanager.blanksilver,

        alignItems: "center"

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



    }

})
