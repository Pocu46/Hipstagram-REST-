import React from 'react';
import "./users.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 1, photoUrl: "Bruce_Willis01.jpg", followed: true, fullName: "Vladimir", status: "coding like a pro", location: { city: "Minsk", country: "Belarus" } },
                { id: 2, photoUrl: "Bruce_Willis01.jpg", followed: false, fullName: "Anna", status: "HR", location: { city: "Philadelphia", country: "US" } },
                { id: 3, photoUrl: "Bruce_Willis01.jpg", followed: false, fullName: "Alex", status: "madness", location: { city: "Riga", country: "?" } }
            ]
        )
    }

    return (
        <div className='users-wrapper'>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt='nothing' className='userPhoto' />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;