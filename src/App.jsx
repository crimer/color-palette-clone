import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './fratures/index'
import MainPage from './pages/view/ViewPage'
import DetailPage from './pages/detail/DetailPage'
import styled from 'styled-components'
import { Container } from './global-styles'
import {ReactComponent as Logo} from './assets/svg/color-palette-logo.svg'

export const App = () => {
	return (
		<div className="App">
			<Header />
			<MainSection>
				<MainInner>
          <Logo/>
					<Switch>
						<Route path="/palette/:paletteId" component={DetailPage}/>
						<Route exact path="/" component={MainPage}/>
					</Switch>
				</MainInner>
			</MainSection>
		</div>
	)
}

const MainSection = styled.div`
	background-color: #fdfdfd;
  padding-top: 60px;
  height: 100vh;
`
const MainInner = styled(Container)`
	padding: 20px 0;
`
