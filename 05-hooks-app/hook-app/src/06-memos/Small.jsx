import React from "react"

export const Small = React.memo(({counter}) => {
  return (
    <small>{counter}</small>
  )
})
