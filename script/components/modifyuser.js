import { obtainCurrentUser, obtainUsers } from "./sessioncheck.js";
import { userValidation } from "./usersvalidation.js";
import { setCurrentUser } from "./setcurrentuser.js";
window.addEventListener("DOMContentLoaded", displayUserInfo());
function displayUserInfo() {
    const { userName, nombre, apellido, email } = obtainCurrentUser();
    document.getElementById("changedUserName").value = userName;
    document.getElementById("changedFirstName").value = nombre;
    document.getElementById("changedLastName").value = apellido;
    document.getElementById("changedUserMail").value = email;
};

function modifyUserInfo() {
    const changedUserName = document.getElementById("changedUserName").value;
    const changedFirstName = document.getElementById("changedFirstName").value;
    const changedLastName = document.getElementById("changedLastName").value;
    const changedUserMail = document.getElementById("changedUserMail").value;
    const changedUserPass = document.getElementById("changedUserPass").value;
    let users = obtainUsers();
    let currentUser = obtainCurrentUser().id;
    let user = users.find((e) => e.id === currentUser);
    user.userName = changedUserName;
    user.nombre = changedFirstName;
    user.apellido = changedLastName;
    user.email = changedUserMail;
    if (changedUserPass != "") {
        user.password = changedUserPass
    };
    const userInvalid = userValidation(user);
    if (!userInvalid) {
        localStorage.setItem("usuariosPreCargados", JSON.stringify(users));
        setCurrentUser(user);
    } else {
        document.getElementById("alertTextInvChange").innerHTML = userInvalid;
    }
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Usuario modificado correctamente',
        showConfirmButton: false,
        timer: 2000
    });//Este alert puede no funcionar si el current user no está grabado
}
document.getElementById("btnEditUser").addEventListener("click", modifyUserInfo);

// que ya tiene y otra que los modifique y guarde.

