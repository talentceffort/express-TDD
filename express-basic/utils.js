// 이 함수를 test 해보자.
const capitialize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = {
  capitialize: capitialize,
}