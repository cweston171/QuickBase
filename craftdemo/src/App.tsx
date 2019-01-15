import React, { Component } from 'react'
import logo from './logo.svg'
import FieldBuilderUI from './components/builder-form'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          Chase Weston
          <br/>
          <span style={{fontSize: '.75em'}}>Senior Frontend Engineer | Craft Demo</span>
        </header>
        <FieldBuilderUI settings={undefined} title={'Field Builder'} />
      </div>
    );
  }
}

export default App;
