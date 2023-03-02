const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const passwordConfirm = document.getElementById('password-confirm')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get values from the inputs
    const usernameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmValue = passwordConfirm.value.trim()


    if( usernameValue === '' ) {
        // Add erro class
        // Show error
        setErrorFor(username, 'Username cannot be blank')
    } else {
        //  Add success class
        setSuccessFor(username)
    }

    if( emailValue === '' ) {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }


    if( passwordValue === '' ) {
        setErrorFor(password, 'Please enter a password')
    } else {
        setSuccessFor(password)
    }

    if( passwordConfirmValue === '' ) {
        setErrorFor(passwordConfirm, 'Please confirm your password')
    } else if (passwordValue !== passwordConfirmValue) {
        setErrorFor(passwordConfirm, 'Passwords do not match')
    } else {
        setSuccessFor(passwordConfirm)
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement // selects parent of the input, ex. parent of username, which is form-control div.
    const small = formControl.querySelector('small') // Now to select the small element, we can traverse down from the formControl value and select the small element using querySelector.
    // add error message inside small
    small.innerText = message

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    const formControl = input.parentElement
    formControl.className = 'form-control success'
}


// Function to check if email is valid

function validateEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
  }
