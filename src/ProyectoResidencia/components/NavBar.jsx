
import { Calculate, LogoutOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/auth/thunks'

export const NavBar = ({drawerWidth}) => {

    const dispatch = useDispatch();

    const onExit = () => {
        
        dispatch(startLogout());
    }


  return (
    <AppBar
        position="fixed"
        sx={{
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            backgroundColor: '#2874A6', 
            padding: 2
        
        }}

    >
        <Grid
            container
            justifyContent='space-between'
            alignItems='center'
            className="modifyContain" 
        >

            <Typography>
                DRAG AND DROP
            </Typography>
            


            <Toolbar>
                
                <Grid>

                    <IconButton
                        onClick={onExit}
                        color="error"
                    >
                        <LogoutOutlined/>
                    </IconButton>
                </Grid>
            </Toolbar>

        </Grid>
    </AppBar>
  )
}

