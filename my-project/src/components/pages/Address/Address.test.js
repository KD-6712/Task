//import { renderProvider, screen } from "./utils/helpers"
import { render as rtlReducer, screen } from "@testing-library/react"
import Address from "./Address"
import { Provider } from "react-redux"
import store from "../../../redux/store"
const render = component => rtlReducer(
    <Provider store={store}>
        <Address/>
    </Provider>
)

describe('Renders address page', () => {
    test('shows Address Page', () => {
        render(<Address/>)
        const testElement = screen.getByText("Address")
        expect(testElement).toBeInTheDocument()
    })

    test('shows my name', () => {
        render(<Address/>)
        const testElement = screen.getByRole('heading', {
            name: /hi kartik/i
          })
        expect(testElement).toHaveTextContent("Kartik")    
    })

    test('shows my address', () => {
        render(<Address/>)
        const testElement = screen.getByRole('heading', {
            name: /address: indore/i
          })
        expect(testElement).toHaveTextContent("Indore")
    })
})