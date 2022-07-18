const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const { response } = require('express')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "agriculturedb"
})




// posting Registration data 
// app.post("/api/registration", (req, res) => {
//     const fullname = req.body.fullname
//     const phonenumber = req.body.phonenumber
//     const fulladdress = req.body.fulladdress
//     const usertype = req.body.usertype
//     const userfield = req.body.userfield
//     const password = req.body.password
//     const userbio = req.body.userbio

//     if (fullname.length < 5) {
//         res.send({ message: "❌fill up name properly" })
//     }
//     else if (phonenumber.length != 10) {
//         res.send({ message: "❌fill up phone number properly" })
//     }
//     else if (fulladdress.length < 7) {
//         res.send({ message: "❌fill up full address " })
//     }
//     else if (password.length < 8) {

//         res.send({ message: "❌Your password is too small " })
//     }

//     else {
//         const sqlInsert = "Insert into users(fullname,phonenumber,fulladdress, usertype,userfield,password,userbio) Values (?,?,?,?,?,?,?);"
//         db.query(sqlInsert, [fullname, phonenumber, fulladdress, usertype, userfield, password, userbio], (err, result) => {
//             if (err) {
//                 console.log(err)
//             }
//             else {
//                 res.send({ message: "Success" })
//             }


//         })
//     }


// })

app.post("/api/registration", (req, res) => {
    const firstname = req.body.firstname
    const lastname = req.body.lastname
    const phonenumber = req.body.phonenumber
    const tole = req.body.tole
    const napagapa = req.body.napagapa
    const district = req.body.district
    const province = req.body.province

    const usertype = req.body.usertype
    const password = req.body.password
    const dalahan = req.body.dalahan
    const tarkari = req.body.tarkari
    const chau = req.body.chau
    const telhan = req.body.telhan
    const gai = req.body.gai
    const Vaisi = req.body.Vaisi
    const bakhra = req.body.bakhra
    const khukhura = req.body.khukhura
    const kukur = req.body.kukur
    const macha = req.body.macha
    const others = req.body.others





    const sqlInsert = "Insert into krishi(firstname,lastname,phonenumber, tole,napagapa,district,province,usertype,password,dalahan,tarkari,chau,telhan,gai,vaisi,bakhra,khukhura,kukur,macha,others) Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"
    db.query(sqlInsert, [firstname, lastname, phonenumber, tole, napagapa, district, province, usertype, password, dalahan, tarkari, chau, telhan, gai, Vaisi, bakhra, khukhura, kukur, macha, others], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send({ message: "Success" })
        }


    })



})



//login authentication
app.post("/api/UserAuthLogin", (req, res) => {
    const phonenumber = req.body.phonenumber
    const password = req.body.password
    const sqlSelect = "Select  * from krishi where phonenumber = ? And password= ?; "
    db.query(sqlSelect, [phonenumber, password], (err, result) => {
        if (err) {

            res.send({ err: err })
        } else if (result.length > 0) {

            res.send(result);

        }
        else {
            res.send({ message: "❌Invalid Credentials 🧐" })
        }
    })
})

app.post("/api/post/sendmessage", (req, res) => {
    const senderid = req.body.userid
    const usermessage = req.body.usermessage
    const updateddate = req.body.messagedatetime

    const sqlInsert = 'Insert into messages(senderid,usermessage,updateddate) values(?,?,?);'
    db.query(sqlInsert, [senderid, usermessage, updateddate], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }
    })
})


//announcement
app.get("/api/get/announcements", (req, res) => {

    const sqlSelect = "Select  * from announcement; "
    db.query(sqlSelect, (err, result) => {
        if (err) {

            res.send({ err: err })
        }
        else {
            res.send(result)
        }
    })
})

//GET NEWS ITEMS

app.get("/api/getNewsItems", (req, res) => {
    const sqlSelect = "Select * from news;"
    db.query(sqlSelect, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(result)
        }
    })
})

app.listen(8001, () => {
    console.log("running on port 8001")
})

