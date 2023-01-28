import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Detail.scss'
function Index() {
    const navigate = useNavigate()
    const [userdetails, setUserDetails] = useState([])
    let { supid } = useParams()

    const getuserbyid = async () => {
        let response = await axios.get(`http://localhost:4000/users/${supid}`)
        setUserDetails(response.data)
    }

    useEffect(() => {
        getuserbyid()
    }, [])


    return (
        <div className='details'>
            <Card className='card' sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                        {userdetails.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {userdetails.info}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => { navigate("/") }}>Go back</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default Index