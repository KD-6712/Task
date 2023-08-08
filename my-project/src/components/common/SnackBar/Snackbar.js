import * as React from 'react';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { unshowSnackbar } from '../redux/Actions';

import { initialState } from '../redux/Reducers';
import { removeStateAction } from '../../../utils/global_state_remover/Actions';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Snackbars(props) {
    const showSnackbar = useSelector(state => state.global.snackbarShown)
    const dispatch = useDispatch()
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(unshowSnackbar())
    };
    useEffect(() => {
     return(() => {
        dispatch(unshowSnackbar())
     })
    }, [])
    const {vertical, horizontal} = {vertical:"top", horizontal:"center"}
    return (
        <div>
           
            <Stack spacing={2} sx={{ width: '100%' }}>
                <Snackbar anchorOrigin={{vertical, horizontal }} open={showSnackbar} autoHideDuration={6000} onClose={handleClose}  key={vertical+horizontal}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                        {props.snackbarMsg}
                    </Alert>
                </Snackbar>
            </Stack>
        </div>

    );
}
