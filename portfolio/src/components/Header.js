import React from "react";
import {Link} from 'react-router-dom';


const Header = props =>{
    return(
        <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
            <Link to="/">Home</Link> |{" "}          
            <Link to="/globalTime">Global time</Link> |{" "}
        </nav>
    )
}

export default Header;