import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(field, fieldName, theme) {
  return {
    fontWeight:
      fieldName.indexOf(field) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function FieldModal({fields,fieldsName}) {
  const theme = useTheme();
  const [fieldName, setFieldName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFieldName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
      <FormControl    sx={{ m: 1,margin:0, marginTop:0,width: 300, mt: 3 }}>
        <Select   
          multiple
          displayEmpty
          value={fieldName}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{fieldsName}</em>;
            }

            return selected.join(', ');
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem className="formControl"  disabled value="">
            <em>{fieldsName}</em>
          </MenuItem>
          
          {fields.map((field) => (
            <MenuItem
              key={field}
              value={field}
              style={getStyles(field, fieldName, theme)}
            >
              {field}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
  );
}