
import { render, screen } from "@testing-library/react";
import FormValidation from "../pages/FormValidation";
import user from '@testing-library/user-event'
import React from "react";
/**
 * @jest-environment jsdom
 */
describe('Form validation checks', () => {
    test('renders the fields', () => {
        render(<FormValidation/>)
        const feild1 = screen.getByRole('heading', {
            name: 'Form'
        })
        expect(feild1).toBeInTheDocument();
    })
    
    test('submit button is disabled', async () => {
        user.setup
        render(<FormValidation/>)
        const submitElement = screen.getByRole('button')
        expect(submitElement).toBeInTheDocument()
        const email = "kartik.."
        const phone = "8748758"
        const Email = screen.getByRole('spinbutton', {
            name: 'Email-Id:'
        })
        await user.type(Email, email)
        const Phone = screen.getByRole('spinbutton', {
            name: 'MobileNo:'
        })
        await user.type(Phone, phone)
        
        expect(submitElement).toBeDisable()
    })
})