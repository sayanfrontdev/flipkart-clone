import React from "react";
import { TextField, Autocomplete } from "@mui/material/";

const SearchBar = () => {
  return (
    <Autocomplete
      disablePortal
      id="searchbar"
      options={options}
      popupIcon={null}
      sx={{ width: 500, borderRadius: 12 }}
      renderInput={(params) => (
        <TextField {...params} placeholder="Search for Products" />
      )}
    />
  );
};

const options = ["Electronics", "Men's Wear", "Women's Wear", "Accesories"];

export default SearchBar;
