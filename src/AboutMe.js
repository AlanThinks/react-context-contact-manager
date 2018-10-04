import React from "react"

export default props => {
  return (
    <div>
      <h1>About Page</h1>
      <p>{props.match.params.id}</p>
    </div>
  )
}
