import { useState } from 'react'
import { Entete } from './navBar/nav'
import photo from "./assets/images/todo.png"
import { NbCard } from './navBar/main/nbCard'
import { Form } from './navBar/Form/Form';
import { TacheRow } from './navBar/TacheRow/TacheRow';
function App() {
  const [tache,setTache]=useState([]);
  const nbTotal=tache.length;
  const nbActive= tache.filter(t => !t.Completed).length;
  const nbCompleted= tache.filter(t => t.Completed).length;
  const nbHighPriority=tache.filter(t => t.level === 'high').length;
  const handleForm = (t) =>{setTache([...tache,t])};
  
  return <>
    <Entete src={photo}/>
    <div style={{ display: 'flex', gap: '10px' }}>
    <NbCard symbole="-" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="°" titre="active" nombre={nbActive}/>
    <NbCard symbole="\/" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="!" titre="High Priority" nombre={nbHighPriority}/>
    </div>
    <Form onAddTask={handleForm}/>
    <Tableau taches={tache}/>
  </>
}
function Tableau({taches}){
  const rows=[];
  for(let t of taches){
    rows.push(<TacheRow key={t.titre} tache={t} />)
  }
  return <table>
    {rows}
  </table>
}
export default App
