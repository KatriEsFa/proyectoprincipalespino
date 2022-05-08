export class Usuario {
    constructor(userName, id, nombre, apellido, email, password, especialidad, prestamosActuales, prestamosHistorico) {
        this.userName = userName;
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.especialidad = especialidad;
        this.prestamosActuales = prestamosActuales;
        this.prestamosHistorico = prestamosHistorico;
    }
}