import { usuariosArray } from "../data/usuariosarray.js";

export function obtainUsers() {
    const usuariosArrayJSON = localStorage.getItem("usuariosPreCargados");
    return usuariosArrayJSON != undefined ? JSON.parse(usuariosArrayJSON) : usuariosArray;
}

export function obtainCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
};
