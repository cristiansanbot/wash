import "./SingIn.css"
import React from "react";
import { useForm } from "react-hook-form"

function SingIn(){

    const { register, watch, formState: { errors }, handleSubmit } = useForm({});

    const onSubmit = (data) => {
        console.log(data)
    }

    const userWatch = watch("username")
    const passWatch = watch("password")

    function isComplete() {
        if(userWatch && passWatch){
            return true
        } else {
            return false
        }
    }

    return(
        <>  
            <section className="container-singin">
                <h1 className="wash">Wash</h1>
                <form className="form-singin" onSubmit = {handleSubmit(onSubmit)}>
                    <div className="container-inputs-singin">
                        <label className={userWatch?"text-singin-after":"text-singin"}>Usuario</label>
                        <input className="input-singin" type ="text" name="user" {...register("username", {
                            required: true,
                            maxLength: 30,
                        })}/>
                        {errors.username?.type === 'required' && <p className="error-form">No colocaste el usuario!</p>}
                        {errors.username?.type === 'maxLength' && <p className="error-form">El usuario es demasiado largo!</p>}
                    </div>
                    <div className="container-inputs-singin">
                        <label className={passWatch?"text-singin-after":"text-singin"}>Contraseña</label>
                        <input className="input-singin" type ="password" name="user"{...register("password", {
                            required: true,
                            maxLength: 30,
                        })}/>
                        {errors.password?.type === "required" && <p className="error-form">Se te olvido poner la contraseña!</p>}
                        {errors.password?.type === "maxLength" && <p className="error-form">las contraseñas no son tan largas!</p>}
                    </div>
                    <div className="container-button">
                        <input className={isComplete()?"button-singin":"button-singin-none"} type="submit" value="ingresar"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default SingIn;