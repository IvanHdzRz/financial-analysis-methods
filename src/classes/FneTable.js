import AmountSelector from "../components/AmountSelector/AmountSelector";

class FneTable {
    constructor(amounts){
        this.value=FneTable.getFne(amounts);
    }
    
    static getFne(amounts){
       //no hay montos, regresa un 0
        if(amounts.size===0){
            return new Map();
        }
        let size=FneTable.getLastPeriod(amounts);
        let fneTable=FneTable.initFne(size);
        amounts.forEach(value => {
            let{properties}=value;
            let {type}=properties
            let actualFNEinPeriod;
            
            //si el monto es del tipo unico obten el valor actual de fne y sumale la cantidad del monto
            if(type==='unique'){
                let {start:period,amount}=properties;
                actualFNEinPeriod=fneTable.get(period);
                fneTable.set(period,actualFNEinPeriod+amount);
                
            }
            //si el monto es uniforme suma la cantidad del monto en cada periodo desde start+1 hasta end
            if(type==='uniform'){
                let {start,end,amount}=properties;
                for(let i=start;i<=end;i++){
                    actualFNEinPeriod=fneTable.get(i);
                    fneTable.set(i,actualFNEinPeriod+amount);
                }
            }
            if(type==='gradient'){
                let {start,end,amount,g}=properties;
                let newFneInperiod;
                let increment=0;
                for(let i=start; i<=end; i++){
                    actualFNEinPeriod=fneTable.get(i);
                    newFneInperiod=actualFNEinPeriod+amount+(g*increment);
                    fneTable.set(i,newFneInperiod);
                    increment++;
                }
            }
            
        });
        return fneTable;
    }

    static getLastPeriod(amounts){
        let lastPeriod=0;
        let type;
        amounts.forEach(amount => {
            type=amount.properties.type;
            //para pagos unicos
            if(type==="unique" && amount.properties.start>lastPeriod){
                lastPeriod=amount.properties.start;
                
            }
            if(type!=='unique' && amount.properties.end>lastPeriod){
                lastPeriod=amount.properties.end;
            }
        });
        return lastPeriod;
    
    }
    static initFne(size){
        let fne= new Map();
        for(let i=0;i<=size; i++){
            //se inicia suponiendo que todos los periodos tienen flujo neto 0
            fne.set(i,0)
        }
        return fne;
    }
    getVpn(interest){
        if(this.value.size===0){
            return 0;
        }
        let vpn=0;
        console.log(interest)
        for(let i=0; i<this.value.size;i++){
            vpn+=(this.value.get(i)*(1/(Math.pow(1+interest,i))))
            console.log('si entre',vpn)
        }
        return vpn
    }
}
export default FneTable;