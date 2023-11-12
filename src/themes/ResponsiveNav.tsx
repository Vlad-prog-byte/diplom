import { Box, styled } from "@mui/material";
import { theme }  from "./theme";

const ResponseNav = styled(Box)(() => ({
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-start",
    flexWrap: "wrap",
    // [1536, +)
    [theme.breakpoints.up('lg')]: {
        fontSize: 20,
        gap: "20px 100px",
        // gridColumnGap: "20px"

        
    },
    // [600, 1200)
    [theme.breakpoints.between('sm', 'lg')]: {
        fontSize: 15,
        // gap: "50px",
        // gridColumnGap: "20px"
    },
    // [300, 600)
    [theme.breakpoints.between('mobile', 'sm')]: {
        fontSize: 12,
        gap: "10px"
    }
}));

export default ResponseNav;
