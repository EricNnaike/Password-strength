var reg1 = /([a-z][A-Z][0-9][$@#&!])?/g;
var reg2 = /[a-z]{1}[A-Z0-9$@#&!]{1}/g;
var reg3 = /[a-z]{1}[A-Z0-9$@#&!]{2}/g;  
var reg4 = /[a-z][A-Z][0-9][$@#&!]/g;  
// let password = 'wA6uche$';
let myInput = document.getElementById('pwd');
var text;

function passVerification() {
    let inputFig = String(myInput.value);

    if(inputFig.match(reg1)) {
        text = 'Password strength: ' + 25 + '%';
    } else{
        text = 'too much';
    }

    if(inputFig.match(reg2)) {
        text = 'Password strength: ' + 50 + '%';
    }

    if(inputFig.match(reg3)){
        text = 'Password strength: ' + 75 + '%';
    }

    if(inputFig.match(reg4)){
        text = 'Password strength: ' + 100 + '%';
    }

    if(inputFig.length < 6) {
        text = 'Minimum character requirement is 6';
    } 

     document.getElementById('textIn').innerHTML = text;
}