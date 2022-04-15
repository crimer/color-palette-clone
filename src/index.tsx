import React from 'react'
import ReactDOM from 'react-dom'
import './global-styles.js'
import { App } from './App'
import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyles } from './styles/global-styles.js'


ReactDOM.render(
	<React.StrictMode>
		<Router>
      <GlobalStyles/>
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
)
