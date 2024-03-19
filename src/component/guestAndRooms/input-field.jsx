import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const InputField = function({data}){
    return (
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '5ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" variant="outlined" value={data}/>
    </Box>
    );
}

export default InputField;