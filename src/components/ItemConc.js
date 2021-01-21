import React from 'react';
import Title from "./Title"
import Image from "./Image"
import Button from "./Button"
import Text from './Text'
import "./styles/itemConc.css"
import Img from "./images/messi2.png"
const ItemConc = (props) => {
    return (
      
        <div className="itemConcurso">
            <div className="vertical">
                <Title  title={props.title.title} size={props.title.size} />
                <Image  path={Img} width={props.img.width} height={props.img.height} />
            </div>
            <div>
                <Text content={props.text.content}  size={props.text.size} family={props.text.family} weight={props.text.weight} mleft={props.text.mleft} ptop={props.text.ptop} mb={props.text.mb} />   
                <Button content={"PARTICIPAR"}/>
            </div>
        </div>
    );
}

export default ItemConc;
