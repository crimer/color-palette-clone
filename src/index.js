import React from 'react'
import ReactDOM from 'react-dom'
import './global-styles.js'
import { App } from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import { GlopalStyles } from './global-styles.js'


ReactDOM.render(
	<React.StrictMode>
		<Router>
      <GlopalStyles/>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
)
