import React from 'react'
import Diagram from '../../classes/Diagram';
import convertToFne from './convertToFne'
import matchDuration from './matchDuration';
import extendDurationTo from './extendDurationTo'
import compareFneTablesBy from './compareFneTablesBy'
import Styles from './results.module.css'
const Results =(props)=>{
    
    const {diagramsSelected,diagrams,method}=props
    let results;
    const fneMustBeExtended=method!=='CAUE/BAUE';
    let fneTables = convertToFne(diagramsSelected,diagrams);
    const matchedDuration=matchDuration(fneTables);
    fneTables=fneMustBeExtended?extendDurationTo(matchedDuration,fneTables):fneTables;
    results =compareFneTablesBy(method,fneTables);
    let caueOrbaue='';
    if(method==='CAUE/BAUE'){
        caueOrbaue =results[0].caueBaue<0?'costo':'beneficio';
    }
    const reasonVPN=`debido a que su valor presente neto es mayor al de las demas altertivas analizadas (alternativas igualadas a ${matchedDuration} periodos)`;
    const reasonBaue=`debido a que presento un ${caueOrbaue} anual uniforme ${caueOrbaue==='costo' ? 'menor': 'mayor'} al de las demas alternativas`
    const reasonTir = `ya que comparado con las demas alternativas esta presento un mejor vpn incremental (alternativas igualadas a ${matchedDuration} periodos)`
    let reason
    let analisis
    if(method==='CAUE/BAUE'){
        reason=reasonBaue
        analisis=<div className={Styles.analisis}>
            <table>
                <thead>
                    <tr>
                        <th>Alternativas</th>
                        <th>{caueOrbaue==='costo'?'CAUE':'BAUE'}</th>

                    </tr>
                </thead>
                <tbody>
                {results.map((result,i)=>{
                    const win=i===0?Styles.win:'';
                    return( 
                    <tr key={i} className={win}>
                        <td>{result.title}</td>
                        <td>${ new Intl.NumberFormat("es-MX").format(result.caueBaue)}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
        
         
    }
    if(method==='VPN'){
        reason=reasonVPN
        analisis=<div className={Styles.analisis}>
            <table>
                <thead>
                    <tr>
                        <th>Alternativas</th>
                        <th>valor presente neto</th>

                    </tr>
                </thead>
                <tbody>
                {results.map((result,i)=>{
                    const win=i===0?Styles.win:'';
                    return( 
                    <tr key={i} className={win}>
                        <td>{result.title}</td>
                        <td>${ new Intl.NumberFormat("es-MX").format(result.vpn)}</td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    }
    if(method==='TIR'){
        reason=reasonTir
        analisis=<div className={Styles.analisis}>
            <table>
                <thead>
                    <tr>
                        <th>Alternativas comparadas</th>
                        <th>VPN </th>
                        <th>Alternativa elegida</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result,i)=>{
                        const win=i===0?Styles.win:'';
                        return (
                            <tr key={i} className={win}>
                                <td>{result.versus}</td>
                                <td>${ new Intl.NumberFormat("es-MX").format(result.vpn)}</td>
                                <td>{result.winnner}</td>
                            </tr>
                            
                        )
                    })}
                </tbody>
            </table>
        </div>
    }
    

    console.log(results)
    let winner=method==='TIR'?results[0].winnner:results[0].title;
    return(
        <div className={Styles.results}>
            <h2>La mejor opcion de inversion es:</h2>
            <h1>{winner}</h1>
            <p>{reason}</p>
            {analisis}
        </div>
    )
        
        
    
        
    
}

export default Results