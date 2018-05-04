import React from 'react'
import './../ToDos/ToDos.scss'

export class Done extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div className="mainToDO">
        <h2>DONE</h2>
        {this.props.listAgendas.map((agenda, i) => <div className="newTask" key={i}>{agenda.title}</div>
        )}
      </div>
    )
  }
}

export default Done