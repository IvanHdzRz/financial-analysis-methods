const extendDurationTo=(newDuration,fneTables)=>{
     const extendFneTable=(fneTable)=>{
        const extendedFneTable=new Map();
        
        const currentDurationOfFne=fneTable.value.size-1;
        const repetitions=newDuration/currentDurationOfFne;

        
        for(let i=1;i<=repetitions;i++){
            //recorre los montos de la table fne
            
            fneTable.value.forEach((amount,period)=>{
                
                const id=period+(currentDurationOfFne*(i-1));
                
                const prevValue=extendedFneTable.get(id)===undefined?0:extendedFneTable.get(id);
                extendedFneTable.set(id,prevValue+amount)
            })
        }
        return extendedFneTable
     }
     
     return fneTables.map(fneTable=>{
         return({
            title:fneTable.title,
            fne:extendFneTable(fneTable.fne),
            i:fneTable.i
        })
     })
}

export default extendDurationTo;
