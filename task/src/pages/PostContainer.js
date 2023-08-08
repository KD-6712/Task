import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../redux'
import Loading from '../components/Navbar/Loading'
import background from '../components/Navbar/fujiyama.jpg'
import CardsPost from '../components/Card/CardsPost'

// This function shows the ui for posts api.
function PostContainer({ postData, username, fetchPosts }) {
  useEffect(() => {
    fetchPosts()
  }, [])
  return postData.loading ? (
      <div>
        <Loading/>
      </div>
    
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: "cover"
       }}>
      <h2 style={{
                color: '#3A4734',
                fontFamily: 'Arial'
            }} className='text-center'>Post List</h2>
      <h3>Hi {username.username}</h3>
      <div>
        {
          postData && postData.posts && postData.posts.map(post => {
            return <div className='my-3 mx-2'> 
              <CardsPost title={post.title} body={post.body}/>
            </div>
          })
        }
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    postData: state.post,
    username: state.form
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
