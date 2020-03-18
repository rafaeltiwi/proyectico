import React, {useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Formulario from './componets/Formulario'
import Tabla from './componets/Tabla';
import {v4 as uuidv4} from 'uuid';
//import MenuIcon from '@material-ui/icons/Menu';

function App() {

  const Datos = [
    {id:uuidv4() , name:"Rafael Fuentes" , email:"rafaeltiwifuentes@gmail.com"},
    {id:uuidv4() , name:"Yerardy Jaimes" , email:"yerardy.jaimes@unet.edu.ve"}
]

  const [Users, setUsers] = useState(Datos)

  const addUser = (user) =>
  {
      //console.log(user)
      user.id = uuidv4()
      setUsers([
        ...Users,
        user
      ])

  }
  const deleteUser = (id) =>
  {
    setUsers(Users.filter(user => user.id !== id))

  }

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
                  alignItems="center"
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

        
        <Grid container >

            <Grid item xs={6}>
              <h1>Formulario</h1>
              <Formulario item xs={6} addUser={addUser} />
            </Grid>
            <Grid item xs={6}>
              <h1>Tabla</h1>
              <Tabla Users={Users} deleteUser={deleteUser} />
            </Grid>
        </Grid>


  </Container>
  );
}

export default App;
