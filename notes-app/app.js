// ? Taking Input from users using Command Line Interface(CLI)

// !  process.argv - its a method - It is used to read the argument and it returns an array

//! [
// console.log(process.argv[2])
// ? We will be able to access the 3rd argument that we gave in terminal [ 2 is the index no.]
        // ! or
// const ag = process.argv[2] 
// * This returns an array
// ! ]
//console.log(ag, 'Sharma');  // ag = the 3rd ardument we write in the terminal
//! in terminal write --> node app.js Kavya --> o/p -> all arguments including my name

const yargs = require('yargs');
const func = require('./func.js');

// console.log(process.argv); // gives o/p as array
// console.log('');
// console.log(yargs.argv); // makes argument accessing easy


// * Commands in a common Note Taking App - Add, Delete, Read, List

// Diffference: Command (add)[gives direct commands] and  Option (--Option)[gives run time options]

// * Creating a custom Command using yargs
// ? Command - sets the command name.
// ? Describe - adds description to our command.
// ? Handler - It is a function and tells what happens when the command is executed
// ? builder - enables us to create options


// ? Add a Note Command
yargs.command({
    command: 'add',
    describe: 'Add a New Note',
    builder: {
        title: {
            describe: 'Note Title', // description of the title object
            demandOption: true, //command wont be accepted with an empty title field, its like the required(*) fields in any form
            type: 'string' // default type is "Boolean"-- this is used to define the desired o/p type[conversion from boolean to string]
        },
        body: {
            describe: 'Note Content', // description of the  body object
            demandOption: true, //command wont be accepted with an empty title field, its like the required(*) fields in any form
            type: 'string' // default type is "Boolean"-- this is used to define the desired o/p type[conversion from boolean to string]
        }
    },
    handler: (argv) => { //helps access/use the options we made
      func.addNote(argv.title, argv.body) //calling the addNote func fron func.js file
      
      // console.log ('Adding a new note - ', argv.title) // (or) console.log('Adding a new note - ') // If i wanna sue this we write argv.title --> coz I wanna access it 
      // * so now in console it'll let you write the title , Amd it'll display the title
      //  console.log(`Title - ${argv.title}`) // used to directly writing variables in yout string 
      //  console.log(`Content - ${argv.body}`)
      // fs.writeFileSync('notes.txt',`Title - ${argv.title}\nBody - ${argv.body}`) // ?creates a new
      // ? we're making a new file and sending our data there 
    }
})

// ? Read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
    // console.log('Reading a note-',argv.title)
        func.readNote(argv.title)
    }
})

// ? Remove a note
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        // console.log('Removing a note-',argv.title) 
        func.removeNote(argv.title)
    }
})

// ? List all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: () => {
        // console.log('Listing all notes')
        func.listNotes()
    }
})

 // console.log(yargs.argv) // or
yargs.parse()