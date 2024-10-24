
function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: one or both inputs are empty.';
    return;
  }
  updateLabel();
}
function inputsAreEmpty() {
  if (getNumber1() === '' || getNumber2() === '') {
    return true;
  } else {
    return false;
  }
}
function updateLabel() {
  var addend1 = getNumber1();
  var addend2 = getNumber2();
  var sum = Number(addend1) + Number(addend2);  //los pone como si fueran Strings por eso añado Number, al ser string concatena
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}
function getNumber1() {
  return inputs[0].value;
}
function getNumber2() {
  return inputs[1].value;
}
var inputs = document.querySelectorAll('input');
var label = document.querySelector('h2');
var button = document.querySelector('button');
button.addEventListener('click', onClick);
