const db = require("../controller");
var path = require("path");

module.exports = app => {

    app.get('/', (req,res) => {
        res.sendFile('path.join("index.html")');
    })

    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      });

    app.get('/get_home', (req, res) => {
        db.getInfo(17603, response => {
            res.send({data: response})
            }
        )
    });

    app.post('/get_zip', (req, res) => {
        db.getInfo(req.body.zipCode, response => {
            res.send({data: response})
            }
        )    
    });

}