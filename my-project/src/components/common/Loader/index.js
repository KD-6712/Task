import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {useSelector} from 'react-redux'
//import initializeStore from '../../../redux/initializeStore';

export default function Loader() {
 // const store = initializeStore()
  const isLoading = useSelector(state => state.global.isLoading)
  console.log(isLoading)
  console.log("Loading is: ", isLoading)
  
  return (<>{
  isLoading &&
  <div className='md-6'>
      
    <Box sx={{ display: 'flex',  justifyContent: 'center' }}>
  <CircularProgress />
</Box>
</div>
 } </>)
}