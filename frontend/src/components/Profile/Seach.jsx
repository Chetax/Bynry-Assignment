import React, { useEffect } from 'react';
import { styled } from '@mui/system';

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const StyledInput = styled(TextField)(
  ({ theme }) => ({
    position: 'relative',
    '& .MuiInputBase-input': {
      padding: '8px 25px 8px 8px', // Adjust padding
      height: '22px', // Adjust height
      width: "300px", // Default width
    },
    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: 0,
      top: '50%', // Center vertically
      transform: 'translateY(-50%)', // Center vertically
    },
    '@media (max-width: 386px)': {
      '& .MuiInputBase-input': {
        width: '240px', // Decreased width for smaller screens
      },
    },

  })
);

const SearchBar = ({user,setuser}) => {
  useEffect(()=>{},[user])
  console.log(user);
  return (
    <StyledInput
    sx={{mb:5}}
      placeholder="Search..."
      variant="outlined"
    type="text"
    value={user}
    onChange={(e)=>{setuser(e.target.value)}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end"  value={"user"}
          onChange={(e)=>{setuser(e.target.va)}}>
            <SearchIcon sx={{ fontSize: 28,cursor:"pointer" }} />
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchBar;
