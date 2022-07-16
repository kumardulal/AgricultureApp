import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colorsmanager from '../../collections/Colorsmanager';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function ProfileModal({ setModalDisplay, userdata }) {
    const navigation = useNavigation()
    // const [modalDisplay, setModalDisplay] = useState(styles.modalOn)
    const [fname, setFname] = useState("fistname ?")
    const [lname, setLname] = useState("lastname ?")
    const [utype, setUtype] = useState("?")
    const [loginstats, setLoginStas] = useState("दर्ता/लग - इन")

    useEffect(() => {
        if (userdata) {
            setFname(userdata.firstname)
            setLname(userdata.lastname)
            setUtype(userdata.usertype)
            setModalDisplay(styles.modaloff)
            setLoginStas("Logout")
        }

    }, [userdata]);

    const handlePress = () => {
        if (loginstats === "दर्ता/लग - इन") {
            navigation.navigate("LoginScreen")
        }
        else if (loginstats === "Logout") {
            navigation.reset({
                routes: [{ name: 'DrawerNav' }],
            })
            setModalDisplay(styles.modaloff)

        }
    }

    return (
        <View
            style={styles.modalOn}>
            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                <Text style={{ textAlign: "center" }}>लग इन प्रोफाइल </Text>

                {/* cross press */}
                <TouchableOpacity
                    onPress={() => setModalDisplay(styles.modaloff)}>
                    <Entypo name="cross" size={28} color="black" style={{ width: "100%", textAlign: "right" }} />
                </TouchableOpacity>

            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="person" size={18} color="green" />
                <Text style={{ textAlign: "justify", padding: 10, fontSize: 9 }}>{fname} {lname}</Text>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Fontisto name="persons" size={18} color="green" />
                <Text style={{ textAlign: "justify", padding: 10, fontSize: 9 }}>{utype}</Text>
            </View>

            {/* LOGOUT - it will reset the naviogation to reset all states */}
            <TouchableOpacity
                onPress={() => {
                    handlePress()

                }}
                style={{
                    width: 70,
                    height: 25,
                    backgroundColor: Colorsmanager.buttontype1,
                    marginTop: "40%",
                    alignSelf: "center",
                    justifyContent: "center",

                    alignItems: "center"
                }}
            >
                <Text style={{ textAlign: "center" }}>{loginstats}</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    modalOn: {
        // position: "fixed",
        height: 200,
        width: 150,
        backgroundColor: Colorsmanager.primary,

        flex: 1,
        borderTopRightRadius: 10
    },
    modaloff: {
        display: "none"
    }
})
