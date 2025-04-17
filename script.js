
// let noteTitle = [];
// let notes = [];
// let trashNotes = [];
// let trashNoteTitles = [];

let allNotes = {
    'notes': [''],
    'noteTitle': [''],
    'trashNotes': [''],
    'trashNoteTitles': ['']
}

function addNote() {
    let noteTitleRef = document.getElementById("noteTitle");
    let titleInput = noteTitleRef.value;
    let noteInputRef = document.getElementById("noteInput");
    let noteInputData = noteInputRef.value;
    
    if (noteInputRef.value != "" && noteTitleRef.value != ""){
        allNotes.noteTitle.push(titleInput);
        allNotes.notes.push(noteInputData);
    }
    saveToLocalStorage();
    renderNotesTitle();
    renderNotes();

    noteTitleRef.value = "";
    noteInputRef.value = "";
}

function addNoteAgain(indexNote) {
    let deletedNote = allNotes.trashNotes.splice(indexNote, 1);
    allNotes.notes.push(deletedNote[0]);
    let trashNoteTitle = allNotes.trashNoteTitles.splice(indexNote, 1);
    allNotes.noteTitle.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteNote(indexNote) {
    let trashNote = allNotes.notes.splice(indexNote, 1);
    allNotes.trashNotes.push(trashNote[0]);
    let trashNoteTitle = allNotes.noteTitle.splice(indexNote, 1);
    allNotes.trashNoteTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function noteDone(indexNote) {
    let trashNote = allNotes.notes.splice(indexNote, 1);
    allNotes.trashNotes.pop(trashNote[0]);
    let trashNoteTitle = allNotes.noteTitle.splice(indexNote, 1);
    allNotes.trashNoteTitles.pop(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

function deleteTrashNote(indexTrashNote) {
    let deletedNote = allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotes.pop(deletedNote);
    localStorage.removeItem(indexTrashNote);
    renderNotes();
    renderTrashNotes();
}

function saveToLocalStorage(){

    localStorage.setItem("noteTitle", JSON.stringify(allNotes.noteTitle));
    localStorage.setItem("notes", JSON.stringify(allNotes.notes));
}

// function getFromLocalStorage(){
//     if (localStorage != ""){
//         let dataTitle = JSON.parse(localStorage.getItem('noteTitle'));
//         allNotes.noteTitle = dataTitle;
//         renderNotesTitle();

//         let data = JSON.parse(localStorage.getItem('notes'));
//         allNotes.notes = data;
//         renderNotes();        
//     }
// }
function getFromLocalStorage() {
    let dataTitle = localStorage.getItem('noteTitle');
    if (dataTitle) {
        allNotes.noteTitle = JSON.parse(dataTitle);
    } else {
        allNotes.noteTitle = [];
    }
    renderNotesTitle();

    let data = localStorage.getItem('notes');
    if (data) {
        allNotes.notes = JSON.parse(data);
    } else {
        allNotes.notes = [];
    }
    renderNotes();
}
function renderAllNotes(){
    renderNotes();
    renderNotesTitle();
    renderTrashNotes();
}