let list = [];

function removeValue() {
    let select = document.getElementById("constructor");
    list.splice(list.length - select.selectedIndex - 1, 1);
    updateLocalStorage(list);
}

function addValue() {
    list.push(document.getElementById('list_input').value);
    updateLocalStorage(list);
    changeHTML(list);
}

function updateLocalStorage(entity) {
    localStorage.setItem('entity', JSON.stringify(entity));
}

function getFromLocalStorage() {
    localStorageEntity = localStorage.getItem('entity');
    if (localStorageEntity) {
        list = JSON.parse(localStorageEntity);
        createHTML(list);
    }
}

getFromLocalStorage();
function changeHTML(list) {
    html =
    `<option value=$list.length>${list[list.length - 1]}</option>`
    document.getElementById("constructor").insertAdjacentHTML("afterbegin", html);
}

function createHTML(list) {
    html = ``
    for (let i = list.length - 1; i > 0; i--) {
        html +=
        `<option value=$i>${list[i]}</option>`
    }
    document.getElementById("constructor").insertAdjacentHTML("afterbegin", html);
}