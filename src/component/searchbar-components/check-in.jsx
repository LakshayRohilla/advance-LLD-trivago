import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkInTime } from '../../store/searchSlice';

export default function CheckIn() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(dayjs());
  useEffect(()=>{
    console.log(`Check In Time : ${value.format('DD/MM/YYYY h:mm:ss A')}`);
    // Now inside it we set a state for the state management.
    dispatch(checkInTime(value.format('DD/MM/YYYY h:mm:ss A')));
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
          label="Check-In"
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
