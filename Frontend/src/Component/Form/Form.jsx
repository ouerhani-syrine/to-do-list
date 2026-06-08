import { useState } from "react"
export function Form ({onAddTask}){
    const [title,setTitre] =useState("");
    const [dateTask,setDate] = useState("");
    const [level,setLevel] = useState("Low");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.trim() === ""){
            alert("Le titre de la tache doit etre rempli !");
            return ;
        }
        if(dateTask ===""){
            alert("date doit etre rempli !");
            return ;
        }
        if(title.length < 3){
            alert("Titre de tache trop lent !");
            return ;
        }
        const nouvelleTache ={title,dateTask,level,completed:false};
        onAddTask(nouvelleTache);
        setTitre("");
        setDate("");
        setLevel("");
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Votre tache ici !" value={title} onChange={(e) => {setTitre(e.target.value)}} className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"/>
        <input type="date" value={dateTask} onChange={ (e) => {setDate(e.target.value)}} className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body"/>
        <select name="level" id="difficulte" value={level} onChange={(e)=>{setLevel(e.target.value)}} className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>
        <button type="submit" className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-ful rounded-lg" >Ajouter</button>
    </form>
}