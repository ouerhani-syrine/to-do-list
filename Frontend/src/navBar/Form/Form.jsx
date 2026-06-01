import { useContext } from "react";
import { useState } from "react"
import { fctVerif } from "../ToDo/ToDo";
export function Form ({onAddTask}){
    const verifierExistence= useContext(fctVerif);
    const [titre,setTitre] =useState("");
    const [date,setDate] = useState("");
    const [level,setLevel] = useState("low");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(titre.trim() === ""){
            alert("Le titre de la tache doit etre rempli !");
            return ;
        }
        if(date ===""){
            alert("date doit etre rempli !");
            return ;
        }
        const aujourdHui = new Date();
        if(new Date(date) <aujourdHui){
            alert("Date invalid !");
            return ;
        }
        if(titre.length < 3){
            alert("Titre de tache trop lent !");
            return ;
        }
        if(verifierExistence(titre,date)=== false ){
            alert("Tache existe deja !");
            return ;
        }
        const nouvelleTache ={titre,date,level,completed:false,id: crypto.randomUUID()};
        onAddTask(nouvelleTache);
        setTitre("");
        setDate("");
        setLevel("");
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Votre tache ici !" value={titre} onChange={(e) => {setTitre(e.target.value)}} className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"/>
        <input type="date" value={date} onChange={ (e) => {setDate(e.target.value)}} className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body"/>
        <select name="level" id="difficulte" value={level} onChange={(e)=>{setLevel(e.target.value)}} className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
        <button type="submit" className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-ful rounded-lg" >Ajouter</button>
    </form>
}