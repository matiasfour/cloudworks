import React from 'react'
import Image from "./Image";
import Text from "./Text"
import Img from "./images/messi.png"
import "./styles/noticias.css"
function ItemNoticia(props) {
    return (
        <div className="noticia">
                
            <Image  path={Img}  />
            <Text  content={props.text.content}  size={props.text.size} family={props.text.family} weight={props.text.weight} mtop={props.text.mtop} mleft={props.text.mleft}  />
        </div>
    )
}

export default ItemNoticia
