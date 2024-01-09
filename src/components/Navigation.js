import React from "react";

function Navigation({appName}) {
  return (
    <nav className='navbar navbar-dark bg-dark'> 
      <h4 className='h4 text-white me-auto'>
        {appName}
      </h4>
    </nav>
  );
}

export default Navigation;