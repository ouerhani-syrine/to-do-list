import { useState } from 'react'
import photo from "../../assets/images/todo.png";
import { NbCard } from '../../navBar/main/nbCard'
import { Form } from '../../navBar/Form/Form';
import { TacheRow } from '../../navBar/TacheRow/TacheRow';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { Entete } from '../../navBar/nav'
import { useContext } from 'react';
import { createContext } from 'react';
export const fct = createContext();
export const fctSup =createContext();
export function ToDo(){
    const [tache,setTache]=useState([]);
  const nbTotal=useMemo(() => {return tache.length;},[tache]);
  const nbActive= useMemo(() =>tache.filter(t => !t.Completed).length , [tache]);
  const nbCompleted=useMemo(() =>tache.filter(t => t.Completed).length, [tache]);
  const nbHighPriority=useMemo(() =>tache.filter((t) =>{return  t.level === 'high' && !t.Completed}).length, [tache]);
  const handleForm = (t) =>{setTache([...tache,t]);};
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
  const apresSuppression = (titre) =>{
    const nTache = tache.filter((t)=>(t.titre !== titre));
    setTache(nTache);
  } 
  const premierRendu=useRef(true);
  useEffect(() => {
    const saved = localStorage.getItem("taches");
    if(saved){
      setTache(JSON.parse(saved));
    }
  },[])
  useEffect(() =>{
    if (premierRendu.current) {
      premierRendu.current = false;
      return; 
    }
      localStorage.setItem("taches",JSON.stringify(tache));
  },[tache])
  return <>
    <Entete src={photo}/>
    <div style={{ display: 'flex', gap: '10px' }}>
    <NbCard symbole="-" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="°" titre="active" nombre={nbActive}/>
    <NbCard symbole="\/" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="!" titre="High Priority" nombre={nbHighPriority}/>
    </div>
    <Form onAddTask={handleForm}/>
    <fct.Provider value={modifierTacheCompleted}>
      <fctSup.Provider value={apresSuppression}>
        <Tableau taches={tache}/>
      </fctSup.Provider>
    </fct.Provider>
  </>
}
function Tableau({taches}){
    const rows=[];
    for(let t of taches){
      rows.push(<TacheRow key={t.titre} tache={t} />)
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
          <td><b>Supprimer</b></td>
        </tr>
        {rows}
      </tbody>
    </table>
  }