import { useState } from "react"

export function Form ({onAddTask}){
    const [titre,setTitre] =useState("");
    const [date,setDate] = useState("");
    const [level,setLevel] = useState("low");
    const handleSubmit = (e) => {
        e.preventDefault();
        const nouvelleTache ={titre,date,level,completed:false };
        onAddTask(nouvelleTache);
        setTitre("");
        setDate("");
        setLevel("");
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Votre tache ici !" value={titre} onChange={(e) => {setTitre(e.target.value)}}/>
        <input type="date" value={date} onChange={ (e) => {setDate(e.target.value)}}/>
        <select name="level" id="difficulte" value={level} onChange={(e)=>{setLevel(e.target.value)}}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
        <button type="submit">Ajouter</button>
    </form>
}