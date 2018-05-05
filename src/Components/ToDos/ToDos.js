import React from 'react'

import TaskComponent from './TaskComponent'

export class ToDos extends React.Component {
	render() {
		return (
			<div>
				<h2>TO DOS</h2>
				{this.props.listAgendas ?
					this.props.listAgendas.map((agenda) => {return agenda.status ==='TODOS' ?
						<TaskComponent key={agenda.id } task={agenda}  nextStation = {this.props.nextStation}/>:<div  key={agenda.id}/>})
					: <div/>
				}
			</div>
		)
	}
}

export default ToDos