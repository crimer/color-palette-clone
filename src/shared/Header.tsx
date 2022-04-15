import React, { useState } from 'react'
import styled from 'styled-components'
import { HeaderHeight, Container, SoftShadow } from '../global-styles'
import { NavLink } from 'react-router-dom'
import { DropdownMenu, DropdownItem } from './index'

export const Header = () => {
  const [dropdownOpen, setDropdown] = useState(false)

	return (
		<HeaderOuter>
			<HeaderInner>
				<NavLink to="/">
					<HeaderLogo>React-color-palette</HeaderLogo>
				</NavLink>
				<HeaderItems>
					<NavLink to="/">Paletts</NavLink>
					<DropdownMenu dropdownOpen={dropdownOpen} setDropdown={setDropdown}>
            <DropdownItem>Title</DropdownItem>
            <DropdownItem>Title2</DropdownItem>
            <DropdownItem>Title3</DropdownItem>
          </DropdownMenu>
				</HeaderItems>
			</HeaderInner>
		</HeaderOuter>
	)
}

const HeaderOuter = styled(SoftShadow)`
	background-color: #fff;
	position: fixed;
	width: 100%;
	height: ${HeaderHeight};
`
const HeaderInner = styled(Container)`
	display: flex;
  height: ${HeaderHeight};
  align-items: center;
	flex-flow: row nowrap;
`
const HeaderLogo = styled.div`
	margin-right: 30px;
  width: 140px;
`
const HeaderItems = styled.div`
	display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
	flex-flow: row nowrap;
	a:not(:last-child) {
		margin-right: 30px;
	}
`
