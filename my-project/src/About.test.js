//import { renderProvider, screen } from "./utils/helpers"
import { render as rtlReducer, screen } from "@testing-library/react"
import About from "./components/pages/About/About"
import { Provider } from "react-redux"
import store from "./redux/store"
const render = component => rtlReducer(
    <Provider store={store}>
        <About/>
    </Provider>

)

describe('Renders about page', () => {
    test('shows about', () => {
        render(<About/>)
        const testElement = screen.getByText("About")
        expect(testElement).toBeInTheDocument()
    })

    test('shows my name', () => {
        render(<About/>)
        const testElement = screen.getByRole('heading', {
            level:3
        })
        expect(testElement).toHaveTextContent("Kartik")
        
    })
})