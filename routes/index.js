const db = require("../controller");
// var path = require("path");

module.exports = app => {

    // app.get('/', (req,res) => {
    //     res.sendFile('path.join("index.html")');
    // })

    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      });

    app.post('/get_zip', (req, res) => {
        console.log(req.body.zipCode)
        db.getInfo(req.body.zipCode, (response, err) => {
            if (err) {
                res.send({data:err})
            }
            else {
                res.send({data: response})
            }
            }
        )    
    });

}