import styled, { createGlobalStyle  } from 'styled-components'

export const GlopalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`

export const SoftShadowColor = 'rgba(0,64,128,.05)'
export const MainBgColor = '#fdfdfd'
export const HeaderHeight = '60px'
export const ContainerWidth = '80%'

export const Container = styled.div`
	width: ${ContainerWidth};
	margin: 0 auto;
`

export const SoftShadow = styled.div`
	box-shadow: 0 5px 10px 0 ${SoftShadowColor};
`
