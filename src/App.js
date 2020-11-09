
import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';
import './App.css';

class App extends Component {
  constructor() {
    super() 

      this.state = {
        monsters: [
    
        ],
        searchField: ''
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
    const {monsters, searchField} = this.state 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
      <h1>Rolodex</h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({searchField: e.target.value})}
      />
      <CardList monsters={filteredMonsters}/>
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
