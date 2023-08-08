import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchUsers } from '../redux'
import Loading from '../components/Navbar/Loading'
import background from '../components/Navbar/fujiyama.jpg'
import Cards from '../components/Card/Cards'

// This function shows the ui for the user api page.
function UserContainer({ userData, username, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])
    return userData.loading ?
        (
            <div>
                <Loading />
            </div>
        ) :
        userData.error ?
        (
            <h2>{userData.error}</h2>
        ) :
        (
            <div style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover"
            }}>
                    <h2 style={{
                        color: '#3A4734',
                        fontFamily: 'Arial'
                    }} className='text-center'> User List </h2>
                    <h3>Hi {username.username}</h3>
                    <div className="row">{
                        userData && userData.users && userData.users.map(user => {
                            return <div className="col-md-4 my-4" key={user.id}>
                                <Cards name={user.name} email={user.email} mobile={user.phone} />
                            </div>
                        })
                    }
                    </div>
            </div>
            )
}

const mapStateToProps = state => {
    return {
        userData: state.user,
        username: state.form
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
