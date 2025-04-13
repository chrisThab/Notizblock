
let noteTitle = []
let notes = [];
let trashNotes = [];
let trashNoteTitles = [];

function addNote() {
    let noteInputRef = document.getElementById('noteInput');
    let noteInput = noteInputRef.value;
    let noteTitleRef = document.getElementById('noteTitle');
    let titleInput = noteTitleRef.value;

    if (noteInputRef.value != "" && noteTitleRef.value != ""){
        notes.push(noteInput);
        noteTitle.push(titleInput);
    }
    renderNotesTitle();
    renderNotes();

    noteTitleRef.value = "";
    noteInputRef.value = "";
}

function addNoteAgain(indexNote) {
    let deletedNote = trashNotes.splice(indexNote, 1);
    notes.push(deletedNote[0]);
    let trashNoteTitle = trashNoteTitles.splice(indexNote, 1);
    noteTitle.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = noteTitle.splice(indexNote, 1);
    trashNoteTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function noteDone(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.pop(trashNote[0]);
    let trashNoteTitle = noteTitle.splice(indexNote, 1);
    trashNoteTitles.pop(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
    let deletedNote = trashNotes.splice(indexTrashNote, 1);
    trashNotes.pop(deletedNote);
    localStorage.removeItem(indexTrashNote);
    renderNotes();
    renderTrashNotes();
}

function saveToLocalStorage(){
    localStorage.setItem("noteTitle", JSON.stringify(noteTitle));
    localStorage.setItem("notes", JSON.stringify(notes));
}

function getFromLocalStorage(){
    if (localStorage != ""){
        let dataTitle = JSON.parse(localStorage.getItem('noteTitle'));
        noteTitle = dataTitle;
        renderNotesTitle();

        let data = JSON.parse(localStorage.getItem('notes'));
        notes = data;
        renderNotes();        
    }
}