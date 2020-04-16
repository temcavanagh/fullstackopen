import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => {
  return (
    <button onClick={props.passClick}>
      {props.text}
    </button>
  )
}

const Statdisplay = ({ text, value }) => {
  return(
    <>
      <tr>
        <td>{text}: </td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Stats = ({good, neutral, bad}) => {
  let all = (good + neutral + bad)
  let avg = ((good - bad) / all)
  let pos = ((good / all) * 100)

  if (all === 0){
    return(
      <div>
        <h2>Statistics</h2>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <Statdisplay text="Good" value={good}/>
          <Statdisplay text="Neutral" value={neutral}/>
          <Statdisplay text="Bad" value={bad}/>
          <Statdisplay text="All" value={all}/>
          <Statdisplay text="Average" value={avg}/>
          <Statdisplay text="Positive" value={`${(pos)}%`}/>
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        <Button passClick={handleGood} text="Good"/>
        <Button passClick={handleNeutral} text="Neutral"/>
        <Button passClick={handleBad}text="Bad"/>
        <Stats good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)
