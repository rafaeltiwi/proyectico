import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form'



const Formulario = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const capDatos = (data, e) =>
    {
        //console.log(data)
        props.addUser(data)
        
        e.target.reset()
        
        
        
    }

    
    return (
        <Fragment>
            <form onSubmit={handleSubmit(capDatos)} className="container">  
                <input 
                    type="text" 
                    className="form-control my-3" 
                    label="nombre"
                    name="name"
                    placeholder="Nombre"
                    ref={register({
                        required: {value:true , message:"Es nesesario el nombre"}
                    })}
                
                ></input>
                    {errors.name &&
                        <div className="alert alert-danger" role="alert">
                            {errors.name.message}
                        </div>
                    
                    }

                <input 
                    type="text" 
                    className="form-control mb-3" 
                    label="nombre"
                    name="email"
                    placeholder="Email"
                    ref={register({
                        required: {value:true , message:"Es nesesario el correo"}
                    })}
                ></input>
                    {errors.email &&
                        <div className="alert alert-danger" role="alert">
                            {errors.email.message}
                        </div>
                    
                    }


                <button className="btn btn-primary">Enviar</button>
            </form>
        </Fragment>
        
      );
}
 
export default Formulario;