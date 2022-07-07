import React, { useState, useRef, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colorsmanager from '../collections/Colorsmanager'
import LogoTitle from '../components/LOGINPAGE/LogoTitle'
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { set } from 'react-native-reanimated'


export default function RegScreen({ navigation }) {
    const btn1Name = "Next"
    const btn2Name = "Register Now"
    const [selectedusertype, setSelectedUserType] = useState("कृषक");
    const [submitbutton, setSubmitButton] = useState(`${btn1Name}`)

    const [firstname, setFirstName] = useState('')
    const [lastname, setLastNAme] = useState('')
    const [phonenumber, setPhoneNumber] = useState('')
    const [tole, setTole] = useState()
    const [napagapa, setNapaGapa] = useState('')
    const [district, setDistrict] = useState('')
    const [province, setProvince] = useState('')
    const [password, setPassword] = useState('')



    useEffect(() => {
        if (selectedusertype === "कृषक") {
            setSubmitButton(btn1Name)
        }
        else {
            setSubmitButton("Register Now")
        }

    }, [selectedusertype]);


    const handleSubmit = () => {
        console.log("Sunmitted the task")

        if (firstname.length < 3 || lastname.length < 3 || phonenumber.length != 10 || tole.length < 3 || napagapa.length < 6 || district.length < 3 || province.length < 5) {
            alert("फारम राम्ररी भर्नुहोस्, पुन: प्रयास गर्नुहोस्")
        }
        else {

            if (submitbutton === btn1Name) {

                const registrationData = {
                    "fname": firstname,
                    "lname": lastname,
                    "phonenumber": phonenumber,
                    "tole": tole,
                    "napagapa": napagapa,
                    "district": district,
                    "province": province,

                    "selectedusertype": selectedusertype,
                    "password": password,

                }

                navigation.navigate({
                    name: 'RegScreen2',
                    params: { registrationData: registrationData },
                    merge: true,
                })
            }
            else {
                //from submit here for EnterPrise and others
                navigation.navigate("LoginScreen")
                alert("successfully registered")
            }
        }

    }


    return (
        <SafeAreaView >
            <View style={{
                flexDirection: "row",
                backgroundColor: Colorsmanager.blanksilver,

                alignItems: "center"
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("LoginScreen")}
                >
                    <Ionicons name="arrow-back-circle" size={40} color={Colorsmanager.bluish} />
                </TouchableOpacity>
                <View style={{

                    left: 7,
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: "4%"
                }}>
                    <LogoTitle />
                </View>

            </View>

            <View style={{ alignItems: "center", marginTop: "2%" }}>
                <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                    एप दर्ता फारम
                </Text>
                <View
                    style={styles.inputfield}
                >

                    <TextInput
                        onChangeText={setFirstName}
                        style={styles.inputtext}
                        placeholder='नाम (name)'

                    />
                </View>
                <View style={styles.inputfield}>
                    <TextInput
                        onChangeText={setLastNAme}
                        style={styles.inputtext}
                        placeholder="
                        थर (surname)"
                    />
                </View>
                <View style={styles.inputfield}>
                    <TextInput
                        onChangeText={setPhoneNumber}
                        style={styles.inputtext}
                        keyboardType='numeric'
                        placeholder="
                        फोन नम्बर (phone number)"
                    />
                </View>
                {/* ----------------------------------------------- */}



                <View style={{ width: "85%", justifyContent: "center", flexDirection: "row" }}>
                    <View style={styles.addressbox}>

                        <TextInput
                            onChangeText={setTole}
                            style={styles.inputtext}

                            placeholder=" 
                            टोल/Tole"
                        />
                    </View>
                    <View style={styles.addressbox}>
                        <TextInput
                            onChangeText={setNapaGapa}
                            style={styles.inputtext}

                            placeholder="  नगरपालिका/गाउँपालिका"
                        />
                    </View>

                </View>
                <View style={{ width: "85%", justifyContent: "center", flexDirection: "row" }}>
                    <View style={styles.addressbox}>

                        <TextInput
                            onChangeText={setDistrict}
                            style={styles.inputtext}

                            placeholder=" 
                            जिल्ला"
                        />
                    </View>
                    <View style={styles.addressbox}>
                        <TextInput
                            onChangeText={setProvince}
                            style={styles.inputtext}
                            // defaultValue="मधेश प्रदेश"
                            placeholder="प्रदेश/Province"
                        />
                    </View>

                </View>
                <View style={styles.inputfield}>
                    <TextInput
                        onChangeText={setPassword}
                        style={styles.inputtext}
                        secureTextEntry={true}
                        placeholder="पासवर्ड"
                    />
                </View>

                {/* ------------------------------------------ */}
                <Text style={{ fontSize: 20, margin: "0.6%" }}>विवरण</Text>
                <View style={{ width: "85%", backgroundColor: Colorsmanager.blanksilver }}>
                    <Picker

                        selectedValue={selectedusertype}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedUserType(itemValue)
                        }>
                        <Picker.Item label="कृषक" value="कृषक" />
                        <Picker.Item label="उद्यम" value="उद्यम" />
                        <Picker.Item label="अरु" value="अरु" />
                    </Picker>
                </View>
                {/* ------------------------------------------ */}



                {/* ---------------------------------SUBMIT BUTTON ?NEXT- */}
                <TouchableOpacity
                    onPress={() => handleSubmit()}
                    style={{
                        marginTop: "12%",
                        width: 150,
                        height: 40,
                        backgroundColor: Colorsmanager.buttontype1,
                        borderRadius: 5,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text style={{ fontSize: 18 }}>{submitbutton}</Text>

                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    inputcontainer: {

    }
    ,
    inputfield: {
        width: "85%",
        backgroundColor: Colorsmanager.blanksilver,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2%",
        height: 45,
        borderRadius: 5
    },
    inputtext: { width: "100%", textAlign: "center" },
    addressbox: {
        width: "48%",
        backgroundColor: Colorsmanager.blanksilver,
        margin: 5,
        height: 35,
        justifyContent: "center"

    }

})