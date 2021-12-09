let myInput = document.getElementById('pwd');

function validatePassword() {

    let password = String(myInput.value);

    // if (password.length < 6) {
    //     return "Minimum password length is 6";
    // }

    // if (password.length > 12) {
    //     return "Maximum password length is 12";
    // }

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

    // return '${passwordStrength}%';

    document.getElementById('textIn').innerHTML = passwordStrength;
}

