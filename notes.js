let comment = document.querySelector('.form__comment');
let listNotes = document.querySelector('#list-Notes');
let saveNotes = (dateKey, commItem) => {
    localStorage.setItem(`${dateKey}`, `${commItem}`);
}

let create_Card = (comm, dateKey) => {
    let div = document.createElement('div');
    let p = document.createElement('p');
    let span = document.createElement('span');
    let btn = document.createElement('button');
    span.className = "span";
    span.textContent = dateKey;
    p.textContent = comm;
    btn.textContent = 'Delete';
    p.className = "p";
    div.className = "text";
    btn.className = "delete";

    div.append(span);
    div.append(p);
    div.append(btn);
    return div;

}

let addComm = (list, item) => {
    list.append(item);
}

let clean = (textarea) => {
    textarea.value = '';
}

if (localStorage.length != 0) {
    for (key in localStorage) {
        if (key[0] == 1) {
            addComm(listNotes, create_Card(localStorage.getItem(key), key));
        }
    }
}

const addNotes = () => {
    const date = new Date();
    saveNotes(`1${date}`, comment.value);
    addComm(listNotes, create_Card(comment.value, date));
    clean(comment);

    //deleteNote();  //удаляет из localstorage без перезагрузки, но не корректно
}

//удаляет из localstorage только после перезагрузки страницы
function deleteNote() {
    keys = Object.keys(localStorage);
    let current_notes = document.querySelectorAll('.delete');
    for (let i = 0; i < current_notes.length; i++) {
        current_notes[i].onclick = function () {
            this.parentNode.remove();
            localStorage.removeItem(keys[i]);
        }
    }
}
deleteNote();