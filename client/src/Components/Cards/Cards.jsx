import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useProvider } from '../../Context/Educatecontext'
import './Cards.scss'

function Cards({ datas }) {
    const navigate = useNavigate()
    const { users, setUsers } = useProvider()
    const { favs, setFavs } = useProvider()
    const handleDelete = async (id) => {
        axios.delete(`http://localhost:4000/users/${id}`)
        setUsers(users.filter(x => x._id != id))
    }
    const handleDetails = (id) => {
        navigate(`/details/${id}`)
    }

    const handleFav = (data) => {
        if (favs.some(x => x._id == data._id)) {
            alert("User has been already in favs")
        } else {
            setFavs([...favs, data])
        }
    }
    return (
        <div id='cards'>
            <div className='icons'>
                <i className="fa-solid fa-ellipsis" onClick={() => handleDetails(datas._id)}></i>
                <i className="fa-regular fa-heart" onClick={() => handleFav(datas)}></i>
                <i className="fa-solid fa-xmark" onClick={() => handleDelete(datas._id)}></i>

            </div>
            <i className={datas.icon}></i>
            <h4>{datas.title}</h4>
            <p>{datas.info}</p>
        </div >
    )
}

export default Cards