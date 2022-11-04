import { render, screen } from '@testing-library/react'
import Greet from '../../components/greet/Greet'

test('greet renders correctly', () => {
	render(<Greet />)
	const textElement = screen.getByText('Hello')
	const textElementReGx = screen.getByText(/hello/i) //using regex
	expect(textElement).toBeInTheDocument()
	expect(textElementReGx).toBeInTheDocument()
})
