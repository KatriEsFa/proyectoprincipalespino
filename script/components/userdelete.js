import { obtainUsers } from "./sessioncheck.js";
//desplegar una lista de usuarios en el html
//c/user boton de delete y boton de modi
export function deleteUser(idUser) {
    console.log(idUser)
    let users = obtainUsers();
    users = users.filter((e) => e.id != idUser);
    localStorage.setItem("usuariosPreCargados", JSON.stringify(users))
}


