export function setCurrentUser(logedUser) {
    localStorage.setItem("currentUser", JSON.stringify(logedUser));
};