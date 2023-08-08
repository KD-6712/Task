import { render, screen } from "@testing-library/jest-dom";
import aboutReducer from '../../../../src/components/pages/About/Reducers'
import { initialState } from "../../../../src/components/pages/About/Reducers";
import * as actions from "../../../../src/components/pages/About/Actions"
describe('reducers testing for about page', () => {
    test('initial state testing', () => {
        const expectedResult = {
            name: "Kartik"
        }
        expect(aboutReducer(undefined, { type: undefined }).toEqual(initialState))
    })
}) 