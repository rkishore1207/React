import React from "react";
import './Input.css';

function Input(props)
{
    const{variant='small',...rest}=props;
    return(
        <input className={`${variant} input-field`} {...rest}></input>
    )
}

export default Input;