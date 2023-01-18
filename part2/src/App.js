import { useState } from 'react';
import Note from './components/Note'

function App(props) {
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            id: notes.length + 1,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            content: newNote,
        }

        setNotes(notes.concat(noteObject))
        setNewNote('')
    }

    const handleNoteChange = (event) => {
        console.log(event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll ? notes : notes.filter(note=>note.important)

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>Toggle</button>
      <ul>
        {notesToShow.map(note => 
            <Note key={note.id} note={note}/> 
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default App;