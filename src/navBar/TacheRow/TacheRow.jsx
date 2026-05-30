import { useContext } from "react"
import {fct ,fctSup} from "../ToDo/ToDo"
export function TacheRow({tache}){
    const modifierTacheCompleted=useContext(fct);
    const apresSuppression=useContext(fctSup);
    return <tr>
        <td><input type="checkbox" checked={tache.Completed || false} onChange={()=>modifierTacheCompleted(tache.titre)}/></td>
        <td><label htmlFor="tache">{tache.titre}</label></td>
        <td><label htmlFor="level">{tache.level}</label></td>
        <td><label htmlFor="date">{tache.date}</label></td>
        <td><button onClick={()=>apresSuppression(tache.titre)}>❌</button></td>
    </tr>
}