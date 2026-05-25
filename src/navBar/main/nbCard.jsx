export function NbCard({symbole, titre, nombre}){
    const style= titre=="High Priority" ? {color : 'red'}: {color : 'green'};
    return <div style={{backgroundColor : 'pink'}}>
        <label htmlFor="symbole">{symbole}</label>
        <label htmlFor="titre">{titre}</label>
        <label style={style} htmlFor="nombre">{nombre}</label>
    </div>
}