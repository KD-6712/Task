import React from 'react'

function Cards({name, email, mobile}) {
    return (
        <div>
            <div className="card" style={{width: "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Email: {email}</p>
                    <p className="card-text">mobileNo: {mobile}</p>
                    <a href="https://jsonplaceholder.typicode.com/" className="btn btn-primary">Go To API</a>
                </div>
            </div>
        </div>
    )
}

export default Cards
