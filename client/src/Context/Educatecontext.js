import { createContext, useContext, useState } from "react";


const Context = createContext()

export const EducateProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [favs, setFavs] = useState([])
    const [searchusers, setSearchUsers] = useState("")

    const data = {
        users, setUsers, favs, setFavs, searchusers, setSearchUsers
    }

    return (
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export const useProvider = () => useContext(Context)