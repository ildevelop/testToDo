import React from 'react'

export class ToDos extends React.Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div style={{display: "flex"}}>
        <h2>Hello Todos</h2>
        {this.props.listAgendas.map((agenda ,i) => <p key ={i}>{agenda.title}</p>
        )}

      </div>
    )
  }
}

export default ToDos