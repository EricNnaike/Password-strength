var reg1 = /[a-z]+/g;
var reg2 = /[A-Z]+/g;
var reg3 = /[0-9]+/g;  
var reg4 = /[$@#&!]+/g;
// let password = 'wA6uche$';
let myInput = document.getElementById('pwd');
var submitOk = "true";
var text;

function passVerification() {
    let inputFig = String(myInput.value);

    if(inputFig.match(reg1) || inputFig.match(reg2) || inputFig.match(reg3) || inputFig.match(reg4)) {
        text = 'Password strength: ' + 25 + '%';
    }

    if(inputFig.match(reg2)) {
        text = 'Password strength: ' + 50 + '%';
    } 

    if(inputFig.match(reg3)){
        text = 'Password strength: ' + 75 + '%';
    }

    if(inputFig.match(reg1) && inputFig.match(reg2) && inputFig.match(reg3) && inputFig.match(reg4)){
        text = 'Password strength: ' + 100 + '%';
    }

    if(inputFig.length < 6) {
        text = 'Minimum character requirement is 6';
    } 

    // if(submitOk == 'false') {
    //     return false;
    //  }

     document.getElementById('textIn').innerHTML = text;
}