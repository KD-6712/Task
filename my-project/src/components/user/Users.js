import React from 'react'
import { useEffect, useState } from 'react'
import errorHandle from '../../utils/errorHandler'
import api from '../../utils/api'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersFailure, fetchUsersSuccess } from './actions';
import Snackbars from '../common/SnackBar/Snackbar';
import Box from "@mui/material/Box";
function Users() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const loadingState = useSelector(state => state.load)
    const dispatch = useDispatch()

    useEffect(() => {
         const fetchData = async () => {
        try{
            const response = await api.get('users');
            setData(response);   
            dispatch(fetchUsersSuccess(data))
            // dispatch(unsetLoading())
        } catch(error){
            setError(error);
            dispatch(fetchUsersFailure(error))
            // dispatch(unsetLoading())   
        }
    };
    fetchData();
}, []);
    if(error){
        return <p>Error: {error.message}</p>
    }

    const handleClick = () => {
        try {
            // Simulate an error.
            throw new Error('An error occured');
        } catch (error){
            // Call the custom error handler
            errorHandle(error)
        }
        
    };

  return (
    <div>
         <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Snackbars
         snackbarMsg="Signed in successfully" />
         </Box>
       <h1> Hello World</h1>
            <div>
           
                {data && data.map((user) => <p key={user.id}>{user.name}</p>)}
            </div>
            <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Users
