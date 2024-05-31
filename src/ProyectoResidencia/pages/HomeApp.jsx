import { Grid } from "@mui/material"
import { AppLayout } from "../Layout/AppLayout"
import { InicialPage } from "../views/InicialPage"

export const HomeApp = () => {
  return (
    <AppLayout
      className="animate__animated animate__fadeIn"
  >

      <InicialPage/>
    </AppLayout>
  )
}

