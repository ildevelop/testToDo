import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.scss';
import Done from "./Components/Done/Done";
import InProcess from "./Components/InProcess/InProcess";
import ToDos from "./Components/ToDos/ToDos";
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import {bindActionCreators} from 'redux';
import * as mainActions from './actions/mainActions';

class App extends Component {
	handleClickAddAgenda = () => {
	  console.log('input:::',this.newAgenda.value);
	  this.props.addAgenda(this.newAgenda.value);
    this.newAgenda.value = ''
  };
	handleClickFindAgenda = () => {
		console.log('input:::',this.searchAgenda.value);
		this.props.findAgenda(this.searchAgenda.value);
	};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to TO-DO list</h1>
        </header>
        <p>open agendas: {this.props.agenda}</p>
	      <div>
		      <input type="text" ref = {(input)=> {this.newAgenda = input}}/>
		      <Button  onClick={this.handleClickAddAgenda} variant="raised" color="primary">
			      Add Agenda
			      <AddIcon />
		      </Button>
	      </div>
	      <div>
		      <input type="text" ref = {(input)=> {this.searchAgenda = input}}/>
		      <Button  onClick={this.handleClickFindAgenda} variant="raised" color="primary">
			      Filter
			      <AddIcon />
		      </Button>
	      </div>



        <div className="mainPage">
          <ToDos listAgendas = {this.props.allAgendas}/>
          <InProcess/>
          <Done/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  agenda: state.agenda,
	allAgendas:state.allAgendas.filter(aganda => aganda.title.includes(state.filterAgenda))
});

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators(mainActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
