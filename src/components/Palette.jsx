import React from 'react'
import styled from 'styled-components'

export const Palette = () => {
	const arr = Array.from(new Array(4).keys())
	return (
		<PaletteInner>
			<PaletteColors>
        {arr.map(k => (
          <Color key={k}></Color>
        ))}
      </PaletteColors>
			<PaletteFooter>
				<PaletteLikes>❤ 12</PaletteLikes>
				<PaletteDate>12/12/12</PaletteDate>
			</PaletteFooter>
		</PaletteInner>
	)
}

const PaletteInner = styled.div`
	box-sizing: border-box;
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

const Color = styled.div`

`
