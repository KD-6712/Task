import { render, screen } from "@testing-library/react";
import UserContainer from "../pages/UserContainer";

describe("UserContainer", () => {
    test("renders the list", async () => {
        render(<UserContainer/>)
        const users = await screen.querySelector('#root > div > div > div')
        expect(users).toHaveLength(3)
    })
})