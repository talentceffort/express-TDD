const express = require('express');
const morgan = require('morgan');
const app = express();
// 미들웨어는 함수들의 연속
const users = [
  { id:1, name: 'alice' },
  { id:2, name: 'bek' },
  { id:3, name: 'chris' },
];

app.use(morgan('dev'));

// 라우팅 부분.
// limit 갯수만큼 응답.
app.get("/users", function (req, res) {
  req.query.limit = req.query.limit || 10
  const limit = parseInt(req.query.limit, 10)
  if (Number.isNaN(limit)) {
    return res.status(400).end()
  }
  res.send(users.slice(0, limit))
});

app.listen(3500, function() {
  console.log('Server is running');
})

module.exports = app