import React, { useState } from 'react'
import Note from './components/Note'

const App = ( props ) => {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] = useState(true)

    const addNote = (event) => {                            {/* defines addNote event handler; event parameter calls event handler function */}
        event.preventDefault()
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id: notes.length + 1,
        }
        setNotes(notes.concat(noteObject))
        setNewNote('')                            
      }
    
    const handleNoteChange = (event) => {                   {/* event handler syncs inputs w component state */}
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll                             
        ? notes
        : notes.filter(note => note.important === true)

    return(
        <div>
            <h1>Notes</h1>
            <div>                                           {/* Show important */}
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all' }
                </button>
            </div>
            <ul>                                            {/* Display notes list */}
                {notesToShow.map(note =>
                    <Note key={note.id} note={note} />
                )}
            </ul>
            <form onSubmit={addNote}>                       {/* addNote function as event handler */}
                <input 
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>         {/* save button */}
            </form>
        </div>
    )
}
export default App