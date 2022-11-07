import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import Counter from '../../components/counter/Counter'

describe('<Counter />', () => {
	it('renders correctly', () => {
		render(<Counter />)
		const counterEle = screen.getByRole('heading', {
			name: /0/i,
		})
		expect(counterEle).toBeInTheDocument()

		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})
		expect(incrementBtn).toBeInTheDocument()
	})

	it('renders a counter of 0', () => {
		render(<Counter />)
		const counterEle = screen.getByRole('heading', {
			name: /0/i,
		})
		expect(counterEle).toHaveTextContent('0')
	})

	it('renders a count of 1 after clicking the increment button', async () => {
		user.setup()
		render(<Counter />)
		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})
		await user.click(incrementBtn)
		const counterEle = screen.getByRole('heading')
		expect(counterEle).toHaveTextContent('1')
	})

	it('renders a counter of 2 after clicking the increment button twice', async () => {
		user.setup()
		render(<Counter />)
		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})
		await user.dblClick(incrementBtn)
		const counterEle = screen.getByRole('heading')
		expect(counterEle).toHaveTextContent('2')
	})
})
