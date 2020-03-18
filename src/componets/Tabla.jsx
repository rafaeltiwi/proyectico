import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const Tabla = (props) => {
    return ( 
        <TableContainer>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Usuario</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Accion</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
                props.Users.map(user => (
                    <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell align="center">{user.email}</TableCell>
                    <TableCell align="center">
                    <button className="btn btn-warning mx-1">Editar</button>
                    <button className="btn btn-danger mt-1" onClick={() => props.deleteUser(user.id)}>Eliminar</button>

                    </TableCell>
                    </TableRow>

                ))
             
      }
        </TableBody>

        
      </Table>
    </TableContainer>

     );
}
 
export default Tabla;