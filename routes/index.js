const db = require("../controller")


module.exports = app => {

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