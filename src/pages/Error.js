import React from "react";
import NavbarComponent from "./../Components/NavbarComponent";
function Error() {
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className="container text-center">
       
        <img src="./images/error404.gif" alt="error_image" style={{width:"60%",height:"60%"}}></img>
      </div>
    </div>
  );
}

export default Error;
