import axios from "axios";
import { useState, useEffect } from "react";

import Note from "./components/note";

function App() {
  const [notes, setNotes] = useState([]);
  //I was not setting notes as an array, but as '', that was causing problem in axios response
  const [newNote, setNewNote] = useState("");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfiled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []);

  const toggleNoteImportance = (id) => {
    console.log('importance of ' + id + ' needs to be toggled')
    const noteImportanceToUpdate = notes.find(note=>note.id===id)
    noteImportanceToUpdate.important = !noteImportanceToUpdate.important
    // x[id-1].important = !(x[id-1].important)
    console.log(id)
    console.log('notes', notes)
    const updatedNotes = {
      ...notes,
        [id-1]:noteImportanceToUpdate
    }
      // setNotes(Object.values(updatedNotes));
    console.log(Object.values(updatedNotes))
    axios.put(`http://localhost:3001/notes/${id}`, noteImportanceToUpdate)
    .then(response=>{
      setNotes(Object.values(updatedNotes));
    })
  }


  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      id: notes.length + 1,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      content: newNote,
    };

    axios.post('http://localhost:3001/notes', noteObject)
    .then(response=>{
      console.log(response);
      setNotes(notes.concat(noteObject));
      setNewNote("");
    })
  };

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={() => setShowAll(!showAll)}>Toggle</button>
      <ul>
        {notesToShow.map((note) => (
          //This is not a direct click handler, so toggleimportant is written as a ref () to func
            <Note key={note.id} note={note} toggleNoteImportance={()=>toggleNoteImportance(note.id)}/>
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );

}

export default App;
