import React from "react";
import HomeStyles from '../styles/Home.module.css'

const Userlist = ({userInfo}) => {
    return (
        <div>
            <main className={HomeStyles.main}>
                <div className={HomeStyles.grid}>
                 {userInfo?.map((user) => <div className={HomeStyles.card}>
                          <p><b>Name :</b> {user.name}</p>
                          <p><b>Email :</b> {user.email}</p>
                          <p><b>Company :</b>{user.company.name}</p>
                          <p className={HomeStyles.p}><a href={`user/${user.id}`}>Know More</a></p>
                          <button>Delete</button>
                 </div>)}
                </div>
            </main>
        </div>
    )
}

export default Userlist