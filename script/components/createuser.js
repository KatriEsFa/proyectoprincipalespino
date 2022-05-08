import { Usuario } from "../constructors/constructorusuario.js";
import { obtainUsers } from "../components/sessioncheck.js";
import { userValidation } from "../components/usersvalidation.js";
import { setCurrentUser } from "./setcurrentuser.js";

document.getElementById("btnFormNewUser").addEventListener("click", () => {
    const usersObtained = obtainUsers();

    let newFirstName = document.getElementById("newFirstName").value;
    let newLastName = document.getElementById("newLastName").value;
    let userName = document.getElementById("userName").value;
    let newUserMail = document.getElementById("newUserMail").value;
    let newUserPass = document.getElementById("newUserPass").value;
    let newUserSpec = document.getElementById("newUserSpec").value;
    let newUserID = Math.max(...usersObtained.map((e) => e.id)) + 1;
    let newUserPrestamosActuales = [];
    let newUserPrestamosHistoricos = [];

    const newUser = new Usuario(userName, newUserID, newFirstName, newLastName, newUserMail, newUserPass, newUserSpec, newUserPrestamosActuales, newUserPrestamosHistoricos);
    const errorUser = userValidation(newUser);
    if (!errorUser) {
        usersObtained.push(newUser);
        localStorage.setItem("usuariosPreCargados", JSON.stringify(usersObtained));
        setCurrentUser(newUser);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'La cuenta ha sido creada con éxito!',
            showConfirmButton: false,
            timer: 2000
        }).then;
        window.location.replace("/sections/userindex.html");

    } else {
        userValidation(newUser);
    }

});
