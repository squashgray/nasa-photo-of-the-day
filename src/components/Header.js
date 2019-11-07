import React from "react";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'



function Header() {
    return (
      <div>
        <AppBar position='static' >
          <Toolbar>
            <Typography variant='title' color='white'>
              Astronomy Picture of the Day!
            </Typography>

          </Toolbar>

        </AppBar>
      </div>
    );
  }

  export default Header;