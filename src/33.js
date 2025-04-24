function getRandomInt(max) {
  var max = Math.max.apply(Math, arguments);
  return Math.floor(Math.random() * (max - 0 + 1)) + 0;
}
