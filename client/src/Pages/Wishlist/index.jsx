import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import './Wish.scss'
import { useProvider } from '../../Context/Educatecontext';
function Index() {
    const { favs, setFavs } = useProvider()
    const handleDelete = (id) => {
        setFavs(favs.filter(x => x._id !== id))
    }
    return (
        <div className='wish' style={
            { height: "100vh" }
        }>
            <TableContainer component={Paper}>
                <Table style={{ marginTop: "100px" }} sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Info</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {favs.map((element) => (
                            <TableRow
                                key={element._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {element.title}
                                </TableCell>
                                <TableCell >{element.info}</TableCell>
                                <TableCell ><Button onClick={() => { handleDelete(element._id) }} variant="contained">Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Index