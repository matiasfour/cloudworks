import React from 'react';
import Title from './Title';
import Image from "./Image"
import Text from "./Text"
import "./styles/figura.css"
const figura = (props) => {
    return (
        <div className="figura">
        <Title  title={props.title.title} size={props.title.size} />
            <div className="bottomfig">
                
                <Image   path={props.path} width={80} />
           

            <Text  content={props.text.content}  size={props.text.size} family={props.text.family} weight={props.text.weight} mleft={props.text.mleft} mtop={props.text.mtop}/>
            </div>
        </div>
    );
}

export default figura;
