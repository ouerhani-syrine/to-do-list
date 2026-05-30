import { useState } from 'react'
import photo from "../../assets/images/todo.png";
import { NbCard } from '../../navBar/main/nbCard'
import { Form } from '../../navBar/Form/Form';
import { TacheRow } from '../../navBar/TacheRow/TacheRow';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useMemo } from 'react';
import { Entete } from '../../navBar/nav'
import { createContext } from 'react';
export const fct = createContext();
export const fctSup =createContext();
export const fctVerif=createContext();
export function ToDo(){
  const [tache,setTache]=useState([]);
  const nbTotal=useMemo(() => {return tache.length;},[tache]);
  const nbActive= useMemo(() =>tache.filter(t => !t.Completed).length , [tache]);
  const nbCompleted=useMemo(() =>tache.filter(t => t.Completed).length, [tache]);
  const nbHighPriority=useMemo(() =>tache.filter((t) =>{return  t.level === 'high' && !t.Completed}).length, [tache]);
  const handleForm = (t) =>{setTache([...tache,t]);};
  const modifierTacheCompleted= (titre,date) => {
    const nouvellestaches = tache.map((t)=>{
      if(t.titre===titre && t.date ===date){
        return {...t,
                Completed : !t.Completed
        }
      }
    return t;
    })
  setTache(nouvellestaches);
  }
  const verifierExistence = (titre,date) =>{
    const exist= tache.filter((t) => { return t.titre === titre && t.date === date} );
    if (exist.length !== 0){
      return false;
    }
    return true;
  }
  const apresSuppression = (titre,date) =>{
    const nTache = tache.filter((t)=>{ return !(t.titre === titre && t.date === date)});
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
    <section className='grid grid-cols-4 grid-rows-2 gap-2'>
    <NbCard symbole="❀" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="○" titre="active" nombre={nbActive}/>
    <NbCard symbole="✔" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="⚠︎" titre="High Priority" nombre={nbHighPriority}/>
    </section>
    <fctVerif.Provider value={verifierExistence}>
      <Form onAddTask={handleForm}/>
    </fctVerif.Provider>
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
      rows.push(<TacheRow key={t.id} tache={t} />)
    }
    return <table className='w-full text-sm text-left rtl:text-right text-body'>
      <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
        <tr><th colSpan="4" className='px-6 py-3 font-medium'>Tache</th></tr>
      </thead>
      <tbody>
        <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
          <td></td>
          <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><b>Titre</b></td>
          <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><b>Level</b></td>
          <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><b>Date</b></td>
          <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><b>Supprimer</b></td>
        </tr>
        {rows}
      </tbody>
    </table>
  }