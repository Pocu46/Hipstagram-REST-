import React from 'react';
import { NavLink } from 'react-router-dom';
import "./users.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className='users-wrapper'>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && 'selectedPage'}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : "21104.png"} alt='nothing' className='userPhoto' />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow?page=${u.id}`, {
                                        withCredentials: true, 
                                        headers: {
                                            "API-KEY": "2d78aed0-6ada-4ee0-9316-708ff47c7f0d"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }
                                    });

                                }}>Unfollow</button>
                                : <button onClick={() => { 
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow?page=${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "2d78aed0-6ada-4ee0-9316-708ff47c7f0d"
                                        }
                                    })
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id);
                                        }
                                    });

                                }}>Follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;