import React, {useState, Fragment } from 'react'

const Lista = () =>{
    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5])
    const [cont, setcont] = useState(6)
    const AcrescentarElement=() =>{
        setcont(cont+1)
        setarrayNumero([...arrayNumero, cont])
    }
    return(
        <Fragment>
            <h2>Lista: </h2>
            <button onClick={AcrescentarElement} >Acrescentar</button>
            {
                arrayNumero.map((item, index)=>{
                    return(
                        <div key={index}>
                            <p> {item} - {index} </p>
                        </div>
                    );
                })
            }
        </Fragment>
    );
}

export default Lista;