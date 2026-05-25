export function TacheRow({tache}){
    return <tr>
        <td>
            <input type="checkBox" checked={false} />
            <label htmlFor="tache">{tache.titre}</label>
            <label htmlFor="level">{tache.level}</label>
        </td>
    </tr>
}