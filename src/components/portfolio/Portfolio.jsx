import React from "react";
import { Box, Typography } from "@mui/material";

import { Myinfo } from "../../myinfo/Myinfo";
import pic from "../../assets/img.png";

import './portfolio.css'

export const Portfolio = () => {
  return (
    <Box
      component={"section"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={5}
      height={"80vh"}
    >
      <Box>
        <img src={pic} className='my_image' />
      </Box>
      <Box>
        <h1 style={{fontSize:"2rem"}}>
          Hi, I'm{" "}
          <span style={{color:"greenyellow"}}>
            {Myinfo.firstName}
            {" "}
            {Myinfo.middleName}
          </span>
          <span>🤚</span>
        </h1>
        <h2>I'm a {Myinfo.position}.</h2>
      </Box>
    </Box>
  );
};
