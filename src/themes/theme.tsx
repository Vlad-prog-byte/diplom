import { createTheme } from "@mui/material";
import { blue, purple } from "@mui/material/colors";


declare module "@mui/material/styles" {
    interface BreakpointOverrides {
      xs: true; // removes the `xs` breakpoint
      mobile: true;
      mobile_plus: true;
      sm: true;
      md: true;
      lg: true;
      xl: true;
    }
  }
  
  
  
  export const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        mobile: 300,
        mobile_plus: 450,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      }
    },
    palette: {
      primary: blue,
      secondary: purple,
    },
    typography: {
      fontFamily: [
        "ALS_Sector",
        "ALS_Sector-Stencil",
      ].join(","),
    }
  });
  