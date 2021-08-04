const fs = require('fs');


const getNotes = () => {
    return "Notes are here";
}

const addNote = (title, body) => {

    const notes = loadNotes();
    
    const duplicateNotes = notes.filter((note) => title === note.title
    )

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body,
        })
        saveNotes(notes);
    }
    else{
        console.log('Note title taken');
    }
}

const saveNotes = (notes) => {

    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson);
}

const loadNotes = () => {

    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    }
    catch(e){
        return [];
    }
}

const removeNote = (title) =>
{
    const notes = loadNotes();
    const containsNote = notes.filter((note) => {
        return note.title !== title;
    })
    
    if(containsNote.length === notes.length)
    {
        console.log('No notes removed');
    }
    else{
        saveNotes(containsNote);
        console.log('Notes removed');
    }
}
const listNotes = () => {

    const notes = loadNotes()
    notes.forEach(note => {
        console.log(note.title)
    });
}
module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
