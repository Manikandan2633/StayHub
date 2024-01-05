import React from 'react';
import './Search.css';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import {Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
import { useNavigate } from "react-router-dom";


function Search() {
  const [startDate,setStartDate] = useState(new Date());
  const [endDate,setEndDate] = useState(new Date());
  const selectionRange = {
    startDate : startDate,
    endDate : endDate,
    key:"selection"
  };
  const navigate=useNavigate();
  function handleSelect(ranges){
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={
        [selectionRange]} onChange={handleSelect} />

        <h3>
          Number of Guests <input type="number" min={0} defaultValue={2} className="people_cnt" /> <PeopleIcon />
        </h3>
        <Button className="btn" onClick={() => navigate('/search')} >Search</Button>
        
    </div>
  )
}

export default Search