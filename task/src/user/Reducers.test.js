import { userReducer } from "./Reducers";
import { initialState } from "./Reducers";
import { fetchUsersRequest, fetchUsersFailure, fetchUsersSuccess } from "./Actions";
test('should return initial state', () => {
    expect(userReducer(undefined, {type: undefined})).toEqual(initialState)
})

test('should handle the user fetch request', ()=> {
    const prevState = {};
    expect(userReducer(initialState, fetchUsersRequest)).toEqual({
        loading: true,
        users: [],
        error: ''
    })
})

test('should handle the users fetch data', () => {
    const expected = {
        loading: false,
        users: [1,2,3,4],
        error: ''
    }
    expect(userReducer(initialState, fetchUsersSuccess([1,2,3,4]))).toEqual(expected);
})

test('should handle the users fetch data failure', () => {
    const expected = {
        loading: false,
        users: [],
        error: 'Error found'
    }
    expect(userReducer(initialState, fetchUsersFailure('Error found'))).toEqual(expected);
})

