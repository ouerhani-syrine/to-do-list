import { useState } from 'react'
import photo from "../../assets/images/todo.png";
import { NbCard } from '../../Component/main/nbCard'
import { Form } from '../../Component/Form/Form';
import { TacheRow } from '../../Component/TacheRow/TacheRow';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { Entete } from '../../Component/nav'
import { createContext } from 'react';
import { createTask, deleteTask, getAllTasks, updateTask,filterTask } from '../../Service/taskService';
import { SearchBar } from '../SearchBar/SearchBar';
export const fct = createContext();
export const fctSup =createContext();
export function ToDo(){
  const [tache,setTache]=useState([]);
  const nbTotal=useMemo(() => {return tache.length;},[tache]);
  const nbActive= useMemo(() =>tache.filter(t => !t.completed).length , [tache]);
  const nbCompleted=useMemo(() =>tache.filter(t => t.completed).length, [tache]);
  const nbHighPriority=useMemo(() =>tache.filter((t) =>{return  t.level === 'High' && !t.completed}).length, [tache]);
  const onAddTask = async (t) => {
    const createdTask = await createTask(t);
    setTache((tab) => [...tab,createdTask]);
  };
  const modifierTache= async (id,check) =>{
    await updateTask(id,check);
    await getAllTasks().then((data) => setTache(data))
  }
  const apresSuppression = async(id) =>{
    await deleteTask(id);
    await getAllTasks().then((data) => setTache(data));
  } 
  useEffect(() => {
    getAllTasks().then(data => setTache(data))
  }, []);
  const handleOnSubmit = async (filter,object) => {
    if(filter === "All"){
        const data = await filterTask("All","");
        setTache(data);
    }
    if(filter === "Title"){
      const data = await filterTask("Title",object);
      setTache(data);
    }
    if(filter === "Date"){
      const data = await filterTask("Date",object);
      setTache(data);
    }
    if(filter === "Level"){
      const data = await filterTask("Level",object);
      setTache(data);
    }
}
  return <>
    <Entete src={photo}/>
    <section className='grid grid-cols-4 grid-rows-2 gap-2'>
    <NbCard symbole="❀" titre="Total" nombre={nbTotal}/>
    <NbCard symbole="○" titre="active" nombre={nbActive}/>
    <NbCard symbole="✔" titre="Completed" nombre={nbCompleted}/>
    <NbCard symbole="⚠︎" titre="High Priority" nombre={nbHighPriority}/>
    </section>
    <SearchBar onFilter={handleOnSubmit}/>
    <Form onAddTask={onAddTask}/>
    <fct.Provider value={modifierTache}>
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