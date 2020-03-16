import React from "react";
import s from './Messeges.module.css';

const Messeges = () => {
    return (
        <div className={s.messeges}>
            <div className={s.messegesItem}>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <span className={s.userName}>Victor Parenyuk</span>
                        <span className={s.text}>Hello!</span>
                    </div>
                </div>
                <div className={s.messege}> <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <span className={s.userName}>Vasia Pypkin</span>
                        <span className={s.text}>Hy</span>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <span className={s.userName}>Zinedin Zidan</span>
                        <span className={s.text}>Hello!</span>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <span className={s.userName}>Maradona</span>
                        <span className={s.text}>Hello!</span>
                    </div>
                </div>
                <div className={s.messege}>
                    <img src='https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg' />
                    <div className={s.head}>
                        <span className={s.userName}>Pele</span>
                        <span className={s.text}>Hello!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messeges;