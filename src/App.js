import Application from './Routes/Application/Application.jsx'
import Login from './Routes/Login/Login.jsx'
import { ProtectedRoute } from './Routes/ProtectedRoute.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'

function App () {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path='/' component={Application} />
        <Route exact path='/login' component={Login} />
        <Route path='*' component={() => 'ERROR 404 NOT FOUND'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
