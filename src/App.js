import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Formulario from './componets/Formulario'
//import MenuIcon from '@material-ui/icons/Menu';

function App() {
  return (
    //Barra de tareas
    <Container maxWidth="md">
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start"  color="inherit" aria-label="menu">
            
            </IconButton>
            <Grid container
                  direction="row"
                  justify="space-between"
                  alignItems="flex-start"
              >
                <Typography variant="h6" >
                  Formulario CRUD 
                </Typography>

                <Typography variant="h6">
                    Hecho por Rafael Fuentes
                </Typography>
            </Grid>
            
          </Toolbar>
        </AppBar>

        
        <Grid container spacing={6} >

            <Grid item xs={6}>
              <h1>Formulario</h1>
              <Formulario />
            </Grid>
            <Grid item xs={6}>
              <h1>Tabla</h1>
            </Grid>
        </Grid>


  </Container>
  );
}

export default App;
