import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {checkOutTime} from '../../store/searchSlice';


export default function CheckOut() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(dayjs());
  const currentDateCheck = value.isBefore(dayjs());
  const oneYearAhead = dayjs().add(1, 'year');
  useEffect(()=>{
    console.log(`Check Out Time : ${value.format('DD/MM/YYYY h:mm:ss A')}`);
    // Now inside it we set a state for the state management.
    if(currentDateCheck) alert('Cant select date from past !!!!!');
    else if(value.isAfter(oneYearAhead)) alert('Cannot select dates more than 1 year in advance');
    else dispatch(checkOutTime(value.format('DD/MM/YYYY h:mm:ss A')));
  }, [value]);

  const InputCSS = {
    "& .MuiStack-root": {
      padding: 0
    },
    "& .MuiInputBase-input": {
      padding: 0,
    },
  }
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer
        components={[
          'MobileDateTimePicker',
        ]}
        sx={{
          paddingTop: '0px'
          }}
      >
        <DemoItem >
          <MobileDateTimePicker  
          label="Check-Out"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          slotProps={{ textField: { variant: 'standard', } }}
          sx={{
            ...InputCSS,
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
