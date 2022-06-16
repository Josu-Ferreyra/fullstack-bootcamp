import {useState} from 'react'

function App({anecdotes}) {
  const [random, setRandom] = useState(Math.floor(Math.random() * (anecdotes.length)))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const newRandom = () => {
    // PREVENT REPEAT
    let nuevo
    do {
      nuevo = Math.floor(Math.random() * (anecdotes.length))
    } while (nuevo === random);
    // CREATE THE NEW RANDOM
    setRandom(nuevo)
  }
  const handleVotes = () =>{
    const copy = [...votes]
    copy[random] += 1
    setVotes(copy)
  }
  let mostVotes = 0
  const checkMostVotes = () => {
    let max = 0
    votes.forEach((value,index) => {
      // console.log(value, index)
      if (value > max) {
        max = value
        mostVotes = index
      }
    })
  }

  return (
    <div>
      <h2>Anecdote of the Day</h2>
      <p>{anecdotes[random]}</p>
      <p>has {votes[random]} votes</p>
      <button onClick={handleVotes}>Vote</button>
      <button onClick={newRandom}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      {/*Si llamo desde cualquier funcion no anda y no se porque*/}
      {/*Si lo llamo desde handleVotes no actualiza el Estado WTF*/}
      {checkMostVotes()} 
      <p>{anecdotes[mostVotes]}</p>
      <p>has {votes[mostVotes]} votes</p>
    </div>
  );
}

export default App;