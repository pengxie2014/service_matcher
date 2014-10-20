var express = require('express')
var app = express()
app.set('title', 'Sercice Matcher')
app.get('/', function(req,res)
{
  res.send('Please set a query:')
  }
)
app.listen(8080, function() {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s',host, port)
})
