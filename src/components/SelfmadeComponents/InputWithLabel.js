import React from 'react';
import {TextField, InputLabel} from '@material-ui/core';

function InputWithLabel({
    divStyle,
    id,
    label,
    variant
}) {
  return (
    <div style={divStyle}>
      <div style={{ display: "flow" }}>
        <InputLabel>{label} </InputLabel>

        <TextField id={id} variant={variant ? variant : "outlined"} />
      </div>
    </div>
  );
}

export default InputWithLabel;