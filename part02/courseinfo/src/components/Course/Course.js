import Header from "./Header/Header"
import Content from "./Content/Content"

function Course({course}){
  const {name, parts} = course
  return(
    <div>
      <Header header={name}/>
      <Content parts={parts}/> 
    </div>
  )
}
export default Course