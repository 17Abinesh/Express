var express = require('express');  
var app = express();  
app.use(express.static('public'));  
  

app.get('/process_get', function (req, res) {  
response = {  
       user_name:req.query.user_name,  
       password:req.query.password,
       email:req.query.email  
   };  
   console.log(response);  
   res.end(JSON.stringify(response));  
})  
var server = app.listen(8000, function () {
  
})  