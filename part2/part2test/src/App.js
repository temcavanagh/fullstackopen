import React, { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Notification from './components/Notification'
import Footer from './components/Footer'

const App = ( props ) => {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)
    const [errorMessage, setErrorMessage] = useState('some error happened...')

    useEffect (() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setNotes(initialNotes)
            })
    }, [])

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            //id: notes.length + 1,
        }

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote))
                setNewNote('')
            })                         
      }
    
    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll                             
        ? notes
        : notes.filter(note => note.important === true)

    const toggleImportanceOf = (id) => {
        const url = `http://localhost:3001/notes/${id}`
        // changed from `http://localhost:3001/notes/${id}` for heroku deployment
        const note = notes.find(n => n.id === id)
        const changedNote = { ...note, important: !note.important }

        noteService
            .update(id, changedNote).then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote))
            })
            .catch(error => {
                setErrorMessage(
                    `The note '${note.content}' was already deleted from the server`
                )
                setTimeout(() => {
                    setErrorMessage(null)
                }, 5000)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    return(
        <div>
            <h1>Notes</h1>
            <Notification message={errorMessage} />
            <div>                                           {/* Show important */}
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>                                            {/* Display notes list */}
                {notesToShow.map(note =>
                    <Note 
                        key={note.id} 
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>                       {/* addNote function as event handler */}
                <input 
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>         {/* save button */}
            </form>
            <Footer />
        </div>
    )
}
export default App