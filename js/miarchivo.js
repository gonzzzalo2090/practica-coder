let ingresarUsuario = prompt("Ingrese su nombre de usuario")

while (ingresarUsuario != "ESC") {
    switch (ingresarUsuario) {
        case "GONZALO":
            alert("Bienvenido Gonzalo");
            break;
        default:
            alert("Usuario no encontrado");
            break;    
    }
    ingresarUsuario = prompt("Ingrese su nombre de usuario nuevamente")
}