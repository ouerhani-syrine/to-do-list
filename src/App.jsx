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
  const nbHighPriority=tache.filter((t) =>{return  t.level === 'high' && !t.Completed}).length;
  const handleForm = (t) =>{setTache([...tache,t]) ; alert(t.titre);};
  const modifierTacheCompleted= (titre) => {
    const nouvellestaches = tache.map((t)=>{
      if(t.titre===titre){
        return {...t,
                Completed : !t.Completed
        }
      }
    return t;
    })
  setTache(nouvellestaches);
  }
  return <>
    <Entete src={photo}/>
    <div style={{ display: 'flex', gap: '10px' }}>
    <NbCard symbole="-" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="°" titre="active" nombre={nbActive}/>
    <NbCard symbole="\/" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="!" titre="High Priority" nombre={nbHighPriority}/>
    </div>
    <Form onAddTask={handleForm}/>
    <Tableau taches={tache} modifierTacheCompleted={modifierTacheCompleted}/>
  </>
}
function Tableau({taches,modifierTacheCompleted}){
  const rows=[];
  for(let t of taches){
    rows.push(<TacheRow key={t.titre} tache={t} modifierTacheCompleted={modifierTacheCompleted} />)
  }
  return <table>
    <thead>
      <tr><th colSpan="4">Tache</th></tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td><b>Titre</b></td>
        <td><b>Level</b></td>
        <td><b>Date</b></td>
      </tr>
      {rows}
    </tbody>
  </table>
}
export default App
