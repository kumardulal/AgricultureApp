const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

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
app.post("/api/registration", (req, res) => {
    const fullname = req.body.fullname
    const phonenumber = req.body.phonenumber
    const fulladdress = req.body.fulladdress
    const usertype = req.body.usertype
    const userfield = req.body.userfield
    const password = req.body.password
    const userbio = req.body.userbio


    const sqlInsert = "Insert into users(fullname,phonenumber,fulladdress, usertype,userfield,password,userbio) Values (?,?,?,?,?,?,?);"
    db.query(sqlInsert, [fullname, phonenumber, fulladdress, usertype, userfield, password, userbio], (err, result) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(result)
        }


    })

})

//login authentication
// app.post("/api/UserAuthLogin", (req, res) => {
//     const userphonenumberInput = req.body.userphonenumberInput
//     const userpasswordInput = req.body.userpasswordInput
//     const sqlSelect = "Select  * from users where phonenumber = ? And password= ?; "
//     db.query(sqlSelect, [userphonenumberInput, userpasswordInput], (err, result) => {
//         if (err) {

//             res.send({ err: err })
//         } else if (result.length > 0) {

//             res.send(result);



//         }
//         else {
//             res.send({ message: "❌Invalid Credentials 🧐" })
//         }
//     })
// })

// app.listen(8001, () => {
//     console.log("running on port 8001")
// })