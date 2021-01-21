import React from 'react';
import ItemConc from "./ItemConc"
import "./styles/concursos.css"
const Concursos = () => {

    const img = {width: 120 , height: 120 }

    const title = {title: "CONCURSOS" , size: 20 , family: "Arial, Helvetica, sans-serif" , weight: "bold"}

    const text = {content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, dolorem quasi" , 
                    size: 16 , family: "Arial, Helvetica, sans-serif" , weight: "bold" , ptop : 60 , mleft: 10 , }

                

    return (
        <div className="concursos">
         
            <ItemConc img={img} title={title} text={text}   />

            <ItemConc img={img} title={title} text={text} />

            <ItemConc img={img} title={title} text={text}  />

            
            


        </div>
    );
}

export default Concursos;
