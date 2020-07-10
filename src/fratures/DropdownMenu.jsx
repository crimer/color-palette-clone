import React from 'react'
import styled from 'styled-components'
import { ReactComponent as DropdownIcon } from '../assets/svg/dropdownIconsvg.svg'

export const DropdownMenu = ({
	title = 'Options',
	children,
	setDropdown,
	dropdownOpen,
}) => {
	return (
		<DropdownWrapper>
			<DropdownMenuIcon onClick={() => setDropdown(!dropdownOpen)}>
				{title}
				<DropdownIcon />
			</DropdownMenuIcon>
			<Menu>{dropdownOpen && children}</Menu>
		</DropdownWrapper>
	)
}

export const DropdownItem = ({ children, leftIcon, rightIcon }) => {
	return (
		<div>
			<span>{leftIcon}</span>
			{children}
			<span>{rightIcon}</span>
		</div>
	)
}


const DropdownWrapper = styled.div`
	width: 70px;
	height: 30px;
	/* background: ; */
	border-radius: 50px;
	cursor: pointer;
`
const DropdownMenuIcon = styled.div``

const Menu = styled.div``
