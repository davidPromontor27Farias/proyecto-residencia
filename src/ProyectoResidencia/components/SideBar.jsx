import { Box, Drawer, Grid, Link, Toolbar, Typography } from '@mui/material'
import {Link as LinkRouter} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CaracteristicaAsignatura } from '../pages/CaracteristicaAsignatura'

export const SideBar = ({drawerWidth}) => {

    const {displayName, photoUrl} = useSelector(state => state.auth)

    
    


    return (
        <Box
            component="nav"
            sx={{
                width: {sm: drawerWidth},
                flexShrink: {sm: 0},
            
            }}
        >
            <Drawer
                variant='permanent'
                open={true}
            
        
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#2E4053 ',
                        height: 'auto', 

                    }}
                >
                    <Toolbar  
                    >
                        <Grid
                            container="true"
                            alignContent='center'
                            justifyContent='center'
                            borderRadius='50'
                        >
                            <Box
                                component="img"
                                alt="imagen de usuario"
                                src={photoUrl}
                            />
                            <Typography 
                                variant='h6' 
                                noWrap component="div"
                                sx={{
                                    color: 'white'
                                }}
                            >

                                {displayName}
                            </Typography>

                        </Grid>

                        
                    </Toolbar>

                    <Toolbar>
                        <Grid
                            container
                            alignContent="center"
                          
                            
                        >
                            <Typography
                                sx={{
                                    color:"white",
                                    mt: 10,
                                    mb: 5
                                    
                                }}
                            >
                                Enlaces
                            </Typography>

                            <Link 
                                component={LinkRouter}
                                to='/drag-and-drop/caracteristica-asignatura'
                                container
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    paddingBottom: 1,
                                    marginBottom: 2,
                                    alignItems: "center",
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/caracteristicas-asignatura.png"
                                />
                                Caracteristicas de la asignatura
                            </Link>
                            <Link component={LinkRouter}
                                container
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    paddingBottom: 1,
                                    marginBottom: 2,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/intencion-didactica.png"
                                />
                                Intencion didactica
                            </Link>
                            <Link component={LinkRouter}
                                container
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/competencia-asignatura.png"
                                />
                                Competencia de la asignatura
                            </Link>
                            <Link component={LinkRouter}
                                container
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/subtemas-desarrollar.png"
                                />
                                Temas y subtemas a desarrollar
                            </Link>
                            <Link component={LinkRouter}
                                container
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginBottom: 2,
                                    paddingBottom: 1,
                                    borderBottom: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/actividades-aprendizaje.png"
                                />
                                Actividades de aprendizaje deseadas
                            </Link>

                        </Grid>

                        
                    </Toolbar>

                    <Toolbar>
                        <Grid
                            alignContent="center"
                        >
                            <Typography
                                sx={{
                                    color:"white",
                                    mt: 2,
                                    mb: 3
                                    
                                }}
                            >
                                My tools
                            </Typography>

                            <Link component={LinkRouter}
                    
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    padding: .5,
                                    marginBottom: 2,
                                    alignItems: "center",
                                    border: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/notas.png"
                                />
                                Mi notepad

                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        marginLeft: 1,
                                        filter: 'invert(100%)'
                                    }}
                                    src="./icons/arrow.png"
                                />
                            </Link>
                            <Link component={LinkRouter}
                    
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    padding: .5,
                                    marginBottom: 2,
                                    alignItems: "center",
                                    border: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/calendario.png"
                                />
                                Mi calendario

                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        marginLeft: 1,
                                        filter: 'invert(100%)'
                                    }}
                                    src="./icons/arrow.png"
                                />
                            </Link>

                            <Link component={LinkRouter}
                    
                                sx={{
                                    color: "white",
                                    fontSize: 15,
                                    display: 'flex',
                                    justifyContent: "space-between",
                                    padding: .5,
                                    marginBottom: 2,
                                    alignItems: "center",
                                    border: "1px solid",
                                    textAlign: "end"
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 40,
                                        width: 40,
                                        marginRight: 2
                                    }}
                                    component="img"
                                    alt="icono de caracteristicas de la asignatura"
                                    src="./icons/todoList.png"
                                />
                                Mi todolist

                                <Box
                                    component="img"
                                    sx={{
                                        height: 25,
                                        width: 25,
                                        marginLeft: 1,
                                        filter: 'invert(100%)'
                                    }}
                                    src="./icons/arrow.png"
                                />
                            </Link>
                        </Grid>
                    </Toolbar>
                </Box>

            </Drawer>
        
        </Box>
    )
}

