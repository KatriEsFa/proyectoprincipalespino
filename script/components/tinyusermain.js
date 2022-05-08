//presonality Components
const { nombre, apellido, especialidad } = JSON.parse(localStorage.getItem("currentUser"));
document.getElementById("userNameTiny").innerHTML = nombre + " " + apellido;
document.getElementById("userRolTiny").innerHTML = especialidad;


//log out function
document.getElementById("logOutBtn").addEventListener("click", () => {
    localStorage.removeItem("currentUser")
    window.location.replace("/index.html");
})

