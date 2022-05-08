import { obtainUsers } from "../components/sessioncheck.js";
import { setCurrentUser } from "../components/setcurrentuser.js";

document.getElementById("iniciarSesionBtn").addEventListener("click", () => {
    let userInHTML = document.getElementById("userName").value;
    let passInHTML = document.getElementById("userPass").value;
    const usersObtained = obtainUsers();

    if ((usersObtained.some(({ userName, password }) => userName === userInHTML && password === passInHTML))) {
        const logedUser = usersObtained.find(({ userName }) => userName === userInHTML);
        setCurrentUser(logedUser);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Usuario logueado correctamente',
            showConfirmButton: false,
            timer: 2000
        })
        window.location.replace("/sections/userindex.html");
    }
    else {
        Swal.fire({
            position: 'top',
            icon: 'error',
            title: 'Los datos ingresados no son correctos, intente nuevamente',
            showConfirmButton: false,
            timer: 2000
        })

    }
});

