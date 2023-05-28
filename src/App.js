
import './App.css';

const App = () => {
 const Person = (props) => {
  return (
    <>
      <h1>First Name: {props.first}</h1>
      <h2>Last Name: {props.last}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
 }

  return (
    <div className="App">
     <Person 
     first='Anna'
     last="Bagin"
     age='29'
     />
    </div>
  );
}

export default App;
