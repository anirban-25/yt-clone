import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';
import { red } from '@mui/material/colors';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm)
    {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return (
    <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '2px solid #e3e3e3', pl: 2, boxShadow: 'none', mr: {sm: 5} 
        }}
    >
        <input className='search-bar' placeholder='search...'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ color:'red'}}>
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar