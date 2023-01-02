import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

import "./nav.css";

const links = [
  {
    name: "Home",
    to: "/",
    active: "home",
  },
  {
    name: "About Me",
    to: "/about",
    active: "about",
  },
  {
    name: "Projects",
    to: "/projects",
    active: "projects",
  },
];

export const Nav = () => {
  return (
    <Box component={"nav"} width={"100%"}>
      <Box
        component={"ul"}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        {links.map((link, index) => {
          return (
            <Box
              component={"li"}
              key={index}
              sx={{
                listStyle: "none",
              }}
            >
              <Link to={link.to} style={{ textDecoration: "none" }}>
                {link.name}
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
