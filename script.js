let myInput = document.getElementById('pwd');



function validatePassword() {

    let password = String(myInput.value);

    let myText;

    if (password.length < 6) {
        myText = "Minimum password length is 6";
    }

    if (password.length > 12) {
        myText = "Maximum password length is 12";
    }

    let passwordStrength = 0;

    if (/[a-z]/.test(password)) {
        passwordStrength += 25;
    }

    if (/[A-Z]/.test(password)) {
        passwordStrength += 25;
    }

    if (/[0-9]/.test(password)) {
        passwordStrength += 25;
    }

    if (/[$@#&!]/.test(password)) {
        passwordStrength += 25;
    }


    document.getElementById('textIn').innerHTML = passwordStrength;
    
    document.getElementById('display').innerHTML = myText;
    
    // return passwordStrength;
    return myText;
}