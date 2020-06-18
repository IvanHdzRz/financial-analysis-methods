import getComunMutiplo from '../../classes/calculaComunMultiplo'

const matchDuration=(fneTables)=>{
    
    //get comun multiplo recibe un array de enteros y calcula su comun multiplo 
    return getComunMutiplo(
        fneTables.map(fneTable=> fneTable.fne.value.size-1)
    )
    

}



export default matchDuration;