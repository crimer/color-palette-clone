import { useStore } from 'effector-react'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Palette } from '../../fratures/index'
import { $isLoading, $paletteStore, getPaletts } from './model'

export const HomePage = () => {
	const paletts = useStore($paletteStore)
	const loading = useStore($isLoading)

	useEffect(() => {
		getPaletts()
	}, [])

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : (
				<PalettsList>
					{paletts.map(p => (
						<NavLink to={`/palette/${p.id}`} key={p.id}>
							<Palette {...p} />
						</NavLink>
					))}
				</PalettsList>
			)}
		</>
	)
}
export default ViewPage

const PalettsList = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 20px;
`
