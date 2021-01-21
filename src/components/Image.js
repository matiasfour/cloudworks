import React from 'react';

const Image = (props) => {
    return (
       <img  style={{width : props.width}} src={props.path} alt={props.alt}/>
    );
}

export default Image;
