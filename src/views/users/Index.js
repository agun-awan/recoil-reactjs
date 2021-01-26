import React, { useState, useEffect} from 'react';
import axios from "axios";
import {NavLink} from "react-router-dom";

function Index(){
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        catch(e){
            console.log(e.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <div className="col-md-3 mb-4" key={index}>
                                <div className="card text-dark">
                                    <div className="card-header">{user.name}</div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            {user.username}
                                        </div>
                                        <div className="mb-4">
                                            <NavLink to={`http://${user.website}`} target="_blank">{user.website}</NavLink>
                                        </div>
                                        <NavLink className="btn btn-primary" to={`users/${user.id}`}>View Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;