import FneTable from '../../classes/FneTable'
const compareFneTablesBy=(method,fneTables)=>{
    const getVpn=(interest,table)=>{
        if(table.size===0){
            return 0;
        }
        let vpn=0;
        
        for(let i=0; i<table.size;i++){
            vpn+=(table.get(i)*(1/(Math.pow(1+interest,i))))
            
        }
        return vpn
    }
    const getBaueCaue=(vpn,i,n)=>{
        let baueCaue=i!==0?vpn*( (i*Math.pow(1+i,n) )/(Math.pow(1+i,n)-1)):vpn/n;
        
        return baueCaue;
    }

    const getTir=(tables,i,lastPeriod)=>{
        //se ordenan de menor a mayor inversion inical
        tables.sort((a,b)=>{return b.fne.get(0)- a.fne.get(0)})
       //si solo es una tabla 
        if(tables.length===1){
            return [{
                versus: `${tables[0].title} vs ----,`,
                vpn:getVpn(parseFloat(tables[0].i)/100,tables[0].fne),
                winner:tables[0].title    
            }]
        }
        let results=[];
        let difOfFne=new Map();
        let dif;
        let vpn;
        let result;
        //se hace la diferencia 
        while(tables.length>1){
            difOfFne=new Map();
            for(let i=0;i<=lastPeriod;i++){
                dif=tables[1].fne.get(i)-tables[0].fne.get(i)
                difOfFne.set(i,dif)
            }
            //se calcula el vpn de la diferencia
            vpn=getVpn(i,difOfFne)
            //YA se sabe quien gano, si el vpn es negativo gana el item 0 si es pos gana 1
            result={
                versus:`${tables[1].title} vs ${tables[0].title} `,
                vpn:vpn,
                winnner:vpn<0?tables[0].title:tables[1].title,
            }
            console.log(result)
            results.push(result);
            //si vpn es negativo se el item en pos  1 si es positivo se quita el que esta en posicion 0
            tables=vpn<0?tables.filter((table,i)=>{return i!==1}):tables.filter((table,i)=>{return i!==0});
            
        }
        console.log(results);
        return results.reverse();
    }
    if(method==='VPN'){
        const results= fneTables.map(fneTable=>{
            return {...fneTable,vpn:getVpn(parseFloat(fneTable.i)/100,fneTable.fne)}
        })
        return results.sort((a,b)=>{return b.vpn-a.vpn})
    }
    /*refactorizar se puede hacer vpn y caue en un solo map*/
    if(method==='CAUE/BAUE'){
        let results= fneTables.map(fneTable=>{
            return {...fneTable,vpn:getVpn(parseFloat(fneTable.i)/100,fneTable.fne.value)}
        })
        results= results.map(result=>{
            const {vpn,i,fne}=result
            const caueBaue=getBaueCaue(vpn,parseFloat(i)/100,fne.value.size-1)
            return {...result,caueBaue:caueBaue}
        })
        
        return results.sort((a,b)=>{return b.caueBaue-a.caueBaue})
    }
    if(method==='TIR'){
        
        return getTir(fneTables,parseFloat(fneTables[0].i/100),fneTables[0].fne.size-1)
        
    }
}

export default compareFneTablesBy