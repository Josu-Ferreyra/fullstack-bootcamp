import Header from "./Header/Header"
import Content from "./Content/Content"

function Course({courses}){
  return(
    <div>
      {courses.map(course => {
        return(
          <div>
            <Header header={course.name}/>
            <Content parts={course.parts}/>
          </div>
        )}
      )}
    </div>
  )
}
export default Course