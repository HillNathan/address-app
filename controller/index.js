const db = require("../connection")

const dbFunctions = {

    getInfo: (theZip, cb) => {
        var queryString = "SELECT * FROM zipcodelist WHERE ZipCode = ?"
        db.query(queryString, [theZip],
        (err, data) => {
            if (err) throw err
            cb(data)
        })
    }

}

module.exports = dbFunctions