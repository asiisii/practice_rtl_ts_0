import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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
		const user = userEvent.setup()
		render(<Counter />)
		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})
		await user.click(incrementBtn)
		const counterEle = screen.getByRole('heading')
		expect(counterEle).toHaveTextContent('1')
	})

	it('renders a counter of 2 after clicking the increment button twice', async () => {
		const user = userEvent.setup()
		render(<Counter />)
		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})
		await user.dblClick(incrementBtn)
		const counterEle = screen.getByRole('heading')
		expect(counterEle).toHaveTextContent('2')
	})

	it('renders a count of 10 after clicking the set button', async () => {
		const user = userEvent.setup()
		render(<Counter />)
		const amtInputEle = screen.getByRole('spinbutton')
		await user.type(amtInputEle, '10')
		expect(amtInputEle).toHaveValue(10)

		const setBtn = screen.getByRole('button', {
			name: /set/i,
		})
		await user.click(setBtn)
		const counterEle = screen.getByRole('heading')
		expect(counterEle).toHaveTextContent('10')
	})

	it('elements are focused in the right order', async () => {
		const user = userEvent.setup()
		render(<Counter />)
		const amtInputEle = screen.getByRole('spinbutton')
		const setBtn = screen.getByRole('button', {
			name: /set/i,
		})
		const incrementBtn = screen.getByRole('button', {
			name: /increment/i,
		})

		await user.tab()
		expect(incrementBtn).toHaveFocus()
		await user.tab()
		expect(amtInputEle).toHaveFocus()
		await user.tab()
		expect(setBtn).toHaveFocus()
	})
  

})
