
module.exports = app => {

    app.get('/express_backend', (req, res) => {
        res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
      });

}