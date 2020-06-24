import React from 'react'
import styled from 'styled-components'

const Palette = ({ name, likes, createdAt, colors }) => {
	return (
		<PaletteInner>
      <PaletteHeader>{name}</PaletteHeader>
			<PaletteColors>
				{colors.map((color, i) => (
					<ColorInner key={i} color={color}></ColorInner>
				))}
			</PaletteColors>
			<PaletteFooter>
				<PaletteLikes>❤ {likes}</PaletteLikes>
				<PaletteDate>{createdAt}</PaletteDate>
			</PaletteFooter>
		</PaletteInner>
	)
}
export default Palette

const PaletteInner = styled.div`
	box-sizing: border-box;
	cursor: pointer;
	background-color: #fff;
	padding: 15px;
	width: 100%;
	border-radius: 20px;
	display: flex;
	flex-flow: column nowrap;
	height: 320px;
	box-shadow: 0 10px 40px -10px rgba(0, 64, 128, 0.2);
`
const PaletteColors = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 20px;
`
const PaletteFooter = styled.div`
	margin-top: 10px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
`
const PaletteHeader = styled.div`
  font-size: 20px;
	margin-bottom: 10px;
`
const PaletteLikes = styled.button`
	color: red;
	width: 75px;
	height: 35px;
	background-color: #fff;
	border: 2px solid #eee;
	border-radius: 20px;
	outline: none;
	cursor: pointer;
`
const PaletteDate = styled.div``

const ColorInner = styled.div`
  width: 100%;
  height: 25%;
  background-color: ${props => props.color ? props.color : '#eee'};
`;
