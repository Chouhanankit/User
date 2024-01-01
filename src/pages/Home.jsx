import React, { useContext, useEffect } from 'react'
import Card from '../components/Card'
import UserContext from '../context/UserContext'
import { fetchUsers } from '../context/UserAction'

function Home() {

    const { users, dispatch } = useContext(UserContext)

    const getUsers = async () => {
        const data = await fetchUsers();
        dispatch({
            type: "GET_USERS",
            payload: data,
        });
    };

    useEffect(() => {
        getUsers();
    })

    if (users.length === 0) {
        return (
            <div className="h1 text-center text-secondary mt-4 display-1">No Users</div>
        )
    }

    return (
        <div className='container p-4'>
            <h1 className='text-center display-1'>Users</h1>
            <div className="row mt-2 g-2">
                {
                    users.map((user) => <Card key={user.id} user={user} />)
                }
            </div>
        </div>
    )
}

export default Home