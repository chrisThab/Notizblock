function getNoteTemplate(indexNote) {
    return`<div class='note'>
        <p class='noteTitle' > - ${noteTitle[indexNote]}</p>
        <p>${notes[indexNote]}</p>
        <div class='btnContainer'><button class='btn' onclick="deleteNote(${indexNote})">X</button>
        <button class='btn' onclick='noteDone(${indexNote})'><img src='./img/checkmark.webp'></button>
        </div></div>`;
}

function getTrashNoteTemplate(indexTrashNote) {
    return`<div class='note'>
        <p class='noteTitle' > - ${trashNoteTitles[indexTrashNote]}</p>
        <p>${trashNotes[indexTrashNote]}</p>
        <div class='btnContainer'>
        <button class='btn' onclick="deleteTrashNote(${indexTrashNote})">X</button>
        <button class='btn' onclick="addNoteAgain(${indexTrashNote})"><img class='btnAgain' src='./img/kreispfeil.avif'></button>
        </div>`;
}