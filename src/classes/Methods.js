import AmountSelector from "../components/AmountSelector/AmountSelector";

class Methods {
    static getFne(amounts){
       //no hay montos, regresa un 0
        if(amounts.size===0){
            return 0;
        }
        let size=Methods.getLastPeriod(amounts);
        return size;

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
}
export default Methods;