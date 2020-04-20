import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({passClick, text}) => {
  return (
    <button onClick={passClick}>{text}</button>
  )
}

const MostVotes = ({anecdotes, votes}) => {
  let maxArr = votes.indexOf(Math.max(...votes))
  return(
    <div>
      <h2>Anecdote with the most votes</h2>
      <p1>{anecdotes[maxArr]}</p1>
      <p1> has {votes[maxArr]} votes!</p1>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const selectNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))
  const newVote = () => setVotes(votes.map((voteNum, curr) => (curr === selected)? voteNum + 1 : voteNum))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <td>
      {props.anecdotes[selected]}
      </td>      
      <Button passClick={newVote} text="Vote"/>
      <Button passClick={selectNext} text="Next anecdote"/>
      <MostVotes anecdotes={anecdotes} selected={selected} votes={votes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)