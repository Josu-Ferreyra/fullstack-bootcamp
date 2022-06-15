import StatisticLine from "./StatisticLine"

function Statistics({stats}){
  // GET DATA FROM OBJECT
  const names = Object.keys(stats)
  const values = Object.values(stats)
  
  // RENDER IF NO STATS
  if (stats['all'] === 0){
    return(
      <p>No feedback given</p>
    )
  }
  // ELSE
  return(
    <table>
      <tbody>
        <StatisticLine name={names[0]} value={values[0]} />
        <StatisticLine name={names[1]} value={values[1]} />
        <StatisticLine name={names[2]} value={values[2]} />
        <StatisticLine name={names[3]} value={values[3]} />
        <StatisticLine name={names[4]} value={values[4]} />
        <StatisticLine name={names[5]} value={values[5]} />
      </tbody>
    </table>
  )  
}

export default Statistics