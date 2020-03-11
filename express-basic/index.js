const express = require('express');
const app = express();

// 미들웨어는 함수들의 연속

// 미들웨어를 추가해 보자!!
function logger(req, res, next) {
  console.log('i am logger')
  next();
}

function logger2(req, res, next) {
  console.log(`i am logger2`);
  next();
}

app.use(logger)
app.use(logger2)

app.listen(3500, function() {
  console.log('Server is running');
})