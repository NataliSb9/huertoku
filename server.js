const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/huertaweb'));

app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/huertaweb/index.html'));
});

app.listen(process.env.PORT || 8080);