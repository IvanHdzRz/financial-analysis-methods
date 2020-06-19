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
        return 'hola tir'
    }
}

export default compareFneTablesBy