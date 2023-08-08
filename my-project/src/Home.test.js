import { render as rtlReducer, screen } from "@testing-library/react"
import Home from "./components/pages/Home/Home"
import { Provider } from "react-redux"
import store from "./redux/store"
const render = component => rtlReducer(
    <Provider store={store}>
        <Home/>
    </Provider>

)

describe('Renders Home page', () => {
    test('shows age', () => {
        render(<Home/>)
        const testElement = screen.getByRole('heading', {
            name: /age page/i
          })
        expect(testElement).toBeInTheDocument()
    })

    test('shows my name', () => {
        render(<Home/>)
        const testElement = screen.getByRole('heading', {
            name: /hi kartik/i
          })
        expect(testElement).toHaveTextContent("Kartik")
        
    })

    test('shows my age', () => {
        render(<Home/>)
        const testElement = screen.getByRole('heading', {
            name: /your age is: 20/i
          })
        expect(testElement).toHaveTextContent(20)
    })
})