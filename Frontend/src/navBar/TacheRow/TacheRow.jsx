import { useState } from "react";
import { useContext } from "react"
import {fct ,fctSup, fctnom, fctdate, fctlevel} from "../ToDo/ToDo"
export function TacheRow({tache}){
    const modifierTacheCompleted=useContext(fct);
    const apresSuppression=useContext(fctSup);
    const modifierTacheTitre=useContext(fctnom);
    const modifierTacheDate=useContext(fctdate);
    const modifierTacheLevel=useContext(fctlevel);
    const [titreTemp,setTitreTemp]= useState(tache.titre);
    return <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <input type="checkbox" checked={tache.Completed || false} onChange={()=>modifierTacheCompleted(tache.titre,tache.date)}/>
        </td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <input type="text"
                value={titreTemp} 
                onChange={(e) => setTitreTemp(e.target.value)}
                onBlur={() =>{ if(! modifierTacheTitre(tache.titre,titreTemp,tache.date)){
                    setTitreTemp(tache.titre);
                }}}/>
            </td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap">
            <select name="level" value={tache.level} onChange={(e)=>{modifierTacheLevel(tache.level,e.target.value,tache.titre,tache.date)}} className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs">
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
            </select></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><input type="date" value={tache.date} onChange={(e)=> modifierTacheDate(tache.date,e.target.value,tache.titre)} /></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><button onClick={()=>apresSuppression(tache.titre,tache.date)}>❌</button></td>
    </tr>
}