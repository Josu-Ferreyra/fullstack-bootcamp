import {useState} from 'react'
import Button from './Button'
import Statistics from './Statistics'

function App() {
  // STATES
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // EVENT HANDLING
  const buttonHandle = (e) => {
    const name = e.target.name
    switch (name) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break
      default:
        return
    }
  }

  // CALCS
  const total = good + neutral + bad
  const avg = (good - bad) / total
  const percentGood = `${(good / total) * 100} %`
  
  // STATISTICS
  const stats = {
    good : good,
    neutral : neutral,
    bad : bad,
    all : total,
    average : avg,
    positive : percentGood
  }

  return (
    <div>
      <h2>give feedback</h2>
      <Button name={"good"} onClick={buttonHandle}/>
      <Button name={"neutral"} onClick={buttonHandle}/>
      <Button name={"bad"} onClick={buttonHandle}/>
      <h2>statistics</h2>
      <Statistics stats={stats} /> 
    </div>
  );
}

export default App;
