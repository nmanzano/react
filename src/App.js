import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
// import Radium, {StyleRoot} from 'radium'

class App extends Component {
  state = {
    persons: [
      { id: 'Inon1', name: 'Max', age: 28 },
      { id: 'Inon2', name: 'Manu', age: 29 },
      { id: 'Inon3', name: 'Stephanie', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   // console.log('This works')
  //   //DON'T USE THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({persons: [
  //     { name: newName, age: 28 },
  //     { name: 'Manu', age: 29 },
  //     { name: 'Stephanie', age: 27 },
  //   ]
  // })
  // }


  nameChangeHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({
      persons: persons

      // persons: [
      //   { name: 'Max', age: 28 },
      //   { name: event.target.value, age: 29 },
      //   { name: 'Stephanie', age: 26 },
      // ]
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons})
  }
  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
      console.log('this works');
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })
        }
          {/* <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")} changed={this.nameChangeHandler}> My Hobbies: Racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/> */}
        </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <=2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      // <StyleRoot>
      <div className="App">  {/* this adds css style */}
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}> This is really working! </p>
      <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
      {persons}
      {/* {
        this.state.showPersons ?
        <div>
          <Person  name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Max!")} changed={this.nameChangeHandler}> My Hobbies: Racing </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
        </div> : null
      } */}


    </div>
  // </StyleRoot>
    );
    // return React.createElement('div', null, 'h1', 'Hi, I\'m a React App!!!') takes h1 to mean font
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'))
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?')) //this adds style
  }
}

export default App; // TODO: Radium (App)
