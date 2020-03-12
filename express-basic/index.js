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
app.get("/users", function (req, res) {
  res.send(users)
});

app.listen(3500, function() {
  console.log('Server is running');
})