import React from 'react'
import TaskComponent from './../ToDos/TaskComponent'

export class InProcess extends React.Component {
	render() {
		return (
			<div>
				<h2>IN PROCESS</h2>
				{this.props.listAgendas ?
					this.props.listAgendas.map((agenda) => {return agenda.status ==='INPROCESS' ?
            <TaskComponent key={agenda.id} task={agenda} nextStation = {this.props.nextStation}/>:<div  key={agenda.id}/>})
					: <div/>
				}
			</div>
		)
	}
}

export default InProcess