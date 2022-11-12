import s from './Users.module.css'
import React from 'react'
let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers = (props) => {[
            {id: 1, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://regnum.ru/uploads/pictures/news/2019/04/30/regnum_picture_155657981249331_normal.jpg'},
            {id: 2, followed: false, fullName: 'Dmitry', status: 'I am a boss too', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://regnum.ru/uploads/pictures/news/2019/04/30/regnum_picture_155657981249331_normal.jpg'},
            {id: 3, followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}, photoUrl: 'https://regnum.ru/uploads/pictures/news/2019/04/30/regnum_picture_155657981249331_normal.jpg'},
        ]}
    }
    

    return <div>
        
            {
                props.users.map(u => 
                <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.img} src={u.photoUrl}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onCLick={() => {props.follow(u.id)}}>Follow</button>}
                            <button>Follow</button>
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    
}

export default Users;