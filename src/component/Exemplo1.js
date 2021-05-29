import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';

const Exemplo = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    const [Entrada, setEntrada] = useState([])
    const sendData=(data, e)=>{
        setEntrada([
            ...Entrada,
            data
        ])
        e.target.reset()
    }
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Exemplo1</h1>
                    </div>
                    <form className="col-12" onSubmit={handleSubmit(sendData)}>
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" name="titulo" 
                                placeholder="Titulo"
                                {
                                    ...register("titulo",{
                                        required:{ value:true, message:"Texto Vazio"}
                                    })
                                }
                                 />
                                {
                                    errors.titulo &&
                                    <span className="text-small text-danger"> 
                                        {errors.titulo.message} 
                                    </span>
                                }
                            </div>
                            <div className="col-6">
                                <input type="text" name="descrip"
                                placeholder="Descrição"
                                className="form-control"
                                {...register("descrip",{required:{value:true, message:"Descrição Importante"}})} />
                                <span className="text-small text-danger">
                                    {errors?.descrip?.message}
                                </span>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn my-2 btn-primary">Carregar Dados</button>
                            </div>
                            <div className="col-12">
                                {
                                    Entrada.map(item=><li>{item.titulo} - {item.descrip} </li>)
                                }
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default Exemplo