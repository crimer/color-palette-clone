import React, { useEffect } from 'react'
import { Header, Palette } from './components'
import styled from 'styled-components'
import { Container } from './styles/global'
import { useStore } from 'effector-react'
import { $paletteStore, getPaletts } from './store/state'

export const App = () => {
	const paletts = useStore($paletteStore)

	useEffect(() => {
		getPaletts()
	}, [])
  console.log(paletts)

	return (
		<div className="App">
			<Header />
			<MainSection>
				<MainInner>
					<PalettsList>
						{paletts.map(p => (
							<Palette key={p.id} {...p}/>
						))}
					</PalettsList>
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
const PalettsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`
