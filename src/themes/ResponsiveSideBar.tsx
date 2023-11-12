import { Box, styled } from "@mui/material";
import { blue } from "@mui/material/colors";
import { theme }  from "./theme";

// xs: 0,
// mobile: 300,
// mobile_plus: 450,
// sm: 600,
// md: 900,
// lg: 1200,
// xl: 1536,

const ResponseSideBar = styled(Box)(() => ({
    // что с этим делать?
    height: "70vh",
    backgroundColor: blue[700],
    color: "white",
    display: "flex",
    flexDirection: "column",
    // [1200, 1536)
    [theme.breakpoints.up('lg')] : {
        paddingTop: 50,
        paddingLeft: 20,
        paddingRight: 40,
        gap: 20
    },
    // [900, 1200)
        [theme.breakpoints.between('md', 'lg')] : {   
        paddingTop: 40,
        paddingLeft: 20,
        paddingRight: 10,
        gap: 15
    },
    // [450, 900)
    [theme.breakpoints.between('mobile_plus', 'md')] : {
        fontSize: 14,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 10,
        gap: 10
    },
    // [300, 450)
    [theme.breakpoints.between('mobile', 'mobile_plus')] : {
        fontSize: 14,
        paddingTop: 30,
        paddingLeft: 15,
        paddingRight: 5,
        gap: 5
    },
}));

export default ResponseSideBar;
