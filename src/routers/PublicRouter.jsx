import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PublicRouter = ({log, component: Component, ...resto}) => {
  return (
    <Route {...resto} component={(props)=>
        log ? <Route to="/" /> : <Component {...props} />
    } />
  )
}

export default PublicRouter