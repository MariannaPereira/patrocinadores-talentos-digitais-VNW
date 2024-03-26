import React, {useState, useEffect} from "react";
import Amazon from "./assets/amazon.png"
import Libanes from "./assets/libanes.png"
import Vnw from "./assets/vnw.png"
import styled from "styled-components";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const Main = styled.main`
width: 100%;
`

const Informação = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 100%;
`

const Patrocinadores = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
max-width: 100%;
`

function App(){
  
  const [marca, setMarca] = useState(Vnw)

  useEffect(()=>{

    if(marca=== Vnw){
      document.querySelector("div").style.backgroundColor= "#ffbe0b";
      document.querySelector("div").style.transition = "ease-in-out 0.8s"
    } 
    else if(marca=== Amazon){
      document.querySelector("div").style.background="#252F3E"
    }

    else if(marca=== Libanes){
      document.querySelector("div").style.backgroundColor="#FFFFFF"
    }

  })


  return(
    <Main>

      <GlobalStyle/>

      <Informação>
        <img src={marca} alt=""/>
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'</h2>
      </Informação>

      <Patrocinadores>
      <img onClick={()=>{setMarca(Amazon)}} src={Amazon} alt=""/>
      <img onClick={()=>{setMarca(Vnw)}} src={Vnw} alt=""/>
      <img onClick={()=>{setMarca(Libanes)}} src={Libanes} alt=""/>
      </Patrocinadores>
    </Main>
  )
}

export default App