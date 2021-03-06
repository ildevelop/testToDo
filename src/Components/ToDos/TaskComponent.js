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
import {connect} from "react-redux";
import './ToDos.scss'

class TaskComponent extends React.Component {
	handleClick = () => {
		if (this.props.nextStation === 'InProcess')
			this.props.hendleInProcess(this.props.task)
		else if (this.props.nextStation === 'Done')
			this.props.hendleDone(this.props.task)
		else
			this.props.hendleDelete(this.props.task)
	}

	render() {
		return (
			<div className="newTask">
				<ExpansionPanel>
					<ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
						<Typography>{this.props.task.title}</Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						{this.props.nextStation === 'InProcess'?
							<Typography>
								Let`s start work!! :)
							</Typography>:
							<Typography>
								wanna FINISH? )
							</Typography>
						}

						{
							this.props.nextStation === 'Done' ?
								<Button size="small" onClick={this.handleClick}style={{color: "green"}}>
									{this.props.nextStation}
										<Done/>
								</Button> :
								<Button size="small"  onClick={this.handleClick} color="primary" >
									{this.props.nextStation}
									<Work/>
								</Button>
						}
					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}

const mapStateToProps = () => ({});

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators(mainActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)