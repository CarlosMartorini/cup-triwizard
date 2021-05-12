import './App.css';
import { Component } from 'react';
import Student from './components/Student';

class App extends Component {

  state = {
    students: [],
    url: 'http://hp-api.herokuapp.com/api/characters/students',
    cards: [],
  };

  getStudents = () => {
    const { url } = this.state;
    fetch(url).then((response) => response.json())
    .then((response) => this.setState({students: response}));
  }

  randomStudent = (length) => {
    return Math.floor(Math.random() * (length));
  }

  addRandomStudents = () => {
    const { students } = this.state;
    const gryffindor = students.filter(student => student.house === 'Gryffindor');
    const hufflepuff = students.filter(student => student.house === 'Hufflepuff');
    const slytherin = students.filter(student => student.house === 'Slytherin');
    const ravenclaw = students.filter(student => student.house === 'Ravenclaw');
    this.setState({
      cards: [ 
      gryffindor[this.randomStudent(gryffindor.length)], 
      hufflepuff[this.randomStudent(hufflepuff.length)], 
      slytherin[this.randomStudent(slytherin.length)],
      ravenclaw[this.randomStudent(ravenclaw.length)]
    ]})
  }

  componentDidMount = () => {
    this.getStudents();
  }

  render() {
    const { cards } = this.state;
      return (
        <div className="App">
        <header className="App-header">
          <h1>Triwizard Cup</h1>
          <button className ='button' onClick={this.addRandomStudents}>Generate Champions!</button>
        </header>
        <main className='main'>
          {
            cards.map((student, index) => (
              <Student key={index} student={student}/>
            ))
          }
        </main>
      </div>
    );
  }
}

export default App;
