export function Entete({src}){
    return <>
        <section className="flex justify-center items-center ">
            <section className="flex gap-4">
                <img src={src} alt="toDoList" className="h-20 w-150 object-contain"/>
                <h1 className="text-6xl font-mono" style={{color : '#EBBF81'}}>TO DO LIST</h1>
            </section>
        </section>
        <br />
        <br /><br />
    </>
}