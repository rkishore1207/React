import React from "react";
import './Input.css';

function Input(props)
{
    const{variant='small',children,...rest}=props;
    return(
        <input className={`${variant} input-field ...rest`} placeholder={children}></input>
    )
}

export default Input;