import * as action from './Actions';
import * as types from './Constants';

describe('action', () => {
    test('username', () => {
        const expectedAction = {
            type: types.FETCH_USERNAME,
            payload: 'Kartik'
        }
        expect(action.fetchUsername('Kartik')).toEqual(expectedAction);
    })

    test('email', () => {
        const expectedAction = {
            type: types.FETCH_EMAIL_ID,
            payload: 'kartikdisawal@gmail.com'
        }
        expect(action.fetchUsername('kartikdisawal@gmail.com')).toEqual(expectedAction);
    })

    
    test('phone', () => {
        const expectedAction = {
            type: types.FETCH_MOBILE_NO,
            payload: '9755184954'
        }
        expect(action.fetchUsername('9755184954')).toEqual(expectedAction);
    })
    
})