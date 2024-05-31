import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { SideBar } from "../components/SideBar";

const drawerWidth= 240;

export const AppLayout = ({children}) => {
  return (
    <Box
        sx={{backgroundColor: 'primary.main', height: 'auto', display: 'flex'}}
    >
        <NavBar
          drawerWidth={drawerWidth}
        />
        <SideBar
          drawerWidth={drawerWidth}
        />
        <Box component="main"
          sx={{flexGrow: 1, p: 3}}
        >
          {children}
        </Box>
        
 
    </Box>
  )
}
