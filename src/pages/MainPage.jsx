import React, { useEffect } from 'react'
import { Palette } from '../components/index'
import styled from 'styled-components'
import { useStore } from 'effector-react'
import { $paletteStore, getPaletts } from '../store/state'
import { Link } from 'react-router-dom'

const MainPage = () => {
	const paletts = useStore($paletteStore)

	useEffect(() => {
		getPaletts()
	}, [])


	return (
		<>
			<PalettsList>
				{paletts.map(p => (
          <Link to={`/palette/${p.id}`}  key={p.id}>
					  <Palette {...p} />
          </Link>
				))}
			</PalettsList>
		</>
	)
}
export default MainPage

const PalettsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`
