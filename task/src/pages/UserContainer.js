import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../redux'
//import { useSelector} from 'react-redux'
function UserContainer({userData, username, fetchUsers}) {
    useEffect(() => {
        fetchUsers()
    }, [])
   

    return userData.loading ? (
        <h2>Loading</h2>
      ) : userData.error ? (
        <h2>{userData.error}</h2>
      ) : (
        <div>
            <h2>User List</h2>
            <h3>Hi {username.username}</h3>
            <div>
                {
                    userData && userData.users && userData.users.map(user => {return <div> <p> <b>Name:</b> {user.name} <b>UserName:</b>{user.username} <b>e-mail:</b> {user.email} <b>Phone:</b> {user.phone}</p> </div>})
                }
            </div>
        </div>
      )

}


const mapStateToProps = state => {
    // console.log(state.users)
     return {
         userData: state.user,
         username: state.form  
     }
 }
 
 const mapDispatchToProps = dispatch => {
     return{
         fetchUsers: () => dispatch(fetchUsers())
     }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
