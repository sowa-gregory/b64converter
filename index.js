var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/convert_tob64/:data', (req, res) => {
    var data = req.params.data;
    console.log(data);
    return res.send(Buffer.from(data).toString("base64"));
  });

var server = app.listen(80, ()=>{console.log("server   !! sucessfully started on port 80")});
