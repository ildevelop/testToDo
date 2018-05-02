import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.scss';
import Done from "./Components/Done/Done";
import InProcess from "./Components/InProcess/InProcess";
import ToDos from "./Components/ToDos/ToDos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to TO-DO list</h1>
        </header>
        <p>open agendas: {this.props.agenda}</p>
        <button onClick={this.props.addAgenda}>Add Agenda</button>
        <div className="mainPage">
          <ToDos/>
          <InProcess/>
          <Done/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  agenda: state.get('agenda')
});

const mapDispatchToProps = dispatch => ({
  addAgenda: () => dispatch({type: 'ADD_AGENDA'})
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
