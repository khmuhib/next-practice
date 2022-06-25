const {createPool} = require("mysql")
const pool = createPool ({
    host:"localhost",
    user: "root",
    password: "12345",
    port: 3306,
    database: "data",
})

pool.getConnection((err)=> {
    if(err) {
        console.log("Error connecting to DB.....")
    }
    console.log("Connect To DB")
})

module.exports = pool