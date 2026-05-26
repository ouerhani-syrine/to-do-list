export function TacheRow({tache, modifierTacheCompleted}){
    return <tr>
        <td><input type="checkbox" checked={tache.Completed || false} onChange={()=>modifierTacheCompleted(tache.titre)}/></td>
        <td><label htmlFor="tache">{tache.titre}</label></td>
        <td><label htmlFor="level">{tache.level}</label></td>
        <td><label htmlFor="date">{tache.date}</label></td>
    </tr>
}