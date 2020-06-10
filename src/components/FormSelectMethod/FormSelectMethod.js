import React from 'react'

const FormSelectMethod =(props)=>{
    return (
        <div>
             
            <h2>Selecciona un metodo de analisis</h2>    
            <input type="radio" id="VPN" name="method" value="VPN" defaultChecked />
            <label htmlFor="VPN">vpn</label>
            
            <input type="radio" id="CAUE" name='method' value="CAUE/BAUE"  />
            <label htmlFor="CAUE">CAUE/BAUE</label>

            <input type="radio" id="TIR" name="method" value="TIR" />
            <label htmlFor="TIR">TIR</label>

            
        </div>
    )

}

export default FormSelectMethod;
