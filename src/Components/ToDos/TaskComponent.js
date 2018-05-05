import React from 'react'
import {Button} from "material-ui";
import Done from '@material-ui/icons/Done';
import ExpansionPanel, {
	ExpansionPanelSummary,
	ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Work from '@material-ui/icons/Work';
import {bindActionCreators} from "redux";
import * as mainActions from "../../actions/mainActions";
import {ToDos} from "./ToDos";
import {connect} from "react-redux";
import './ToDos.scss'

class TaskComponent extends React.Component{
	handleClick = () => {
		console.log('click',this.selected);
		this.props.hendleInProcess(this.props.task)
	}
	render(){
		return (
			<div className="newTask">
				<ExpansionPanel>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
						<Typography >{this.props.task.title}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<Typography>
							Let`s start work!! :)
						</Typography>
						<Button size="small" onClick={this.handleClick}color="primary">
							InProcess
							<Work />
						</Button>
						{/*<Button size="small" onClick={this.handleClickFindAgenda} style={{color: "green"}} >*/}
						{/*Done*/}
						{/*<Done />*/}
						{/*</Button>*/}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}
const mapStateToProps = (state) => ({
	agenda: state.agenda,
	allAgendas:state.allAgendas.filter(aganda => aganda.title ==='TODOS')
});

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators(mainActions, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)