import react from "react";
import './display.css'


const Display = props =>{
    return(
        <>
            <div className='display'>
                {props.valor}
            </div>
        </>
    )
}

export default Display