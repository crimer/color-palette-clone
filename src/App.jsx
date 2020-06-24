import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header } from './components/index'
import MainPage from './pages/MainPage'
import PalettePage from './pages/PalettePage'
import styled from 'styled-components'
import { Container } from './styles/global'

export const App = () => {
	return (
		<div className="App">
			<Header />
			<MainSection>
				<MainInner>
					<Switch>
						<Route path="/palette/:paletteId" component={PalettePage}/>
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
`
const MainInner = styled(Container)`
	padding: 20px 0;
`
