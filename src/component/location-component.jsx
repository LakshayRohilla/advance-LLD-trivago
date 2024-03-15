import * as React from 'react';
import { useState, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux";
import { location } from '../store/searchSlice';

export default function Location() {
  const dispatch = useDispatch();
  // const top100Films = [
  //   { title: 'Jaipur' },
  //   { title: 'Delhi' },
  //   { title: 'Mumbai'},
  //   { title: 'Kolkata'},
  //   { title: 'Chennai'},
  // ];

  const cities = ["Jaipur", "Delhi", "Mumbai", "Kolkata", 'Chennai'];
  const [selectedCity, setSelectedCity] = useState();
  // const [cityInputValue, setCityInputValue] = useState("");
  useEffect(()=>{
    if(selectedCity!==undefined){
      console.log(selectedCity);
      // In the dispatch we are having the reducer name.
      dispatch(location(selectedCity))
    }

    // Now inside it we set a state for the state management.
  }, [selectedCity, dispatch]);
  // console.log(selectedCity);
  

  return (
    <Stack sx={{mt: -2}}>
      <Autocomplete 
      // ----------------------------------
      value={selectedCity}
      onChange={(event, newCity) => {
        setSelectedCity(newCity);
      }}
      // inputValue={cityInputValue}
      // onInputChange={(event, newCityInputValue) => {
      //   setCityInputValue(newCityInputValue);
      // }}
      // --------------------------------------
        id="size-small-standard"
        size="small"
        options={cities}
        // --------------------------------------In case we have the provided array as a object "START"--------------------------
        // options={top100Films}
        // getOptionLabel={(option) => option.title}
        // --------------------------------------In case we have the provided array as a object "END"--------------------------
        renderInput={(params) => (
          <TextField 
            {...params}
            variant="standard"
            label="Where to ?"
            InputProps={{...params.InputProps, disableUnderline: true}} 
          />
        )}
      />
    </Stack>
  );
}




