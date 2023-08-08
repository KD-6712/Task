import React from 'react'
import { useSelector} from 'react-redux'
import store from '../../../redux/store'
const About = () => {
  const name = useSelector((state) => state.about)
  console.log("About: ", store.getState())
  // console.log(name)

  return (
    <div>
        <h2>About</h2>
        <h3>Hi {name.name}</h3>
        <p>Welcome to the about page!</p>
    </div>
  )
} 

export default About
  