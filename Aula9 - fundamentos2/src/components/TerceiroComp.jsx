import React from "react"

export default function TerceiroComp(props){
      
    
    return(

        <div>

            <p>Olá {props.nome}</p>
            <p>Sua nota é {props.nota}</p>
            <p>Você está {(props.nota>=6?'Aprovado':'Reprovado')}</p>

        </div>

    )
}