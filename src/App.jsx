import { useState } from 'react'
import { Entete } from './navBar/nav'
import photo from "./assets/images/todo.png"
import { NbCard } from './navBar/main/nbCard'
import { Form } from './navBar/Form/Form';
function App() {
  const [nbTotal,setNbTotal] = useState(0);
  const [nbHighPriority,setNbHighPriority] = useState(0);
  const [nbActive,setNbActive] = useState(0);
  const [nbCompleted,setNbCompleted] = useState(0);
  return <>
    <Entete src={photo}/>
    <div style={{ display: 'flex', gap: '10px' }}>
    <NbCard symbole="-" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="°" titre="active" nombre={nbActive}/>
    <NbCard symbole="\/" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="!" titre="High Priority" nombre={nbHighPriority}/>
    </div>
    <Form />
  </>
}

export default App
