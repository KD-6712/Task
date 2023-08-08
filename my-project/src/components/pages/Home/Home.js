import React from 'react'
import {useSelector, useDispatch, useStore} from 'react-redux'
import { useEffect } from 'react'
import { showAge } from './Actions'
import { initialState } from './Reducers'
import { removeStateAction } from '../../../utils/global_state_remover/Actions'
import store from '../../../redux/store'
function Home() {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.about)
  let age = useSelector((state) => state.age)
  // setInitial(initialState, age)
  const handleClick = () => {
    dispatch(showAge())
    age = store.getState()[age]
  }

  useEffect(() => { 
    return () => {
      dispatch(removeStateAction(initialState, "age"))
    }
  }, [])
  return (
    <div>
     
      <h2>AGE PAGE</h2>
      <h3>Hi {name.name}</h3>
       <h3>Your age is:  {age.age}</h3> 
       <button onClick={handleClick}> Click me</button>
      <p>Welcome to the Home Page</p>
    </div>
  )
}

//export default  withReducer("age", ageReducer)(Home)
export default Home