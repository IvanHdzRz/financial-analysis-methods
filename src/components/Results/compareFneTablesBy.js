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
    if(method==='VPN'){
        const results= fneTables.map(fneTable=>{
            return {...fneTable,vpn:getVpn(parseFloat(fneTable.i)/100,fneTable.fne)}
        })
        return results.sort((a,b)=>{return b.vpn-a.vpn})
    }
    if(method==='CAUE/BAUE'){
        return 'hola caue'
    }
    if(method==='TIR'){
        return 'hola tir'
    }
}

export default compareFneTablesBy