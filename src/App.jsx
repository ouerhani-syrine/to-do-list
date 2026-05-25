import { useState } from 'react'
import { Entete } from './navBar/nav'
import photo from "./assets/images/todo.png"
import { NbCard } from './navBar/main/nbCard'
function App() {
  return <>
    <Entete src={photo}/>
    <div style={{ display: 'flex', gap: '10px' }}>
    <NbCard symbole="!" titre="High Priority" nombre="6"/>
    <NbCard symbole="°" titre="active" nombre="6"/>
    </div>
  </>
}

export default App
