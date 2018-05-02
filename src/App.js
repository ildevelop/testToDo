import React, {Component} from 'react';
import logo from './logo.svg';
import {connect} from 'react-redux'
import './App.scss';
import Done from "./Components/Done/Done";
import InProcess from "./Components/InProcess/InProcess";
import ToDos from "./Components/ToDos/ToDos";
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Popover from 'material-ui/Popover';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class App extends Component {

  state = {
    open: false,
  };
  handleClickButton = () => {
    this.props.addAgenda;
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to TO-DO list</h1>
        </header>
        <p>open agendas: {this.props.agenda}</p>
        <Button  onClick={this.handleClickButton} variant="raised" color="primary">
          Add Agenda
          <AddIcon />
        </Button>
        <Popover
          open={this.state.open}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Paper  elevation={4}>
            <Typography variant="headline" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography component="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </Paper>
        </Popover>
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
