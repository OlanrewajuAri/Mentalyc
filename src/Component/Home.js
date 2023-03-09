import React from "react";
import Help from "../Images/Help.svg";
import { HomeFlex, HomeFlexP } from "./MyStyles/Home";
import UploadComponent from "./UploadComponent";

const Home = () => {
  return (
    <div className="container">
      <HomeFlex>
        <div>
          <HomeFlexP>Hi, Maria</HomeFlexP>
        </div>

        <div data-bs-toggle="tooltip" className= "d-none d-md-block" data-bs-placement="top" title="Hi there!">
          <img src={Help} alt="African Cobblers Logo" />
        </div>
      </HomeFlex>
  
      <UploadComponent />
    </div>
  );
};

export default Home;
