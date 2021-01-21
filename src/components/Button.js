import React from 'react';

const Button = (props) => {
    return (
       <button style={{backgroundColor: 'white' , borderColor: "#a2dbea" , borderWidth: 3 , height: 30 , width: 110 , borderRadius: 5}} >{props.content}</button>
    );
}

export default Button;
