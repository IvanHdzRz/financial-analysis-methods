import FneTable from '../../classes/FneTable';

const convertToFne=(selected,diagrams)=>{
    //regresa un array de objetos con el nombre del diagrama y una tabla con el flujo neto de efectivo
    return selected.map(id=>{
        const fne = new FneTable(diagrams.get(id).amounts)
        return(
            {
                title:diagrams.get(id).title,
                fne: fne
            }
        )
    })
}

export default convertToFne