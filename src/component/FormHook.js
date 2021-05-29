import React from 'react'
import {useForm} from 'react-hook-form'

const FormHook = () =>{
    const {register, handleSubmit, formState:{errors}} = useForm();
    const submit =(data) =>{
        console.log(data)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>FormHook</h2>
                </div>
                <form onSubmit={handleSubmit(submit)} className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" name="nome" 
                            className="form-control" 
                            placeholder="Seu nome"
                            {...register("nome",{
                                required:{value:true, message:"Digite seu nome"}
                            })} />
                            <span className="text-small text-danger">
                                {errors?.nome?.message}
                            </span>
                        </div>
                        <div className="col-6">
                            <input type="text" name="sobreNome"
                             className="form-control" 
                             placeholder="Seu segundo nome"
                             {...register("sobreNome",{
                                 required:{value:true, message:"Seu segundo nome"}
                             })} />
                             <span className="text-small text-danger">
                                 {errors?.sobreNome?.message}
                             </span>
                        </div>
                        <div className="col-12 mt-4">
                            <button type="submit" className="btn btn-primary">
                                Enviar Dados
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormHook