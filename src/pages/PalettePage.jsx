import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Palette } from '../components'
import { $paletteStore } from '../store/state'
import { useStore } from 'effector-react'

const PalettePage = () => {
	const { paletteId } = useParams()
	const paletts = useStore($paletteStore)
	const palette = paletts.find(p => p.id == paletteId)

	return (
		<div>
			<Palette {...palette} />
		</div>
	)
}
export default PalettePage
