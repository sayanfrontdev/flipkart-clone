import { Box, Card, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.svg";
import "./header.css";
import SearchBar from "../../common/search";
import Popover from "@mui/material/Popover";
import AccountMenu from "../../common/accountMenu";

const Header = () => {
  return (
    <Box>
      <Card
        sx={{
          borderRadius: 0,
          padding: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
        }}
      >
        <img src={logo} alt="logo" className="header_logo" />
        <SearchBar />
        <AccountMenu />
      </Card>
    </Box>
  );
};

export default Header;
