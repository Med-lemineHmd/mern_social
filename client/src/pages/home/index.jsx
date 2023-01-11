import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
    </Box>
  );
};

export default HomePage;
