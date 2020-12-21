// ? requirung/ importing fs Module
const fs = require('fs');

// ? requiring chalk Module
const chalk = require('chalk');

// ! Functions - Add, Read, Remove, List

// ? Function to add a note
const addNote = (title, body) => {
    const notes = load() // calling the load func and loading all the available notes
   
        const noteExists = notes.filter((note) => {
            return note.title === title // filter will only return when value is true
        }) // To prevent different notes with same name use the method "filter"
       
        if (noteExists.length === 0) { // since length==0 it means that the note doesn't exist
            notes.push(
                {
                    title, //object1
                    body // object2
                }
            ) // pushing the title and body here
            save(notes) // function call
            console.log(chalk.green.inverse(' SUCCESS ')) // adds a coloured backgroung colour for the text
            console.log("New Note Added")
        } else {
            console.log(chalk.red.inverse(' ERROR '))
            console.log('Note Title already exists')
        }
}


// ? Function to read a note
const readNote = (title) => {
    const notes = load()
    const noteToRead = notes.filter((note) => {
        return note.title === title
    })
    if (noteToRead.length !== 0) {
        console.log(chalk.blueBright.inverse(' Your Note '))
        console.log(`Title - ${noteToRead[0].title}`)
        console.log(`Body - ${noteToRead[0].body}`)
    } 
    else {
        console.log(chalk.red.inverse(' ERROR '))
        console.log('Note Does not exist! Try another Title')
    }
 }

// ? Function to remove a note
const removeNote = (title) => {
    const notes = load()
    const noteToKeep = notes.filter((note) => {
        return note.title !== title
    })
    if (noteToKeep.length < notes.length) {
        save(noteToKeep)
        console.log(chalk.green.inverse(' SUCCESS '))
        console.log('Note has been Removed')
    } 
    else {
        console.log(chalk.red.inverse(' ERROR '))
        console.log('Note Does not exist')
    }
 }



// ? Function to list all notes
const listNotes = () => {
    const notes = load()
    if (notes.length !== 0) {
        console.log(chalk.blue.inverse(' All Notes '))
        console.log('')
        notes.forEach((note) => {
            console.log(`Title - ${note.title}`)
            console.log(`Body - ${note.body}`)
            console.log('')
        });
    } 
    else {
        console.log('Error')
        console.log('No notes available')
    }
}



// ? function to Load our file
const load = () => {
    try {
        const dataJSON = fs.readFileSync('notes.json').toString()
        const data = JSON.parse(dataJSON)
        return data // if file exists note will be returned
    } catch (error) {
        return [] // if no file then empty array will be returned
    }
 }

// ? function to save our notes
const save = (notes) => {
    const dataJSON = JSON.stringify(notes) // converting data to JSON
    fs.writeFileSync('notes.json', dataJSON) //dataJSON if the place from where the data has to be taken from
 }

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
 }