import {Nav} from "../../components/Nav";
import {useEffect, useState} from "react";

function SingleUser() {
    const [user, setUser] = useState(null)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=>res.json())
        .then((data)=> setUser(data));
    }, [user])

    return (
        <div>
            <Nav></Nav>
            <h2>Single User</h2>
            <p>User Name: <b>{user?.name}</b></p>
        </div>
    );
}

// export async function getServerSideProps(ctx){
//     const {params} = ctx
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//     const data =  await res.json();


//     return {
//         props:{
//             user:data
//         }
//     }
// }

export default SingleUser;