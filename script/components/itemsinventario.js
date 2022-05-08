
window.addEventListener('DOMContentLoaded', showItems);
function showItems() {
    const itemsList = document.getElementById("itemsList");
    fetch("/script/data/arrayitems.json")
        .then((response) => response.json())
        .then((data) => (

            data.forEach(element => {
                const li = document.createElement("li");
                li.classList.add("item")
                li.innerHTML =
                    `
                    <h3>${element.nombreItem}</h3>
                    <h4>${element.tipo}</h4>
                
                `
                itemsList.append(li)

            })
        )
        )

}