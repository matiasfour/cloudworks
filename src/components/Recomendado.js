import React from 'react';

import ItemRec from "./ItemRecomendado"
import "./styles/recomendados.css"
const Recomendado = () => {

    const img = {width: 400 , height: 262 }

    const title = {title: "LO RECOMENDADO PARA VOS" , size: 28 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}

    const text = {content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam eligendi velit debitis voluptates eos optio quo aliquam laudantium error!" , 
                    size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold",mtop : 5 , mleft: 0}

    return (
        <div className="recomendados">

            <ItemRec img={img} title={title} text={text}/>
            <ItemRec img={img} title={title} text={text}/>
            
        </div>
    );
}

export default Recomendado;
