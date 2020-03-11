const express = require('express');
const app = express();

// 미들웨어는 함수들의 연속


function commonmw (req, res, next) {
  console.log('commonmw')
  next(new Error('error ouccered'))
}

function errormw(err, req, res, next) {
  console.log(err.message)
  // 에러 처리
  next()
}

app.use(commonmw)
app.use(errormw)

app.listen(3500, function() {
  console.log('Server is running');
})