import React from "react";
import HomeStyles from "../../../styles/Home.module.css"

const index = ({ user }) => {
    return (
        <div>
            {user &&
                <main className={HomeStyles.main}>
                    <div className={HomeStyles.grid}>
                        <div className={HomeStyles.card1}>
                            <p><b>Name : </b> {user.name}</p>
                            <p><b>Email : </b> {user.email}</p>
                            <p><b>Company : </b>{user.company.name}</p>
                            <p><b>Phone : </b>{user.phone}</p>
                            <p><b>Website : </b>{user.website}</p>
                            <p><b>Address : </b>{user.address.city},
                                {user.address.zipcode}, {user.address.suite}</p>

                        </div>
                    </div>
                </main>}
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    const user = await res.json()
    return { props: { user } }
}

// export async function getStaticPaths() {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
//     const users = await res.json()
//     const paths = users.map((user) =>({ params: {id:user.id.toString()} }))
//     return {
//       paths: paths,
//       fallback: false 
//     };
//   }

export default index;

