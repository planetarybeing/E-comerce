import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";

const Subscribe = () => {
  const [email, seteEmail] = useState("");

  return (
    <Box width="80%" margin="80% auto" textAlign="center">
      <Typography>
        <MarkEmailReadOutlinedIcon fontSize="large" />
      </Typography>
      <Typography variant="h3">Subscribe To Our Newsletter</Typography>
      <Typography>
        and recive 20% off on your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => seteEmail(e.target.value)}
          value={email}
        />
        <Divider sw={{ height: 28, m: 0.5 }} orientaion="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
    </Box>
  );
};
