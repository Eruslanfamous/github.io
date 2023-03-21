var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/photokhl.jpg') {
      myImage.setAttribute ('src','images/images.png');
    } else {
      myImage.setAttribute ('src','images/photokhl.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
 localStorage.setItem('name', myName);
  myHeading.textContent = 'LOKO champion, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'LOKO champion, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}