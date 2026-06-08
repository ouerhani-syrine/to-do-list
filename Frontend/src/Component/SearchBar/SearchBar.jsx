import { useState } from "react";
export function SearchBar({onFilter}){
    const [title,setTitle] =useState("");
    const [dateTask,setDate] = useState("");
    const [level,setLevel] = useState("");
    const [filter,setFilter] = useState("All");
    return <>
        <select name="Filter" id="Filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All" >All</option>
            <option value="Title">Title</option>
            <option value="Date">Date</option>
            <option value="Level">Level</option>
        </select>
        {filter === "Title" && <input type="text" value={title} onChange={(e) => {setTitle(e.target.value);}} className="bg-neutral-secondary-medium border border-default-medium text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body"/>}
        {filter === "Date" &&<input type="date" value={dateTask} onChange={ (e) => {setDate(e.target.value);}} className="block w-full ps-9 pe-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand px-3 py-2.5 shadow-xs placeholder:text-body"/>}
        {filter === "Level" &&
        <select name="level" id="difficulte" value={level} onChange={(e)=>{setLevel(e.target.value);}} className="block w-full px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
        </select>}
        <button type="submit" onClick={() =>{
            if(filter === "All") onFilter(filter,"")
            else if(filter === "Title") onFilter(filter,title)
            else if(filter === "Date") onFilter(filter,dateTask)
            else if(filter === "Level") onFilter(filter,level)
        } }
        className="bg-yellow-700 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-ful rounded-lg" >Filtrer</button>
    </>
}