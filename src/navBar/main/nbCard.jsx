export function NbCard({symbole, titre, nombre}){
    const style= titre=="High Priority" ? {color : 'red'}: {color : 'green'};
    return <div className="rounded-lg" style={{backgroundColor: '#E6CEA8'}}>
        <label htmlFor="symbole" className="font-bold">{symbole}</label>
        <label htmlFor="titre" className="font-bold">{titre}</label>
        <br />
        <label style={style} htmlFor="nombre" className="font-bold">{nombre}</label>
    </div>
}