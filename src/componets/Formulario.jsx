import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Formulario = () => {
    return (
        
        <form>
            <Grid 
                container spacing={6}
                direction="column"
                justify="center"
                alignItems="flex-start"
            >
                <TextField label="Nombre" variant="outlined" color="primary">
                </TextField>
                <Button >Enviar</Button>
            </Grid>
        </form>


      );
}
 
export default Formulario;