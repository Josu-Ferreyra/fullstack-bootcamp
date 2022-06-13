import Header from './Header'
import Part from './Part';
import Total from './Total';

function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name : 'Fundamentals of React',
    exercises : 10
  }
  const part2 = {
    name : 'Using props to pass data',
    exercises : 7
  }
  const part3 = {
    name : 'State of a component',
    exercises : 14
  }
  return (
    <div>
      <Header course={course} />
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
      <Total parts={[part1, part2, part3]}/>
    </div>
  );
}

export default App;