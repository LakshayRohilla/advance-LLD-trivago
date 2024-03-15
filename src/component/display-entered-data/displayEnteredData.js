import { useSelector } from 'react-redux';
import { useState } from 'react';

export default function DisplayEnteredData({}) {
    const data = useSelector((state) => state.search);
    
    if(data?.buttonClick == 'true') {
        return (
            <>
            <p>DisplayEnteredData start</p>
                <p>The entered data is :</p><b>Location :</b> {data.selectedLocation} <br/>
                <b>Button click :</b> {data.buttonClick}
            <p>DisplayEnteredData End</p>
            </>
        )
    } 
}