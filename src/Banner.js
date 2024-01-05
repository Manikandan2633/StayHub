import React from 'react';
import './Banner.css';
import { Button } from "@material-ui/core";
import { useState } from 'react';
import Search from './Search';
import { useNavigate } from "react-router-dom";
function Banner() {
  const [ showSearch,setShowSearch]=useState(false);
   const navigate=useNavigate();
  return (
    <div className='banner'>
      <div className="banner_search">
        {showSearch && <Search />}
        <Button className="banner_searchBtn" variant="outlined" onClick={()=>setShowSearch(!showSearch)}>
          {showSearch ? "hide":"Search Dates"}
          </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h5>Plan a different kind of gateway to uncover the hidden gems near you.</h5>
        <button className="btn" onClick={() => navigate('/search')} variant='outlined'>Explore Nearby</button>
      </div>
    </div>
  )
}

export default Banner