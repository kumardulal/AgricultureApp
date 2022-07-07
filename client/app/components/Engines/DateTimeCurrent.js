import React from 'react'
import NepaliDate from 'nepali-date-converter'

const DateTimeCurrent = () => {
    NepaliDate.language = 'np'
    var date = new NepaliDate(new Date()).toLocaleString()
    // var date = new Date().getDate();


    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date;//format: dd-mm-yyyy;
}

export default DateTimeCurrent();
