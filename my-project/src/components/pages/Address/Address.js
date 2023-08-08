import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { showAddress } from './Actions'
import { useEffect } from 'react'
import { RemoveState } from '../../../utils/RemoveState'
import { initialState } from './Reducers'
import { setInitial } from '../../../utils/SetInitial'
import store from '../../../redux/store'
import { removeStateAction } from '../../../utils/global_state_remover/Actions'

function Address() {
  const dispatch = useDispatch()
  const name = useSelector((state) => state.about)
  let address = useSelector((state) => state.address)

 useEffect(() => {
  return () => {
  //RemoveState(address, initialState)
  dispatch(removeStateAction(initialState, "address"))
  }
}, [])

  const handleClick = () => {
    dispatch(showAddress())
    // address = store.getState()[address]
  }
  return (
    <div>
      <h2>Address</h2>
      <button onClick={handleClick}> Click me</button>
      <h3>Hi {name.name}</h3>
      
      <h3>Address: {address.address}</h3>
      <p>Welcome to the address page</p>
    </div>
  )
}

// export default withReducer("address", addressReducer)(Address)
export default Address