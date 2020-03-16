import React from "react";
import s from './Messeges.module.css';
import {NavLink} from "react-router-dom";

const Messeges = () => {
    return (
        <div className={s.messeges}>
            <div className={s.messegesItem}>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <div className={s.userName}><NavLink to="/messages/1">Victor Parenyuk</NavLink> </div>
                        <div className={s.text}>Hello!</div>
                    </div>
                </div>
                <div className={s.messege}> <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <div className={s.userName}><NavLink to="/messages/2">Vasia Pypkin</NavLink> </div>
                        <div className={s.text}>Hy!</div>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <div className={s.userName}><NavLink to="/messages/3">Zinedin Zidan</NavLink> </div>
                        <div className={s.text}>Hello!</div>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <div className={s.userName}><NavLink to="/messages/4">Ronaldo</NavLink> </div>
                        <div className={s.text}>Hello!</div>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <div className={s.userName}><NavLink to="/messages/5">Messi</NavLink> </div>
                        <div className={s.text}>Hello!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messeges;