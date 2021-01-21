import React from 'react';

const Text = (props) => {
    return (
      <p style={{fontSize: props.size , fontFamily: props.family , fontWeight: props.weight , paddingTop: props.ptop, textAlign: 'left' ,  padding: 0 , marginLeft: props.mleft ? props.mleft : 0 , marginBottom: props.mb}}>
            {props.content}
      </p>
    );
}

export default Text;
