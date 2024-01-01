import React from 'react'
import { Link } from 'react-router-dom'

function Card({ user }) {
    return (
        <div className="col-md-6 col-sm-12 col-lg-4">
            <div className="card p-3 rounded-0 shadow-sm">
                <div className="card-title h3">{user.name}</div>
                <div className="text-secondary">{user.email}</div>
                <Link to={`user/${user.id}`} className='btn btn-info rounded-0 btn-sm my-2'>View Deteils</Link>
            </div>
        </div>
    )
}

export default Card