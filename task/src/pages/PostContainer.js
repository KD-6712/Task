import React from 'react'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchPosts } from '../redux'
// function use
function PostContainer({postData, username, fetchPosts}) {
  useEffect(() => {
    fetchPosts()
  }, [])
  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Post List</h2>
      <h3>Hi {username.username}</h3>
      <div>
        {
          postData && postData.posts && postData.posts.map(post => {return <div> <p>
            <b>Post Id: </b> {post.id} <b>Post Title: </b> {post.title} <b>Post Body: </b> {post.body}</p>
            </div>})
        }
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    postData: state.post,
    // post is the postReducer in root reducer
    username: state.form       
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostContainer)
