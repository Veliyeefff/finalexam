import React, { useEffect, useState } from 'react'
import Cards from '../Cards/Cards'
import axios from 'axios'
import './Features.scss'
import Button from '@mui/material/Button';
import { useProvider } from '../../Context/Educatecontext'
function Features() {
    const { users, setUsers } = useProvider()
    const { searchusers, setSearchUsers } = useProvider()
    const [sortuser, setSortUsers] = useState([])
    const [toggle, setToggle] = useState(false)
    const getUsers = async () => {
        let res = await axios.get("http://localhost:4000/users")
        setUsers(await res.data)
        setSortUsers(await res.data)
    }
    useEffect(() => {
        getUsers()
    }, [])

    const handleSort = () => {
        setToggle(!toggle)
        toggle ? setUsers([...sortuser], sortuser) : setUsers([...users].sort((a, b) => a.title.localeCompare(b.title)))
    }

    return (
        <div id='features'>
            <div className="features-text">
                <h2>Features That Make Us Hero</h2>
                <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.</p>
            </div>
            <div className="features-search">
                <input type="text" placeholder='Search' onChange={(e) => setSearchUsers(e.target.value)} />
                <Button variant="outlined" onClick={handleSort}>Sort</Button>
            </div>
            <div className='features-cards'>
                {
                    users.filter(x => x.title.toLowerCase().includes(searchusers.toLowerCase())).map((element) => (
                        <Cards datas={element} key={element._id} />
                    ))
                }

            </div>
        </div>
    )
}

export default Features