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
import {Input} from "material-ui";

class App extends Component {
	handleClickAddAgenda = () => {
		this.props.addAgenda(this.newAgenda.value);
		this.newAgenda.value = ''
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to TO-DO list</h1>
				</header>
				<p>open agendas: {this.props.agenda}</p>
				<div className="newInputs">
					<Input
						defaultValue=""
						placeholder="create new task"
						inputRef={(input) => {
							this.newAgenda = input
						}}
						inputProps={{
							'aria-label': 'Description',
						}}
					/>
					<Button size="small" onClick={this.handleClickAddAgenda} color="primary">
						Add Agenda
						<AddIcon/>
					</Button>
				</div>

				<div className="mainPage">
					<ToDos listAgendas={this.props.allAgendas} nextStation = "InProcess"/>
					<InProcess listAgendas={this.props.allAgendas} nextStation = "Done"/>
					<Done listAgendas={this.props.allAgendas} nextStation = "Delete"/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	agenda: state.agenda,
	allAgendas: state.allAgendas
});

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators(mainActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
