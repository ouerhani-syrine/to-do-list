import { useContext } from "react"
import {fct ,fctSup} from "../ToDo/ToDo"
export function TacheRow({tache}){
    const modifierTacheCompleted=useContext(fct);
    const apresSuppression=useContext(fctSup);
    return <tr className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><input type="checkbox" checked={tache.Completed || false} onChange={()=>modifierTacheCompleted(tache.titre,tache.date)}/></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><label htmlFor="tache">{tache.titre}</label></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><label htmlFor="level">{tache.level}</label></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><label htmlFor="date">{tache.date}</label></td>
        <td className="px-6 py-4 font-medium text-heading whitespace-nowrap"><button onClick={()=>apresSuppression(tache.titre,tache.date)}>❌</button></td>
    </tr>
}