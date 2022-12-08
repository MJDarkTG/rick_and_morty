const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const regexPassword = /^(?=.*?[a-z])(?=.*[0-9]).{6,10}$/;


export function validation(userDAta) {
    let errros = {}
    if (!regexEmail.test(userDAta.username)) {
        errros.username = "El usuario de ser un email"
    } else if (!userDAta.username) {
        errros.username = "El usuario no puede estar vacio"
    } else if (userDAta.username.length > 35) {
        errros.username = "el usuario no puede ser mayor de 35 caracteres"
    }
    if (!regexPassword.test(userDAta.password)) {
        errros.password = "la contraseña debe tener al menos un número"
    } else if (userDAta.password.length < 6 && userDAta.password.length > 10) {
        errros.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"
    }
    return errros;
}