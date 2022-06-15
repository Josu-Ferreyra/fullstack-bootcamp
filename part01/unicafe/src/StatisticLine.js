const StatisticLine = ({name, value}) => {
  // RETURN THE ROW AND COLUMNS
  return(
    <tr>
      <td>{name}</td>
      <td> {value}</td>
    </tr>    
  )
}

export default StatisticLine