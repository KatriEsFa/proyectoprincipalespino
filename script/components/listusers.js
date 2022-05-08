import { obtainUsers } from "./sessioncheck.js";
import { deleteUser } from "./userdelete.js";


window.addEventListener("DOMContentLoaded", userListViewer);
function userListViewer() {
    const users = obtainUsers();
    for (let i = 0; i <= users.length - 1; i++) {
        const { userName, id } = users[i];
        let divUser = document.createElement("div");
        divUser.id = "usersListDiv" + id;
        divUser.innerHTML =
            `
            <div> ${userName} </div> <button id="deleteButton${id}">Borrar Usuario</button>
            `
        document.getElementById("usersList").appendChild(divUser);
        document.getElementById("deleteButton" + id).addEventListener("click", () => {
            Swal.fire({
                title: `¿Estás seguro que desea borrar a ${userName}?`,
                text: "Este proceso no es reversible",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, borrar!'
            }).then((result) => {
                console.log(result)
                if (result.isConfirmed) {
                    deleteUser(id);
                    Swal.fire(
                        'Borrado!',
                        `El usuario ${userName} fue borrado.`,
                        'success'
                    )
                    document.getElementById("usersListDiv" + id).outerHTML = "";
                };
            })
        });
    }
}