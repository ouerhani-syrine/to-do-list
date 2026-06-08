import { useState } from "react";
import { useContext } from "react"
import {fct,fctSup} from "../ToDo/ToDo"
export function TacheRow({tache}){
    const modifierTache=useContext(fct);
    const apresSuppression = useContext(fctSup);
    const [titreTemp,setTitreTemp]= useState(tache.title);
    return <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <input type="checkbox" checked={tache.completed || false} onChange={(e)=>modifierTache(tache.id,{"completed" : e.target.checked})}/>
        </td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <input type="text"
                value={titreTemp} 
                onChange={(e) => setTitreTemp(e.target.value)}
                onBlur={() =>{ modifierTache(tache.id,{"title" : titreTemp})}}/>
            </td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <select name="level" value={tache.level} onChange={(e)=>{modifierTache(tache.id,{"level" : e.target.value})}} className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><input type="date" value={tache.dateTask} onChange={(e)=> modifierTache(tache.id,{"dateTask" : e.target.value})} /></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><button onClick={()=>apresSuppression(tache.id)}>❌</button></td>
    </tr>
}