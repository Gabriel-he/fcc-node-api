var express = require('express')
var app = express()

app.get('/:dateString', function (req, res) {
  console.log(req.params.dateString);
  var dateString = req.params.dateString;
  var data;
  var date;
  if (dateString == '' || dateString == null) {
      data = {
        unix: null,
        natural: null,
      }
  } else if (isNaN(parseInt(dateString))) {
      date =  new Date(dateString);
      data = {
        unix: date.getTime(),
        natural: date.toLocaleDateString(),
      }
  } else if (typeof(parseInt(dateString)) == 'number') {
      date =  new Date(parseInt(dateString));
      data = {
        unix: date.getTime(),
        natural: date.toLocaleDateString(),
      }
  }

  res.json(data)
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})