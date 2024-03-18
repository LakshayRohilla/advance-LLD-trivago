import * as React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { searchButton } from '../store/searchSlice';

export default function SearchButton() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.search);
  // const [buttonClick, setButtonClick] = useState('false');
  // useEffect(() => {
  //   dispatch(searchButton(buttonClick));
  // },[buttonClick]);

  function clickHandler() {
    console.log("click handler is working !!!");
    // setButtonClick("true");
    dispatch(searchButton("true"));
    console.log(data);
  }

  return (
      <Button variant="contained" sx={{width: '85%'}} onClick={clickHandler}>Search</Button>  
  );
}

// we must have the get a function in props from the displayEnteredData component and then on the button click we should send the data to that component 