import React from 'react';

const Title = (props) => {
    return (
        <h2 style={{fontSize: props.size , fontFamily: props.family , fontWeight: props.weight , padding: 0 , marginLeft: props.mleft, marginBottom: props.mb}} >{props.title}</h2>
    );
}

export default Title;
