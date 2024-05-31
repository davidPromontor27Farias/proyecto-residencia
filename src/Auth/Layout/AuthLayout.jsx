import { Grid, Typography } from "@mui/material"


export const AuthLayout = ({children, title = ""}) => {
  return (
    <Grid
      container
      direction="row"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      
      sx={{minHeight: "100vh", backgroundColor: "primary.main" }}
    >
      <Grid 
        item
        className="side-left"
        justifyContent="center"
        alignItems="center"
        display={{xs:"none", sm:"flex"}}
        xs={6}
        sx={{minHeight: "100vh", justifyContent: "center", alignItems: "center"}}
        >
          <Typography
            sx={{fontSize: {sm: 20, md: 25}, color: "colorText.main", textTransform: "uppercase", position: "absolute", zIndex: 4}}
            >Planificadora Para docentes</Typography>
      </Grid>
      <Grid
        item
        className="sideRight "
        justifyContent="center"
        alignItems="center"
        xs={10}
        sm={6}
        sx={{padding: 3,display: "flex",justifyContent: "center", alignItems: "center", position: "relative" }}

      >

        <Grid
          item
          className="box-shadow contain-form "
          sx={{ padding: 2.5, width: {sm: 550}, borderRadius: 2}}

        >

            {children}
         </Grid>
      </Grid>
    </Grid>
  )
}

