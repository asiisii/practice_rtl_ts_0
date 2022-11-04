// Tdd should render the text Hello 
// and if a text is passed into the component it should render the hello followed by the name

import { render, screen } from "@testing-library/react"
import Tdd from "./Tdd"


test("Tdd renders correctly", () => {
  render(<Tdd />)
  const textEle = screen.getByText('Hello,')
  expect(textEle).toBeInTheDocument()
})

test('Tdd renders with a name', () => {
  render(<Tdd name='Asiisii' />)
  const textEle = screen.getByText('Hello, Asiisii')
  expect(textEle).toBeInTheDocument()
})