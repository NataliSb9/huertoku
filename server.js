const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/la-huerta'));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/la-huerta/index.html'));
});

app.listen(process.env.PORT || 8080);