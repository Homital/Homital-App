import React from 'react';

import { useHistory } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function TopBar() {
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className="cursor-pointer" onClick={() => history.push('/')}>
          Homital
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
