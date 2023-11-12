import { Box, styled } from "@mui/material";

// xs: 0,
// mobile: 300,
// mobile_plus: 450,
// sm: 600,
// md: 900,
// lg: 1200,
// xl: 1536,

const ResponsiveFooterInfo = styled(Box)(() => ({
    display: "flex",
    justifyContent: "center",
    padding: "10px 20px 15px",
    color: "white",
    gap: "10%",
}))


export default ResponsiveFooterInfo;