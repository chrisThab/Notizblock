
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = '';

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
    saveToLocalStorage();
}

function renderNotesTitle() {
    let titleContentRef = document.getElementById('noteTitle');
    titleContentRef.innerHTML = '';

    for (let indexNoteTitle = 0; indexNoteTitle < noteTitle.length; indexNoteTitle++) {
        titleContentRef.innerHTML += getNoteTemplate(indexNoteTitle);
    }
}

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashContent');
    trashContentRef.innerHTML = '';

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}