import React,{Fragment, useState} from 'react'

function Formulario(){
    const [user, setuser] = useState({
        nome:'',
        password: ''
    })
    const handChangedInput =(event) => {
        // console.log(event.target.value)
        setuser({
            ...user,
            [event.target.name]: event.target.value
        })
    }
    const enviarDados =(e)=>{
        e.preventDefault()
        console.log(user.nome + " "+ user.password)
    }
    return(
        <Fragment>
            <div className="container">
                
                <div className="row">
                    <h1 className="col-12 ml-3">Formulario</h1>
                    <form className="col-12 p-5" onSubmit={enviarDados}>
                        <div className="row">
                            <div class="form-group col-6">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="text" class="form-control"
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                name="nome"
                                onChange={handChangedInput}   />
                            </div>
                            <div class="form-group col-6">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password"
                                name="password"
                                class="form-control" 
                                id="exampleInputPassword1"
                                onChange={handChangedInput}  />
                            </div>
                            <div className="col-12 mt-2">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </form>
                    <h2 className="col-12 ml-3">{user.nome}</h2>
                    <h2 className="col-12 ml-3">{user.password}</h2>
                </div>
            </div>
        </Fragment>
    );
}
export default Formulario;