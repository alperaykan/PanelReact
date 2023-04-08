import React from 'react'
import {InputLabel, MenuItem, Select} from '@material-ui/core';
import PropTypes from 'prop-types'

BasitSelect.propTypes = {
  data : PropTypes.isRequired,
  divStyle : PropTypes.isRequired,
  id : PropTypes.isRequired,
  label : PropTypes.string.isRequired,
  size: PropTypes.string,
  multiple : PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  autoWidth : PropTypes.bool,
  value : PropTypes.any.isRequired,
  variant : PropTypes.string
}

function BasitSelect({
    data,
    divStyle,
    label,
    id,
    size,
    multiple,
    onChange,
    autoWidth,
    value,
    variant,
}) {

  return (
    <div style={divStyle}>
      <div style={{ display: "flow" }}>
        <InputLabel>{label}</InputLabel>
        <Select
          id={id}
          value={value}
          variant={variant ? variant : "outlined"}
          autoWidth={autoWidth ? true : false}
          size={size ? size : "medium"}
          onChange={onChange}
          multiple={multiple ? true : false}
        >
          {data
            ? data.map((option) => (
                <MenuItem value={option.id} key={option.id}>
                  {option.isim}
                </MenuItem>
              ))
            : null}
        </Select>
      </div>
    </div>
  );
}

export default BasitSelect;