import React from "react";
import {NavLink} from "react-router-dom";
import userPhoto from "../../../assets/photo/user.png";
import s from "../Users.module.css";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
                <span>
                    <div>
                       <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.userPhoto}/>
                       </NavLink>
                    </div>
                    <div>
                        {user.followed

                            ? <button disabled={followingInProgress.some(id => id === user.id)}

                                      onClick={() => {unfollow(user.id)


                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {follow(user.id)


                                      }}>Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <spann>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </spann>
                </span>
        </div>
    )
}

export default User;