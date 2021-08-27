import React, { useState } from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function HomeDeviceView() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="flex flex-row">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          className="flex-grow-0 flex-shrink"
        >
          <Tab label="Favorite" />
          <Tab label="Living Room" />
          <Tab label="Bedroom" />
          <Tab label="Corridor" />
          <Tab label="Restroom" />
        </Tabs>
        <IconButton aria-label="menu" className="text-gray-600 py-0 pr-0 pl-2" onClick={handleMenuClick}>
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Manage Rooms</MenuItem>
          <MenuItem onClick={handleClose}>All Devices</MenuItem>
        </Menu>
      </div>
    </div>
  );
}
