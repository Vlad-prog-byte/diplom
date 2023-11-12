import { Avatar, styled } from "@mui/material";
import { theme }  from "./theme";

// xs: 0,
// mobile: 300,
// mobile_plus: 450,
// sm: 600,
// md: 900,
// lg: 1200,
// xl: 1536,

const ResponseAvatar = styled(Avatar)(() => ({
  backgroundColor: "blue",
  // [1536, +)
  [theme.breakpoints.up('xl')]: {
      width: 100,
      height: 100
  },
  // [1200, 1536)
  [theme.breakpoints.between('lg', 'xl')]: {
    width: 100,
    height: 100,
  },
  // [600, 1200)
  [theme.breakpoints.between('sm', 'lg')]: {
    width: 70,
    height: 70
  },
  // [450, 600)
  [theme.breakpoints.between('mobile_plus', 'sm')]: {
    width: 50,
    height: 50
  },
  // [300, 450)
  [theme.breakpoints.between('mobile', 'mobile_plus')]: {
    width: 50,
    height: 50
  }
}));

export default ResponseAvatar;
