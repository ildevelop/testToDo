import React from 'react'
import './ToDos.scss'

export class ToDos extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="mainToDO">
        <h2>TO DOS</h2>
        {this.props.listAgendas.map((agenda, i) => <div className="newTask" key={i}>{agenda.title}</div>
        )}
      </div>
    )
  }
}

export default ToDos