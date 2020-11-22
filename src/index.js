import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom"
import Details from './Details'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/details/:id">
          <Details />
      </Route>
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
