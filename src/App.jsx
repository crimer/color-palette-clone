import React, { useEffect } from 'react'
import { Header } from './components/Header'
import { Palette } from './components/Palette'
import styled from 'styled-components'
import { Container } from './styles/global'


export const App = () => {
  useEffect(()=>{
    const fetchData = async () => {
      const resp = await fetch('/data.json')
      const json = await resp.json()
      console.log(json);
    }
    fetchData();
  },[])
	const arr = Array.from(new Array(10).keys())

	return (
		<div className="App">
			<Header />
			<MainSection>
        <MainInner>
          <PalettsList>
            {arr.map(m => (
              <Palette key={m} />
            ))}
          </PalettsList>
        </MainInner>
			</MainSection>
		</div>
	)
}

const MainSection = styled.div`
  background-color: #fdfdfd;
  padding-top: 60px;
`;
const MainInner = styled(Container)`
  padding: 20px 0;
`;
const PalettsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  gap: 20px;
`;
