import React from 'react'

function F1(props) {
  const [x, setX] = React.useState(5)
  return (
    <div>
        <h1>Codecamp Thailand</h1>
        <h3>Hello, {props.name}</h3>
        <h3>Lucky Number = {x}</h3>
        <hr />
    </div>
  )
}

export default F1