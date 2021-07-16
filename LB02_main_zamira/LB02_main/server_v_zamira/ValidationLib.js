

/**
 * Beschreibung
 * @param id: Identifikation
 * @param message: Fehlermeldung
 * @returns {string}
 */
function showError(id, message) {
    return `${id}: ${message}`;
}

function showSuccess(id) {
    return `${id} successfully validated!`;
}

function checkEmail(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email is not valid')
        }
    }
    return result;
}


function checkAgb(agb) {
  return {isNotValid: agb != "true", msg: 'Please confirm our AGB'};
}


function checkPhonenumber(id,input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^([0|\+[0-9]{1,5})?([0-9][0-9]{9})$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'phonenumber is not valid')
        }
    }
    return result;
}


function CheckConfirmPassword(password, confirmPassword) {
  return {isNotValid: password != confirmPassword, msg: 'Password confirmation wrong'};
}


function checkRequired(id, input) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.trim() === '') {
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    return result;
}

function checkLength(id, input, min, max) {
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} must be at least ${min} characters`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} must be less than ${max} characters`)
        }
    }
    return result;
}



module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkPhonenumber,
    CheckConfirmPassword,
    checkAgb
}
