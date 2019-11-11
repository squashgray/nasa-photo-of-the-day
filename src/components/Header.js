import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

function Header() {
  return (
    <div>
      <AppBar
        position="static"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537420327992-d6e192287183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80')",
          height: "200px"
        }}
      >
        <Typography
          variant="h2"
          align="center"
          style={{
            margin: "60px",
            fontFamily: "Impact, fantasy"
          }}
        >
          Astronomy Picture of the Day!
        </Typography>
      </AppBar>
    </div>
  );
}

export default Header;
