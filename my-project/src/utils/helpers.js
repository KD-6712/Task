import { render } from "@testing-library/react";
import { Provider } from "react-redux";
const customRender = (ui, options) => render(ui, {wrapper: Provider, ...options})

export * from '@testing-library/react'
export {customRender as renderProvider}