import React from 'react';
import Image from "./Image"
import Text from "./Text"
import Title from "./Title"
import Img from "./images/messi.png"
import "./styles/recomendados.css"
const ItemRecomendado = (props) => {
    return (
        <div className="recomendado">
               <Title  title={props.title.title}/>
            <Image  path={Img} width={props.img.width} height={props.img.height}/>
            <Text  content={props.text.content}  size={props.text.size} family={props.text.family} weight={props.text.weight} mtop={props.text.mtop} mleft={props.text.mleft}  />
        </div>
    );
}

export default ItemRecomendado;
