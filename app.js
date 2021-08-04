const validator = require('validator');
const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs');

yargs.version('1.1.0');

yargs.command({
    command:'add',
    derscribe:'Add a new note',
    builder: {
        title: {
            derscribe: 'Note title',
            demandOption: true,
            type: 'string',
        },
        body:{
            describe: 'Note body', 
            demandOption: true,
            type: 'string',
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    derscribe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'listNotes',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()