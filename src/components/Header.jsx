import React from 'react'
import styled from 'styled-components'
import { HeaderHeight, Container, SoftShadow } from '../styles/global'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<HeaderOuter>
			<HeaderInner>
				<Link to="/">
					<HeaderLogo>React-color-palette</HeaderLogo>
				</Link>
				<HeaderLinks>
					<Link to="/">Paletts</Link>
					{/* <Link t0="/">...</Link> */}
				</HeaderLinks>
			</HeaderInner>
		</HeaderOuter>
	)
}
export default Header

const HeaderOuter = styled(SoftShadow)`
	background-color: #fff;
	position: fixed;
	width: 100%;
	height: ${HeaderHeight};
	line-height: ${HeaderHeight};
`
const HeaderInner = styled(Container)`
	display: flex;
	flex-flow: row nowrap;
`
const HeaderLogo = styled.div`
	margin-right: 30px;
`
const HeaderLinks = styled.div`
	display: flex;
	flex-flow: row nowrap;
	a:not(:last-child) {
		margin-right: 30px;
	}
`
