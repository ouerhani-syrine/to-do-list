export function Form (){
    return <form>
        <input type="text" placeholder="Votre tache ici !"/>
        <input type="date" />
        <select name="level" id="difficulte">
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
        </select>
    </form>
}