import React from "react";

const Table = ({data}) => {

    const questionKeys = Object.keys(data).filter(key => key.startsWith('q'));
    const totalData = Object.keys(data).filter(key => key.startsWith('total'));

    return(
        <>
        {questionKeys.length === 0 ? (
            <div>
                <h4>No Se encontraron datos</h4>
            </div>
        ) : (
            <table>
                <thead>
                    <tr>
                        <td><h3>Manejo de evaluación</h3></td>
                        <td>MEDIA</td>
                        <td>DESV. EST</td>
                        <td>COEF. VARIA</td>
                        <td>RESPUESTAS VALIDAS</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        questionKeys.map(key => (
                            <tr key={key}>
                                <td> {data[key].question} </td>
                                <td> {data[key].half} </td>
                                <td> {data[key].standardDeviation} </td>
                                <td> {data[key].variabilityCoefficient} </td>
                                <td> {data[key].validAnswers} </td>
                            </tr>
                        ))
                    }
                    {
                        totalData.map(key => (
                            <tr key={key}>
                                <td className="total-table">Total</td>
                                <td> {data[key].t_half} </td>
                                <td> {data[key].t_standardDeviation} </td>
                                <td> {data[key].t_variabilityCoefficient} </td>
                                <td> {data[key].t_validAnswers} </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        )}

        <button>Anterior</button>
            
        </>
    )
}


export default Table;