import React, { useContext, useEffect } from 'react'
import { fetchSingleUser } from '../context/UserAction'
import UserContext from '../context/UserContext';
import { useParams } from 'react-router-dom';

function UserPage() {

    const { dispatch, user } = useContext(UserContext);
    const params = useParams();
    const getUser = async (id) => {
        const data = await fetchSingleUser(id);
        dispatch({
            type: "GET_USER",
            payload: data,
        });
    };

    useEffect(() => {
        getUser(params.id);
    }, [])

    if (!user) {
        return (
            <h1 className='text-center text-secondary mt-5 display-1'>Loading...</h1>
        )
    }

    return (
        <>
            <h1 className="h1 text-center display-1 text-warning mt-4">USER DETAILS</h1>
            <div className="container p-5">

                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title h1">{user.name}</h5>
                        <p className="card-title">{user.username}</p>
                        <hr />
                        <p className="card-text text-danger">COMPANY: <span className='text-black'>{user.company.name},<br />{user.company.bs},<br />{user.company.catchPhrase}.</span> </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Mail: <br />{user.email}</li>
                        <li className="list-group-item">Website: <br /><a href="">{user.website}</a></li>
                        <li className="list-group-item">Phone: <br />{user.phone}</li>
                    </ul>
                    <div className="card-body">
                        <p>Address:</p>
                        <a href="#" className="card-link">{user.address.city} <br />{user.address.suite} <br />{user.address.zipcode}</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UserPage