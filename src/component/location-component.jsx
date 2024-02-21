import * as React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function Location() {
  return (
    <Stack sx={{mt: -2}}>
      <Autocomplete 
        id="size-small-standard"
        size="small"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField 
            {...params}
            variant="standard"
            label="Where to ?"
            placeholder="Favorites"
            InputProps={{...params.InputProps, disableUnderline: true}} 
          />
        )}
      />
    </Stack>
  );
}

const top100Films = [
  { title: 'Jaipur' },
  { title: 'Delhi' },
  { title: 'Mumbai'},
  { title: 'Kolkata'},
  { title: 'Chennai'},
];


