import React from 'react'
import TaskComponent from './../ToDos/TaskComponent'

export class Done extends React.Component {
	render() {
		return (
			<div>
				<h2>DONE</h2>
				{this.props.listAgendas ?
					this.props.listAgendas.map((agenda) => {return agenda.status ==='DONE' ?
						<TaskComponent key={agenda.id} task={agenda} nextStation = {this.props.nextStation}/>:<div  key={agenda.id}/>})
					: <div/>
				}
			</div>
		)
	}
}

export default Done