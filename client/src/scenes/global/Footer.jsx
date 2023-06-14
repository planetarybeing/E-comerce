import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../..themes";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp()20%, 30%, 40%">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.secondary[500]}
          >
            SPADES
          </Typography>
          <div>
            Purus neque curae tristique ultricies tempor aenean adipiscing eu
            elit morbi ligula etiam mauris risus augue volutpat ipsum aptent
            velit lorem dictum consequat in erat sapien faucibus quam porttitor
          </div>
          <Box>
            <Typography vairant="h4" fontWeight="bold" mb="30px">
              About Us
            </Typography>
            <Typography mb="30px">Careers</Typography>
            <Typography mb="30px">Our Stores</Typography>
            <Typography mb="30px">Terms & Conditions</Typography>
            <Typography mb="30px">Privacy Policy</Typography>
          </Box>

          <Box>
            <Typography vairant="h4" fontWeight="bold" mb="30px">
              Customer Care
            </Typography>
            <Typography mb="30px">Help Center</Typography>
            <Typography mb="30px">Track Your Order</Typography>
            <Typography mb="30px">Corperate & Bulk</Typography>
            <Typography mb="30px">Returns & Refunds</Typography>
          </Box>
        </Box>
        <Box width="clamp()20%, 25%, 30%">
          <Typography vairant="h4" fontWeight="bold" mb="30px">
            Contact Us
          </Typography>
          <Typography mb="30px">500 Broadway| NY, NY 10012</Typography>
          <Typography mb="30px">Email: Bussines@companyemail.com</Typography>
          <Typography mb="30px">(555) 222 7777</Typography>
        </Box>
      </Box>
    </Box>
  );
};
