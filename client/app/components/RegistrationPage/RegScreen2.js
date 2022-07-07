import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import Colorsmanager from '../../collections/Colorsmanager'
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import LogoTitle from '../LOGINPAGE/LogoTitle';
import ApiAddress from '../ApiTrigger/ApiAddress';
import Axios from 'axios';

export default function RegScreen2({ route, navigation }) {
    const registrationData = route.params?.registrationData
    const [isChecked, setChecked] = useState(false);
    const [dalahan, setDalahan] = useState(false)
    const [tarkari, setTarkari] = useState(false)
    const [chau, setChau] = useState(false)
    const [telhan, setTelhan] = useState(false)
    const [gai, setGai] = useState(false)
    const [Vaisi, SetVaisi] = useState(false)
    const [bakhra, setBakhra] = useState(false)
    const [khukhura, setKhukhura] = useState(false)
    const [kukur, setKukur] = useState(false)
    const [macha, setMacha] = useState(false)
    const [others, setOthers] = useState(false)



    const handleApplyNow = () => {
        // console.log(registrationData.fname)
        // const fname = registrationData.fname,
        // const lname = registrationData.lname,
        // const phonenumber = registrationData.phonenumber,
        // const tole = registrationData.tole,
        // const napagapa = registrationData.napagapa,
        // const district = registrationData.district,
        // const province = registrationData.province,
        // const usertype = registrationData.selectedusertype


        Axios.post(`${ApiAddress.httpaddress}/api/registration`, {
            firstname: registrationData.fname,
            lastname: registrationData.lname,
            phonenumber: registrationData.phonenumber,
            tole: registrationData.tole,
            napagapa: registrationData.napagapa,
            district: registrationData.district,
            province: registrationData.province,

            usertype: registrationData.selectedusertype,
            password: registrationData.password,
            dalahan: dalahan,
            tarkari: tarkari,
            chau: chau,
            telhan: telhan,
            gai: gai,
            Vaisi: Vaisi,
            bakhra: bakhra,
            khukhura: khukhura,
            kukur: kukur,
            macha: macha,
            others: others


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




    return (
        <View>
            <View style={{
                flexDirection: "row",
                backgroundColor: Colorsmanager.blanksilver,

                alignItems: "center",

            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("RegScreen")}
                    style={{ top: "6%", padding: 5 }}

                // onPress={navigation.goBack()}
                >
                    <Ionicons name="arrow-back-circle" size={40} color={Colorsmanager.bluish} />
                </TouchableOpacity>

                <View style={{ bottom: "4.%", marginTop: "13%" }}>
                    <LogoTitle />
                </View>


            </View>


            <View style={{
                height: "100%",
                backgroundColor: Colorsmanager.primary, flexDirection: "column", width: "100%"
            }}>


                <Text style={{ fontSize: 25, width: "100%", textAlign: "center" }}>संलग्न कृषि क्षेत्र</Text>
                {/* ----------------------------------------- */}


                <View style={{
                    width: "100%",
                    height: "100%",
                    marginTop: "4%"

                }}>
                    {/* //box seperation item */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={dalahan}
                                onValueChange={setDalahan}
                                color={dalahan ? '#4630EB' : undefined}
                            />
                            <Text>दलहन</Text>

                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='भूमि क्षेत्र'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}


                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={tarkari}
                                onValueChange={setTarkari}
                                color={tarkari ? '#4630EB' : undefined}
                            />
                            <Text>तरकारी</Text>

                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={chau}
                                onValueChange={setChau}
                                color={chau ? '#4630EB' : undefined}
                            />
                            <Text>च्याउ</Text>

                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={telhan}
                                onValueChange={setTelhan}
                                color={telhan ? '#4630EB' : undefined}
                            />
                            <Text>  तेलहन</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>

                    {/* ------------outerchexkBox ends here */}
                    {/* 
$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ANIMAS CATAGORY$$$$$$ */}
                    <Text style={{ textAlign: 'center', fontSize: 25, margin: 5 }}>
                        संलग्न  पशु पक्षी क्षेत्र </Text>

                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={gai}
                                onValueChange={setGai}
                                color={gai ? '#4630EB' : undefined}
                            />
                            <Text>   गाई</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}


                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={Vaisi}
                                onValueChange={SetVaisi}
                                color={Vaisi ? '#4630EB' : undefined}
                            />
                            <Text>  भैंसी</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={bakhra}
                                onValueChange={setBakhra}
                                color={bakhra ? '#4630EB' : undefined}
                            />
                            <Text>
                                बाख्रा</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={khukhura}
                                onValueChange={setKhukhura}
                                color={khukhura ? '#4630EB' : undefined}
                            />
                            <Text>  कुखुरा</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>
                    {/* ------------outerchexkBox ends here */}


                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={kukur}
                                onValueChange={setKukur}
                                color={kukur ? '#4630EB' : undefined}
                            />
                            <Text>
                                कुकुर</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>

                    {/* ------------outerchexkBox ends here */}


                    {/* ------------outerchexkBox ends here */}
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={macha}
                                onValueChange={setMacha}
                                color={macha ? '#4630EB' : undefined}
                            />
                            <Text>
                                माछा</Text>




                        </View>



                        <View style={styles.InputCont}>
                            <TextInput
                                keyboardType='numeric'
                                placeholder='मात्रा'
                            />
                        </View>
                        <View style={styles.InputCont}>
                            <TextInput
                                placeholder='भूमि क्षेत्र'
                                keyboardType='numeric'
                            />
                        </View>

                    </View>



                    {/* ------------OTHERS */}
                    <Text style={{ textAlign: "center", padding: 6 }}> अरूहरू नै</Text>
                    <View style={styles.outerChekbox}>
                        <View style={styles.checkboxCont}>


                            <Checkbox
                                style={styles.checkbox}
                                value={others}
                                onValueChange={setOthers}
                                color={others ? '#4630EB' : undefined}
                            />
                            <Text>
                                अरूहरू नै</Text>




                        </View>



                        <View style={{ borderBottomWidth: 1, width: "60%" }}>
                            <TextInput

                                placeholder='
                                कुनै पनि उल्लेख गर्नुहोस्'
                            />
                        </View>


                    </View>

                    <TouchableOpacity
                        onPress={() => handleApplyNow()}
                        style={{
                            height: 40,
                            width: "50 %",
                            backgroundColor: Colorsmanager.buttontype1,
                            justifyContent: "center",
                            alignSelf: "center",
                            margin: "2%",
                            borderRadius: 5
                        }}
                    >
                        <Text style={{ fontSize: 17, textAlign: "center" }}>APPLY NOW</Text>

                    </TouchableOpacity>

                </View>



            </View>




        </View >
    )
}
const styles = StyleSheet.create({
    checkbox: {
        width: 30,
        height: 30,
        margin: 5,
        padding: 5
    },
    checkboxCont: {
        width: "45%",
        backgroundColor: Colorsmanager.blanksilver,
        alignSelf: "center",
        flexDirection: "row",
        height: 30,
        margin: 5,

        alignItems: "center"
    },
    outerChekbox: {
        alignSelf: "center",
        width: "97%",
        backgroundColor: Colorsmanager.blanksilver,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        opacity: 0.9,


    },
    InputCont: {
        width: "20%",
        borderColor: "green",
        borderWidth: 1,
        backgroundColor: Colorsmanager.primary,
        height: 38,
        justifyContent: "center",
        alignItems: "center"
    }
})