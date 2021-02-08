// Reverse a string
function reverseString(str) {
  var revStr = "";
  for (var i = str.length - 1; i >= 0; i--) revStr += str[i];
  return revStr;
}

reverseString("hello");
