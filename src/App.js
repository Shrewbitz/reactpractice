
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super() 

      this.state = {
        monsters: [
    
        ]
       }
    
  } 

  componentDidMount() {
    // fetch('http://jsonplaceholder.typicode.com/users')
    // .then(response => response.json())
    // .then(users => this.setState({monsters: users}))
    let x = async () => {
      const users = await fetch('http://jsonplaceholder.typicode.com/users')
      const user = await users.json()
      this.setState({monsters: user})
    }
    x()
  }


  render() {
  return (
        <div className="App">
          <CardList name="Sammy"/>
          {
            this.state.monsters.map(monster => <h1 key={monster.id}> {monster.name} </h1>)
          }
        </div>
      );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           whats up utubedd
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
