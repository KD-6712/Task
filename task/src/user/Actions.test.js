import *  as action from './Actions'
import * as types from './Constants'

describe('action', () => {
    test('should create an action to check if users are loading', () => {
        const expectedAction = {
            type: types.FETCH_USERS_REQUEST
        }
        expect(action.fetchUsersRequest()).toEqual(expectedAction);
    })

    test('should create an action to cjeck if users fetch was success', () => {
        const dumArr = [1,2,3,4]
        const expectedAction = {
            type: types.FETCH_USERS_SUCCESS,
            payload: dumArr
        }
        expect(action.fetchUsersSuccess(dumArr)).toEqual(expectedAction);
    })

    test('should create an action to check if users fetch was a failure', () => {
        const error = "There is an error"
        const expectedAction = {
            type: types.FETCH_USERS_FAILURE,
            payload: error
        }
        expect(action.fetchUsersFailure(error)).toEqual(expectedAction)
    })
})