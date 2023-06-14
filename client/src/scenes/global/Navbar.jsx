import { useDispatch, useSelector } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../state";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <Box
      dsiplay="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="rgba(255, 255 ,255, 0.95)"
      color="black"
      postion="fixed"
      top="0"
      left="0"
      zIndex={"1"}
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justification="space=between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate("/")}
          sx={{ "&:hover": { cursor: "pointer " } }}
          color={shades.secondary[500]}
        >
          Grove
        </Box>
        {/* Material UI Buttons Spacing*/}
        <Box
          display="flex"
          justificationContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>
          {/* Shopping Bag styling */}
          <Badge
            badgeContent={cart.lenght}
            color="secondary"
            inivisible={cart.lenght === 0}
            sx={{
              "& .MuiBadge-badge": {
                right: 5,
                top: 5,
                paddding: "0 4px",
                height: "14px",
                minWidth: "13px",
              },
            }}
          >
            <IconButton
              onClick={() => dispatch(setIsCartOpen({}))}
              sx={{ color: "black" }}
            >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton sx={{ color: "black" }}>
            <MenuOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
