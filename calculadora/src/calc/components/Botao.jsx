import React from "react";
import './botao.css'

const Botao = props =>{
    return(
        <>  
            
            <button
            onClick = {e => props.click && props.click(props.label)}
            className={`
                botao
                ${props.operacao? 'operacao':''}
                ${props.dobro ? 'dobro' : ''}
                ${props.triplo ? 'triplo' : ''}
                ${props.igual ? 'igual' : ''}
            `}>
                {props.label}
            </button>


        </>
    )
}

export default Botao