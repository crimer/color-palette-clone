import { useStore } from 'effector-react'
import React from 'react'
import { useParams } from 'react-router-dom'
import { $paletteStore, getPalette } from '../home/model'

const PalettePage = ({match}) => {
	const { paletteId } = useParams()

	React.useEffect(() => {
    // paletteLoading(parseInt(match.params.paletteId, 10))
	}, [paletteId])

	return (
		<div>
			<p>
				<strong>Palette: </strong>
				{/* <code>{pallete}</code> */}
			</p>
			{/* <Palette {...pallete} /> */}
		</div>
	)
}
export default PalettePage
