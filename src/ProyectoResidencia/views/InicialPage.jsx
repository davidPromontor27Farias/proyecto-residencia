import { Box, Grid, Typography } from "@mui/material"

export const InicialPage = () => {
  return (
    <Grid
        container
        spacineg={0}
        direction="column"
        alignItems="center"

        sx={{
        
            minHeight: "calc(100vh - 110px)",
            borderRadius: 5
        }}
    >
        <Typography 
            component="h1"
            sx={{
                textAlign: "center",
                color: "white",
                marginTop: '110px',
                textTransform: "uppercase",
                fontSize: 25
            }}
            >
            Instrumentacion Didactica Para La Formacion y El Desarrollo De Competencias Profesionales.
        </Typography>
        <Typography component="h2"
            sx={{
                color: "white",
                fontSize: 20,
                textTransform: 'uppercase',
                mt: 5
            }
            }
        >
            Periodo Febrero - Junio 2024
        </Typography>

        <Box
            component="img"
            src="./icons/homeImg.png"
            sx={{
                width: '400px',
                mt: 6
            }}
        />
    </Grid>
  )
}

