import { useState } from "react";

const _ = require('lodash');


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // const anecdotes_votes = anecdotes.map(anecdote => ({0:anecdote}))

  const [selected, setSelected] = useState(0)
  const [upvotes, setUpvote] = useState(new Uint8Array(anecdotes.length))

  const upvote = () =>{
    console.log(selected)
    const new_copy = [...upvotes]
    new_copy[selected] +=1
    setUpvote(new_copy)
    // setUpvote([
    //   ...upvotes,
    //   upvotes[selected] += 1
    // ])
  }

  return(
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br></br>
      has {upvotes[selected]} votes
      <button onClick={upvote}>Vote</button>
      <button onClick={()=>setSelected(_.random(0,anecdotes.length-1))}>Next Anecdote</button>
      <br></br>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[upvotes.indexOf(Math.max(...upvotes))]}</p>
  </div>
  )
}

export default App;