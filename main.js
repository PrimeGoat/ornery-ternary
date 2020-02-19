function isHot(temperature) {
  return temperature >= 80 ? "Yes, it is indeed hot." : "No, it is not hot.";
}


function helloThere(name) {
  return (name.length < 6 ? "Hello, " : "Hi, ") + name;
}

function goodbyeYou(name) {
  return "Goodbye, " + (name === undefined ? "stranger" : name);
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}